// modules.js

exports.getCurrentDateTime = function () {
    const now = new Date();
    return now.toLocaleString();
};
