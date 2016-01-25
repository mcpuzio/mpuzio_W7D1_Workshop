// #2
function props(stuff, things, matter) {
	this.stuff = stuff;
	this.things = things;
	this.matter = matter;
	this.new_Stuff = function() {
		for (var i = 0; i < props.length; i++) {
			return props[i]
		};	
	}
};

props.new_Stuff();

// // #3
// 3. Create an object called `Multiplier` with two methods: `multiply` and `getCurrentValue`. 
// `multiply` should initially return the number supplied * 1 and 
// from then on whatever the current value is times the number 
// supplied.`getCurrentValue` should return the last answer 
// returned from multiply.
function Multiplier(n) {

	this.multiply = function(){
		var m = (n*1)
		for (var m = 0; m < n.length; m++) {
			return n[m]
		};
		return n*(n[m]);
	}

	this.getCurrentValue = function() {
		return (this.multiply[m].last);
	}
}

// #4
// 4. Implement an object model that allows you to store strings
// that represent a Photo. Your model should include an Album 
// object that can contain many Photo objects in its photos 
// attribute. Each Album should allow you to add a new photo, 
// list all photos, and access a speciﬁc photo by the order it 
// was added. Each Photo should tell you the photo's ﬁle name and 
// the location the photo was taken in. Create instances of each 
// object deﬁned to prove that your object model works.
	// function Photo(fileName, photoLocation) {
		

		this.photoAlbum = function() {
			for (var i = 0; i < Things.length; i++) {
				Things[i]
			};
			this.allPhotos = function(fileName, photoLocation) {
				// this.photoString = photoString;
				this.fileName = fileName;
				this.photoLocation = photoLocation;
			}
		}
	}
// // #5
// 5. Create a prototypical Person object. From this object, extend a 
// Teacher object and a Student object. Each of these objects should 
// have attributes and methods pertinent to what they describe. Also 
// create a School object that should be able to store instances of 
// students and teachers. Make sure to write code afterwards that 
// creates instances of these objects to make sure that what you've 
// written works well and you're able to store the necessary data in 
// each object.