import { resolve } from 'path';
import VueLoaderPlugin from 'vue-loader/lib/plugin'; // плагин для загрузки кода Vue
 
export const entry = './src/main.js';
export const output = {
    // eslint-disable-next-line no-undef
    path: resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
};
export const module = {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.sass$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        indentedSyntax: true,
                        sassOptions:{
                            indentedSyntax: true
                        }
                    }
                }
            ]
        }
    ]
};
export const plugins = [
    new VueLoaderPlugin()
];