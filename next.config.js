const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/theme.less'), 'utf8'),
);

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {};
}

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables,
  },
});
