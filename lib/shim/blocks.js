const identity = function(...args) {
  const options = args.pop();
  return options.fn(this);
};

exports.capture = identity;
exports.case = identity;
exports.each = identity;
exports.form = identity;
exports.if = identity;
exports.paginate = identity;
exports.tablerow = identity;
exports.unless = identity;
