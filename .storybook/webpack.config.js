const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = (baseConfig, env, config) => {

    baseConfig.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, "../src"),
        use: [
            {
                options: {
                    getCustomTransformers: () => ({
                        before: [ tsImportPluginFactory({
                            libraryName: 'antd',
                            libraryDirectory: 'lib',
                            style: true
                        })]
                    }),
                },
                loader: require.resolve("awesome-typescript-loader")
            },
            {
                loader: require.resolve("react-docgen-typescript-loader")
            }
        ],
        exclude: /node_modules/
    });

    baseConfig.module.rules.push({
        test: /\.(s*)css$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../src")
    });

    baseConfig.module.rules.push({
        test: /\.less$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader",
            options: {
                javascriptEnabled: true
            }
        }]
    });

    baseConfig.resolve.extensions.push('.ts', '.tsx');

    return baseConfig;
};