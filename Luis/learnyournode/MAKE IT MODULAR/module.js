module.exports = function(_path, _filter, _callback) {
	var fs = require('fs'); //utilizar el modulo fs
	var path = require('path'); //modulo para el metodo extname(p)

	fs.readdir(_path, function (err, list) {
		if (err) return _callback(err);
		var extensionWanted = "." + _filter; //la extensión vendrá en esta posición
		list = list.filter(function (x) {
				return extensionWanted == path.extname(x);
		});
    _callback(null, list);
	});
};
