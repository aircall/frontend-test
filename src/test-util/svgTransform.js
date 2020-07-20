const path = require('path');

// This is a custom Jest transformer turning vector components into dummy components.
// http://facebook.github.io/jest/docs/tutorial-webpack.html

module.exports = {
  process(_src, filename) {
    return `
      const React = require('react');

      module.exports = function({ className }) {
        return React.createElement('span', {
          className: className,
          'data-type': 'VectorComponent',
          'data-path': '${path.relative(`${__dirname}/../../src`, filename)}'
        });
      }`;
  },
};
