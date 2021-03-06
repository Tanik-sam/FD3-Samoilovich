const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin({
    filename: "br2jsxTotal.css"
});

module.exports = { 
    entry: "./Br2jsxMain.js", // основной файл приложения
    output:{ 
        path: __dirname, // путь к каталогу выходных файлов
        filename: "br2jsxTotal.js"  // название создаваемого файла 
    }, 
    devtool:'source-map',
    module:{ 
        rules:[
            { 
                test: /\.jsx?$/, // какие файлы обрабатывать
                exclude: /node_modules/, // какие файлы пропускать
                use: { loader: "babel-loader" }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: ["css-loader"]
                })
            }            
        ] 
    },
    plugins: [
        extractCSS
    ]
}