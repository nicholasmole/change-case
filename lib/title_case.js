var sentence_case = require('./sentence_case');
// Title Case
module.exports = function(input) {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String} input  The type of adjustment.
   */

  var string_to_sCase = input.toLowerCase().split(' ');

  for (var i = 0; i < string_to_sCase.length; i++) {

    string_to_sCase[i] = sentence_case(string_to_sCase[i]);     

  }
  // Directly return the joined string
  return string_to_sCase.join(' ');
};