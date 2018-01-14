module.exports = {
    entry: './source/server.jsx',
  output: {
        filename: 'index.js',
        path: '/media/julian/Windows/Users/julia/Mis documentos/D/wossha/react-example/built/server',
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['latest-minimal', 'react']
                }
              }
        ]
    },
    target: 'node'
};