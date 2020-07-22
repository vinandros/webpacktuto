const path = require("path");
const { NamedModulesPlugin } = require("webpack");


module.exports = {
    entry: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname,"dist")
    },
} 