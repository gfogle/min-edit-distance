var minEdit = require("../src/minEdit");
var should = require("should");

describe("MIN EDIT WORDS", function () {
	describe("LEVENSTEIN", function () {
		it("should return 3 for kitten, sitting", function() {
			var distance = minEdit.wordDistance("kitten", "sitting");

			should(distance).equal(3);
		});

		it("should return 2 for stop, tops", function() {
			var distance = minEdit.wordDistance("stop", "tops");

			should(distance).equal(2);
		});

		it("should return 8 for rosettacode, raisethysword", function() {
			var distance = minEdit.wordDistance("rosettacode", "raisethysword");

			should(distance).equal(8);
		});
	});
});