/**
 * Since Array is a standard JS object, we directly modifying the prototype
 */
(function () {

	/**
	 * Flat a nested array into a flat array. The result is a new Array of object that not contains any other Array. 
	 */
	Array.prototype.flat = function() {
		// Initialize the result
		var flattenArray = [];

		// Function for flatting an array
		// This function can call itself
		var flattenFunction = function(currentArray) {
			// For each element
			currentArray.forEach(function(element) {
				// Check if the current element is an array or not
				if (Array.isArray(element)) {
					// For an array, we flat it directly
					// Do it first to keep the right element order
					flattenFunction(element);
				} else {
					// Not an array, add this element to the flatten array
					flattenArray.push(element);
				}
			}, this);
		}

		// Start the treatment
		flattenFunction(this);

		// Return the result
		return flattenArray;
	}

}());