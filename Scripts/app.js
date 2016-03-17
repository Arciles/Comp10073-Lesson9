// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    var output = "";
    //var firstParagraph = document.getElementById("firstParagraph");

    // Instantiate new xhr object
    var request = new XMLHttpRequest();
    request.open('GET', '/Comp1073%20-%20Lesson9/people.txt', true);
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4) {
			var people = {};

			// Reading from people.txt file into people variable
			people = JSON.parse(request.responseText);
            var addressBook = people.addressbook;

            var addressBookLenght = addressBook.length;

/*			for (var key in addressBook) {
				console.log(addressBook[key]);


				addressBook[key].sayHello = function() {
					output += "<br><hr><br>" + addressBook[key].name + " says hello";
				}
			}*/

			for (var person = 0; person < addressBookLenght; person++) {
				var output = "";
				addressBook[person].sayHello = function() {
					output += "<br><hr><br>" + this.name + " says hello";
				};

				/*
				var Person = {}; /!* var Person = new Object();   *!/

				Person = JSON.parse(request.responseText);

				Person.sayHello = function() {
					output += "<br><hr><br>" + Person.name + " says hello";
				}*/

				// for every key in the Person object, loop...
				for (var key in addressBook[person]) {

					// check if the key is the familyNames array
					if (key === "familyNames") {
						output += "<br>Family Names: <br>";
						output += "<hr><br>";
						output += "<ul>";

						for (var index = 0; index < addressBook[person].familyNames.length; index++) {
							output += "<li>" + addressBook[person].familyNames[index] + "</li>";
						} // for loop

						output += "</ul>";
					} // if statement
					else if (key === "sayHello") {
						addressBook[person].sayHello();
					}

					// for all other cases do the following...
					else {

						output += addressBook[person][key] + "<br>";
					} // else statement

				} // for in
				var paragraph = document.getElementById("paragraph" + person);
				paragraph.innerHTML = output;

				console.log(addressBook[index]);
			}// outer for loop

        }
    });

    request.send();


})();

