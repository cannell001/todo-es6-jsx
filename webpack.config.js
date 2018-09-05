module.exports = {

    mode: 'development',
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/dist/app`,
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: `${__dirname}/src`,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
