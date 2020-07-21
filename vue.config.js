var path = require("path"); module.exports = { configureWebpack: { devtool: "source-map", resolve: { extensions: [".js", ".vue", ".json"], alias: {
Componentes: path.resolve(__dirname, "src/components/"), Source: path.resolve(__dirname, "src/") } } } };
