const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteAngular",
      filename: "remoteEntry.js",
      exposes: {
        "./AngularWidget": "./src/app/components/angular-widget/angular-widget.component.ts",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
      },
    }),
  ],
};