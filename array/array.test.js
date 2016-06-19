QUnit.module('Array', function() {
	// Has the function
	QUnit.test('has the "flat" function', function(assert) {
		assert.equal(typeof [].flat, 'function', 'The function is accessible');
		assert.equal(typeof Array.prototype.flat, 'function', 'The function is accessible in prototype');
	});

	// Basic arrays
	QUnit.test('basic arrays', function(assert) {
		var emptyArray = [];
		var flattenArray = emptyArray.flat();
		assert.deepEqual(flattenArray, [], 'A flatten empty array is an empty array');
		assert.notEqual(flattenArray, emptyArray, 'A flatten array is a new array');
	});

	// Integer arrays
	QUnit.test('with intergers', function(assert) {
		var sample = [[1,2,[3]],4];
		var expected = [1,2,3,4];
		assert.deepEqual(sample.flat(), expected, 'Sample 1: passed!');
	});

	// Object arrays
	QUnit.test('with objects', function(assert) {
		var sample = [{a:1,b:1},[[[{c:2}],{}],[{d:4}]],{e:5}];
		var expected = [{a:1,b:1},{c:2},{},{d:4},{e:5}];
		assert.deepEqual(sample.flat(), expected, 'Sample 1: passed!');
	});
});