var env = require('env.json');

/**
 * Determines the current node environment, defaulting to 'development'. Use
 * this to key off the env hash which in turn contains various key value pairs
 * for environment-specific configurations.
 *
 * @returns {*}
 */
exports.config = function() {
  var nodeEnv = process.env.NODE_ENV || 'development';
  return env[nodeEnv];
};
