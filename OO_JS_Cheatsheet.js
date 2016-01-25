// OO JS Cheatsheet

// Two forms of notation:
// 	*Literat notation - 
	var furniture = {
		brand: "IKEA",
		legs: 4
	}
// 	*Constructor form - 
	function furniture(brand, legs) {
		this.brand = brand;
		this.legs = legs;
	};
// Creating an instance within cunstructor form
	var IKEA = new furniture("IKEA", 4);
// This is how to call an instance in square block notation, as below:
	furniture[legs];
// Instances take the constructor and give new specific attributes,
//  but can also give methods
	var clothing = {
		whatKind: "jacket",
		is_nice: function(){
			return "This is a nice " + this.whatKind;
		}
	};
// This method is accessed by dot notation, as below:
	clothing.is_nice();
// This is the prototypical object. It gives inheritance
// from the properties of one object to a new object, and 
// delegates all further and new attributes created later. 
	function furniture(brand, legs) {
		this.brand = brand;
		this.legs = legs;
	};

	function sofas() {
		this.sofas = true
		furniture.apply(this, arguments);
	}

	sofas.prototype = new furniture();