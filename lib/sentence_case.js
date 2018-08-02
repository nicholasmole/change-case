// Sentence Case
module.exports = function(input) {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String} input  The type of adjustment.
   */

	return input.charAt(0).toUpperCase() + input.substr(1);
};