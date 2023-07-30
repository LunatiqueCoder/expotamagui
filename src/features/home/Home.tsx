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
      <H2>1. Expo CSS does not work well with Tamagui: </H2>
      <Separator padding={10} theme={'blue'} />
      <SizableText>
        Tamagui{' '}
        <SizableText color={'$colorHover'} theme={'yellow'}>
          {'<Button />'}
        </SizableText>{' '}
        should have the styles reset and also{' '}
        <SizableText color={'$colorHover'} theme={'yellow'}>
          myButton
        </SizableText>{' '}
        styles applied
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
      <H2 paddingTop={50}>2. (Native only) Tamagui Input </H2>
      <Separator padding={10} theme={'blue'} />
      <SizableText>
        <SizableText color={'$colorHover'} theme={'yellow'}>
          {'<Input />'}
        </SizableText>{' '}
        can't be disabled.{' '}
        <SizableText color={'$colorHover'} theme={'yellow'}>
          {'focusable={false}'}
        </SizableText>{' '}
        does not work either
      </SizableText>
      <Input disabled={true} focusable={false} />

      <H2 paddingTop={50}>3. (Android only) SizableText styles not applied </H2>
      <Separator padding={10} theme={'blue'} />
      <SizableText>
        <SizableText color={'$colorHover'} theme={'yellow'}>
          {'<SizableText />'}
        </SizableText>{' '}
        styles are not applied on{' '}
        <SizableText color={'$colorHover'} theme={'yellow'}>
          Android. Might be related:
          https://github.com/facebook/react-native/pull/36656
        </SizableText>
      </SizableText>
    </ScrollView>
  );
};
