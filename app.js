const fs = require("fs");

const names = require ("./people1.json");
const moreNames = require("./people2.json");

let allNames = names.concat(moreNames).sort();
let people = "";


for (let i = 0; i < allNames.length; i++) {
	people += allNames[i] + "\n";
}

console.log(people);

fs.writeFile('./sorted_people.txt', people, function(err) {
	if (err) {
		console.log("Something went wrong.");
		console.log(err);
		return;
	}
	console.log("File's been created!");
});
