var webpack = require("webpack");

const config = {
  entry: {
    app: './assets/js/script.js',
    events: './assets/js/events.js',
    schedule: './assets/js/schedule.js',
    tickets: './assets/js/tickets.js',
    dom: './assets/js/domMethods.js',
    bootstrap: './assets/js/vendor/bootstrap.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
],
  mode: "development"
};

module.exports = config;
