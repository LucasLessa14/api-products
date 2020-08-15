const fs = require('fs');
const path = require('path');

module.exports = app => {
    fs
    .readdirSync(__dirname)
    .filter(file => ((file.indexOf('.')) !== 0 && (file !== "controllers.js")))
    .forEach(file => require(path.resolve(__dirname, file))(app));
}