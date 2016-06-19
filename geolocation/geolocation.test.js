QUnit.module('Geolocation', function() {
	// Existing
	QUnit.test('has all methods', function(assert) {
		assert.equal(typeof Geolocation.isWithinDistance, 'function', 'The Geolocation library has the isWithinDistance method');
	});

	// isWithinDistance
	QUnit.test('isWithinDistance', function(assert) {
		// Normal cases
		assert.ok(Geolocation.isWithinDistance(53.3381985, -6.2592576, 100, 52.986375, -6.043701), 'Sample 1: passed!');

		// Distance errors
		assert.throws(
			function() { Geolocation.isWithinDistance(53.3381985, -6.2592576, -1, 52.986375, -6.043701) },
			/distance/,
			'Distance negative: checked!');
		assert.throws(
			function() { Geolocation.isWithinDistance(53.3381985, -6.2592576, 40031, 52.986375, -6.043701) },
			/distance/,
			'Distance too high: checked!');
	});
});