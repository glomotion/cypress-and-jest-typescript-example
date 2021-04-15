// babel.config.js
module.exports = (api) => {
  let plugins = ["@babel/plugin-transform-runtime", "lodash"];

  if (api.env() === "production") {
    plugins = [...plugins];
  }

  return {
    presets: [
      [
        "@babel/preset-react",
        {
          // pragma: 'dom', // default pragma is React.createElement (only in classic runtime)
          // pragmaFrag: 'DomFrag', // default is React.Fragment (only in classic runtime)
          // throwIfNamespace: false, // defaults to true
          // runtime: 'classic', // defaults to classic
          // // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
        },
      ],
      "@babel/preset-env",
      "@babel/preset-typescript",
    ],
    plugins,
  };
};
