var Geolocation = (function() {
	/**
	 * Constant - Earth in kilometer for the WGS'84 (GPS) system
	 */
	const EARTH_RADIUS_WGS84 = 6371;

	/**
	 * This method provides the distance between two coordinates.
	 *  
	 * point1Latitude:	in WGS'84 (GPS)	the latitude of the point 1
	 * point1Longitude:	in WGS'84 (GPS)	the longitude of the point 1
	 * point2Latitude:	in WGS'84 (GPS)	the latitude of the point 2
	 * point2Longitude:	in WGS'84 (GPS)	the longitude of the point 2
	 * 
	 * return the distance in kilometer between the two coordinates
	 */
	function distanceBetweenTwoPoints(point1Latitude, point1Longitude, point2Latitude, point2Longitude) {
		// Convertion degress -> radians
		var halfCircle = Math.PI / 180;
		var point1 = {
			lat: point1Latitude * halfCircle,
			lon: point1Longitude * halfCircle
		};
		var point2 = {
			lat: point2Latitude * halfCircle,
			lon: point2Longitude * halfCircle
		};

		// Computation
		var partDistance = Math.sin(point1.lat) * Math.sin(point2.lat) + Math.cos(point1.lat) * Math.cos(point2.lat) * Math.cos(point1.lon - point2.lon);
		var radianDistance = Math.atan(-partDistance / Math.sqrt(-Math.pow(partDistance, 2) + 1)) + 2 * Math.atan(1);
		var distance = radianDistance * EARTH_RADIUS_WGS84;

		// Result
		return distance;
	}

	/**
	 * This method tells if a point is around a center limited by the given distance 
	 *  
	 * centerLatitude:	in WGS'84 (GPS)	the latitude of the center (base point)
	 * centerLongitude:	in WGS'84 (GPS)	the longitude of the center (base point)
	 * distance:		in kilometer	the range (limit) around the center; the limit is included
	 * pointLatitude:	in WGS'84 (GPS)	the latitude of the point (of interest)
	 * pointLongitude:	in WGS'84 (GPS)	the longitude of the point (of interest)
	 * 
	 * return true if the point is whithin the range; false otherwise; throw an RangeError if the distance is not coherent
	 */
	function isPointWithinDistance(centerLatitude, centerLongitude, distance, pointLatitude, pointLongitude) {
		// Prerequisites - Distance
		if (isNaN(parseFloat(distance)) || ! isFinite(distance) || distance < 0 || distance > 2 * EARTH_RADIUS_WGS84 * Math.PI)
			throw new RangeError('The distance argument is not valid');
		
		// Result
		return distanceBetweenTwoPoints(centerLatitude, centerLongitude, pointLatitude, pointLongitude) <= distance;
	}

	/**
	 * Exports methods with a simple naming
	 */
	return {
		distance: distanceBetweenTwoPoints,
		isWithinDistance: isPointWithinDistance,
	}
})();