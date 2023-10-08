import '@tamagui/core/reset.css';
import {
  YStack,
  H1,
  Separator,
  Button,
  Text,
  Input,
  SizableText,
  H2,
  ScrollView,
} from 'tamagui';
import {Pressable, useColorScheme} from 'react-native';
import styles from '../../root-layout.module.scss';

const cns = (
  ...classes: (string | false | undefined | null)[]
): Record<string, any> => ({
  $$css: true,
  _: classes.filter(Boolean).join(' ') as unknown as string[],
});

export const Home = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  return (
    <ScrollView f={1} contentContainerStyle={{paddingBottom: 300}}>
      <YStack
        jc="center"
        ai="center"
        m="$4"
        w={'100%'}
        space="$4"
        theme={'blue'}>
        <H1 ta="center" fontFamily={'$silkscreen'}>
          Expo + Tamagui bugs
        </H1>
      </YStack>

      <H2>1. CSS classes are not working with Tamagui: </H2>
      <Separator padding={10} theme={'blue'} />
      <SizableText>
        Tamagui{' '}
        <SizableText color={'$colorHover'} theme={'yellow'}>
          {'<Button />'} (first button)
        </SizableText>{' '}
        should have the{' '}
        <SizableText color={'$colorHover'} theme={'yellow'}>
          myButton
        </SizableText>{' '}
        styles applied, just like the simple React Native button (second button)
      </SizableText>
      <YStack maxWidth={400} space={'$4'} mt={30}>
        <Button style={cns(styles.myButton)} theme={'blue'}>
          Tamagui Button with CSS
        </Button>
        <Pressable
          style={[
            cns(styles.myButton),
            {borderWidth: 1, borderColor: isDarkMode ? 'white' : 'black'},
          ]}>
          <Text>React Native button with CSS</Text>
        </Pressable>
      </YStack>

      <H2 paddingTop={50}> 2. Resetting Tamagui CSS does not work: </H2>

      <Separator padding={10} theme={'blue'} />

      <SizableText>
        <SizableText color={'$colorHover'} theme={'yellow'}>
          {"import '@tamagui/core/reset.css'"}
        </SizableText>{' '}
        doesn't do anything. The following input should not have focus styles on
        the web:
      </SizableText>
      <Input />

      <H2 paddingTop={50}>3. (Native only) SizableText styles not applied </H2>
      <Separator padding={10} theme={'blue'} />
      <SizableText>
        <SizableText color={'$colorHover'} theme={'yellow'}>
          {'<SizableText />'}
        </SizableText>{' '}
        styles are not applied
      </SizableText>
    </ScrollView>
  );
};
