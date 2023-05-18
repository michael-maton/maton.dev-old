module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './components'
          }
        }
      ]
    ]
  };
};
