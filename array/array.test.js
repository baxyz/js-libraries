QUnit.module('Array', function() {
	// Existing
	QUnit.test('has all methods', function(assert) {
		// Flat
		assert.equal(typeof [].flat, 'function', 'The function is accessible');
		assert.equal(typeof Array.prototype.flat, 'function', 'The function is accessible in prototype');
	});

	// Flat
	QUnit.test('flat', function(assert) {
		// Basic arrays
		var emptyArray = [];
		var flattenArray = emptyArray.flat();
		assert.deepEqual(flattenArray, [], 'A flatten empty array is an empty array');
		assert.notEqual(flattenArray, emptyArray, 'A flatten array is a new array');

		// Integer arrays
		var sample1 = [[1,2,[3]],4];
		var expected1 = [1,2,3,4];
		assert.deepEqual(sample1.flat(), expected1, 'Wih integers - Sample 1: passed!');

		// Object arrays
		var sample2 = [{a:1,b:1},[[[{c:2}],{}],[{d:4}]],{e:5}];
		var expected2 = [{a:1,b:1},{c:2},{},{d:4},{e:5}];
		assert.deepEqual(sample2.flat(), expected2, 'Wih objects - Sample 1: passed!');
	});
});