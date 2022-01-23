const path = require("path");

module.exports = {
  publicPath: "/d3-geology",
  outputDir: path.resolve(__dirname, "../docs"),

  transpileDependencies: [
    'vuetify'
  ]
}
