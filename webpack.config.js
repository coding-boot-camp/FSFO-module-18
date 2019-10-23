var webpack = require("webpack");

const config = {
  entry: {
    events: './assets/js/events.js',
    schedule: './assets/js/schedule.js',
    tickets: './assets/js/tickets.js',
    dom: './assets/js/domMethods.js',
    jQuery: './assets/js/vendor/jQuery.js',
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
