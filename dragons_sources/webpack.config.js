const path = require("path");

module.exports = (env) => {
    
  return {
    mode: env.NODE_ENV ?? "development",
    // watch : true,
    entry: "./src/app.js", // Point d'entrée
    // Sortie
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    devtool : 'source-map',
    // Configuration de webpack-dev-server minimale
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'src/img'
        }
      ]
    },
    
  };
};
