module.exports = {
	/*
	 *  @function wordDistance
	 *  @description - given 2 words, compute Levenhstein distance between them
	 *
	 *  @param {string} word1 - first word will be x-axis in matrix
	 *  @param {string} word2 - second word will be y-axis in matrix
	 *
	 *  @returns {int} the levenshtein minimum distance
	 */
	wordDistance: function(word1, word2) {
		// if word1 is empty, its insertions for each character of word2
		if (!word1 || !word1.length) {
			return word2.length;
		}
		// if word2 is empty, its insertions for each character of word1
		if (!word2 || !word2.length) {
			return word1.length;
		}

		// create an array of arrays to house our distances
		var matrix = [];

		// initialize values
		for (var i=0; i <= word1.length; i++) {
			matrix[i] = [i];
		}
		for (var j=0; j <= word2.length; j++) {
			matrix[0][j] = j;
		}

		// fill in with distances from levenshtein algorithm
		for (i = 1; i <= word1.length; i++) {
			for (j = 1; j <= word2.length; j++) {
				// if characters are equal, its the diagonal to top left
				// use charAt because older browsers don't support index style
				if (word1.charAt(i-1) === word2.charAt(j-1)) {
					matrix[i][j] = matrix[i-1][j-1];
				}
				else {
					var x = matrix[i-1][j] + 1;
					var y = matrix[i][j-1] + 1;
					var z = matrix[i-1][j-1] + 1;

					matrix[i][j] = Math.min(x, y, z);
				}
			}
		}
		return matrix[word1.length][word2.length];
	}
};