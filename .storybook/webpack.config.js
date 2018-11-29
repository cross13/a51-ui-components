const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = (storybookBaseConfig, configType) => {

  storybookBaseConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loaders: [
      require.resolve('awesome-typescript-loader'),
      require.resolve("react-docgen-typescript-loader"),
    ],
    include: path.resolve(__dirname, "../src/")
  });

  storybookBaseConfig = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    storybookBaseConfig,
  );

  storybookBaseConfig.plugins.push(new TSDocgenPlugin()); // optional
  
  storybookBaseConfig.resolve.extensions.push('.ts', '.tsx');

  return storybookBaseConfig;
};

