

exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/blog-chai';



exports.TEMP_DATABASE_URL = (
	process.env.TEMP_DATABASE_URL ||
	'mongodb://localhost/blog-chai');
exports.PORT = process.env.PORT || 3030; 