var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: __dirname,
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    module:
    {
        rules: [

        ]
    },
    plugins: [
        new webpack.NameModulesPlugin(),
    ]

}
