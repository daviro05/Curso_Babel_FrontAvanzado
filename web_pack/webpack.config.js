const path = require ('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "style.css"
});


module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.(s*)css$/,
                use: extractSass.extract({
                    use: [
                        {loader: "css-loader"},
                        {loader: "sass-loader"}
                    ],
                    fallback: "style-loader"
                })
                //use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
        
    },
    plugins: [
        extractSass
    ],
    mode: 'development',
    //mode: 'production',
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        inline: true,
        contentBase: path.join(__dirname,'dist')
    }
};