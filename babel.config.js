module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current',
          esmodules: true,
        },
      },
    ],
  ],
};
