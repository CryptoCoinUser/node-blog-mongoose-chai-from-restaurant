exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/blog2';


exports.TEMP_DATABASE_URL = (
	process.env.TEMP_DATABASE_URL ||
	'mongodb://localhost/blog2');
exports.PORT = process.env.PORT || 3030; 