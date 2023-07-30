module.exports = {
  root: true,
  extends: ['@react-native'],
  rules: {
    quotes: [2, 'single', {avoidEscape: true, allowTemplateLiterals: true}],
    'react/react-in-jsx-scope': 'off',
  },
};
