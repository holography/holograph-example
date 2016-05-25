var HolographyPlugin = require ('holography-webpack-plugin');
var path = require ('path');
var indexHtml = path.join(__dirname, "src", "index.html");

module.exports = {
    entry: [ indexHtml ],
    output: {
        path: "./public/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: indexHtml,
                loaders: ["file?name=[name].[ext]", "extract", "html?" + JSON.stringify({attrs: ["link:href"]})]
            },
            {
                test: /\.scss$/,
                loaders: ["file?name=[name].css", "extract", "css", "sass"]
            }
        ]
    },
    plugins: [
        new HolographyPlugin()
    ]
};
