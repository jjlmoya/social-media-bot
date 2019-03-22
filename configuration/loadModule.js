module.exports = function (moduleDir, core) {
    return Object.assign({}, require(moduleDir), core);
};