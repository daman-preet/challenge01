module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['@babel/plugin-transform-private-methods', {loose: true}],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          src: './src',
        },
      },
    ],
    'jest-hoist',
  ],
};
