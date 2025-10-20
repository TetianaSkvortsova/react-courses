import path from 'path';
import {fileURLToPath} from 'url';
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 2. Експорт конфігураційного об'єкта, який Webpack буде використовувати для збирання проєкту.
export default {

// 3. Властивість 'mode' (режим): Вказує, для якої мети відбувається збирання.
    //    'production': Вмикає вбудовану мініфікацію, Tree Shaking та інші оптимізації.
    //    'development': Швидке збирання без мініфікації, краще для налагодження.
    mode: 'production', // or 'development' - then no 'minify'

    // 4. Властивість 'entry' (Точка входу): Вказує Webpack, з якого файлу починати будувати граф залежностей проєкту.
    entry: './building/js/init.js',

    // 5. Властивість 'devtool': Контролює генерацію вихідних карт (Source Maps).
    //    'source-map': Дозволяє бачити вихідний код у браузерному налагоджувачі замість транспільованого/зібраного. Критично важливий для налагодження.
    devtool: 'source-map',

// 6. Об'єкт 'output': Вказує Webpack, де і як зберігати зібрані (бандловані) файли.
    output: {

// 7. 'filename': Встановлює назву фінального зібраного файлу (бандлу).
        filename: 'main.js',
        // 8. 'path': Встановлює абсолютний шлях до каталогу, куди буде збережений зібраний файл.
        //    path.resolve() створює абсолютний шлях: __dirname (поточна директорія) + 'dist' (ім'я цільової папки).
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
