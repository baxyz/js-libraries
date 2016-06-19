var Geolocation = (function() {
	/**
	 * Constant - Earth in kilometer for the WGS'84 (GPS) system
	 */
	const EARTH_RADIUS_WGS84 = 6371;

	return {
		/**
		 * This method tells if a point is around a center limited by the given distance 
		 *  
		 * centerLongitude:	in WGS'84 (GPS)	the longitude of the center (base point)
		 * centerLatitude:	in WGS'84 (GPS)	the latitude of the center (base point)
		 * distance:		in kilometer	the range (limit) around the center; the limit is included
		 * pointLongitude:	in WGS'84 (GPS)	the longitude of the point (of interest)
		 * pointLatitude:	in WGS'84 (GPS)	the latitude of the point (of interest)
		 * 
		 * return true if the point is whithin the range of the 
		 */
		isWithinDistance: function(centerLatitude, centerLongitude, distance, pointLatitude, pointLongitude) {
			// Prerequisites - Distance
			if (isNaN(parseFloat(distance)) || ! isFinite(distance) || distance < 0 || distance > 2 * EARTH_RADIUS_WGS84 * Math.PI)
				throw new RangeError('The distance argument is not valid');

			// Convertion degress -> radians
			var halfCircle = Math.PI / 180;
			var center = {
				lat: centerLatitude * halfCircle,
				lon: centerLongitude * halfCircle
			};
			var point = {
				lat: pointLatitude * halfCircle,
				lon: pointLongitude * halfCircle
			};

			// Computation
			var partDistance = Math.sin(center.lat) * Math.sin(point.lat) + Math.cos(center.lat) * Math.cos(point.lat) * Math.cos(center.lon - point.lon);
			var radianDistance = Math.atan(-partDistance / Math.sqrt(-Math.pow(partDistance, 2) + 1)) + 2 * Math.atan(1);
			var distance = radianDistance * EARTH_RADIUS_WGS84;

			// Result
			return distance <= distance;
		}
	}
})();