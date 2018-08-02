var sentence_case = require('./lib/sentence_case');
var title_case = require('./lib/title_case');
var check_input_is_not_string = require('./lib/check_input_is_not_string');
var log_error = require('./lib/log_error');

module.exports = {

  tCase: function(input) {
		if (check_input_is_not_string(input)){

			log_error();
			return input;

		}
		return  title_case(input);
		
  },

	sCase: function(input) {
		if (check_input_is_not_string(input)){
			
			log_error();
			return input;

		}
		return sentence_case(input);
	}
	
};
