const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    name: 'client',
    entry: path.join(__dirname, 'src/index.jsx'),
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
  },
  {
    name: 'server',
    entry: path.join(__dirname, 'server/index.js'),
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    output: {
      filename: 'server.js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          },
        },
      ],
    },
  },
  // {
  //   name: 'style',
  //   entry: path.join(__dirname, 'src/styles/styles.css'),
  //   output: {
  //     filename: 'styles.css',
  //     path: path.join(__dirname, 'dist'),
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.css$/,
  //         use: ['style-loader', 'css-loader'],
  //       },
  //     ],
  //   },
  // },
];

/*
   {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
        modules: true,
        localIdentName: "[name]__[local]___[hash:base64:5]"
      },
    }
*/

/*
  {
    name: 'style',
    entry: path.join(__dirname, 'src/styles/styles.css'),
    output: {
      filename: 'styles.css',
      path: path.join(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
*/


/*
  {
    test: /\.css$/,
    loader: 'style-loader',
  }, {
    test: /\.css$/,
    loader: 'css-loader',
    query: {
      modules: true,
      localIdentName: '[name]__[local]___[hash:base64:5]',
    },
  },

*/

// {
//   name: 'styleMod',
//   entry: path.join(__dirname, 'src/styles/reviews.module.css'),
//   output: {
//     filename: 'reviews.module.css',
//     path: path.join(__dirname, 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ['style-loader', {
//           loader: 'css-loader',
//           options: {
//             importLoaders: 1,
//             modules: true,
//           },
//         }],
//       },
//     ],
//   },
// },