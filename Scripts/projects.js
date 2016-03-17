(function () {
	/*console.log("step1");

	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/Comp1073%20-%20Lesson9/projects.json', true);
	console.log("step2");
	xhr.addEventListener('readystatechange', function () {
		console.log("step3");
		if (xhr.readyState === 4) {
			var projects = {};
			var paragraph = [];

			console.log(xhr.responseText);

			/!*projects = JSON.parse(request.responseText);
			 console.log(projects);

			 paragraph = projects.paragraphs;

			 var paragraphLenght = paragraph.length;

			 console.log(paragraph);
			 for(var index = 0; index < paragraphLenght; index++) {
			 document.getElementById("paragraph" + (index + 1)).innerHTML = paragraph[index];
			 }*!/
		}
	});
	console.log("step4");*/

	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/Comp1073%20-%20Lesson9/projects.json', true);
	xhr.onreadystatechange = function() {
		console.log('ready');
	}
})();