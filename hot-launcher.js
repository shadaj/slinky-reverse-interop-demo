var requiredScalaJS = require("./reverse-interop-demo-fastopt.js");

if (module.hot) {
    module.hot.accept();
}

module.exports = requiredScalaJS.components;
