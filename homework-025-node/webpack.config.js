// webpack.config.js
import path from 'path';
import {fileURLToPath} from 'url';
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {

    mode: 'production',

    entry: './todo-list/client/main.js',

    devtool: 'source-map',

    output: {

        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
                            }
                        },
                    }
                ]
            },
            {
                test: /\.css$/, // Для всіх файлів, що закінчуються на .css
                use: [
                    'style-loader', // 1. Вбудовує CSS в DOM
                    'css-loader',   // 2. Обробляє @import та url()
                ],
            },
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './todo-list/client/index.html'
        })
    ],
    devServer: {
        // ... other devServer options
        proxy: [
            {
                context: ['/api'], // The path(s) to be proxied
                target: 'http://localhost:3000', // The target URL for the proxy
                changeOrigin: true, // Needed for virtual hosted sites
                secure: false
            },
        ],
    },
};
