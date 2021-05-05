module.exports = {
  extends: ['handlebarlabs'],
  rules: {
    'import/extensions': [
      'warn',
      {
        tsx: 'never',
        ts: 'never',
        json: 'always',
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-curly-newline': 0,
    'react/style-prop-object': [
      1,
      {
        allow: ['ExpoStatusBar'],
      },
    ],
  },
};
