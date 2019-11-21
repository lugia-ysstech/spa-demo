module.exports = {
    publicPath: "//localhost:3000/",
    configureWebpack: {
        output: {
            library: "singleVue",
            libraryTarget: "window",
            filename: '[name].js',
            chunkFilename: '[name].chunk.js',
        }
    },
    devServer: {
        contentBase: './',
        compress: true,
    }
}
