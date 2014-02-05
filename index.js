module.exports = function(rate) {
  return function (evt, next) {
    if (Math.random() < rate) {
      return;
    }
    next();
  }
}
