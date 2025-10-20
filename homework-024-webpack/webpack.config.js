import path from 'path';
import {fileURLToPath} from 'url';
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {

    mode: 'production',

    entry: './building/js/init.js',

    devtool: 'source-map',

    output: {

        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './building/index.html'
        })
    ],
};
