// IT3240 - Week 07

// Define the findById() function to find an HTML element by id
const findById = function (id) { return document.getElementById(id); };

// Declare an empty array for the names
let volunteerArray = [];


const displayVolunteers = function () {   
    let outputArea = findById("volunteer-list-area");

    let outputString = "";
    let counter = 1;

    for (let i = 0; i < volunteerArray.length; i++) {
        outputString += counter + ". " + volunteerArray[i] + "\n";
        counter++;
    }

    outputArea.value = outputString;
};


const addVolunteer = function () {
    let first = findById("first-name-input").value.trim();
    let last = findById("last-name-input").value.trim();

    if (first === "" || last === "") {
        alert("Please enter both a first and last name.");
        return;
    }

    let volunteerString = last + ", " + first;

    volunteerArray.push(volunteerString);

    displayVolunteers();

    findById("first-name-input").value = "";
    findById("last-name-input").value = "";
    findById("first-name-input").focus();
};


const deleteVolunteer = function () {
    let first = findById("first-name-input").value.trim();
    let last = findById("last-name-input").value.trim();

    if (first === "" || last === "") {
        alert("Please enter both a first and last name to delete.");
        return;
    }

    let target = last + ", " + first;

    // Loop and remove match
    for (let i = 0; i < volunteerArray.length; i++) {
        if (volunteerArray[i] === target) {
            volunteerArray.splice(i, 1);
            break;
        }
    }

    displayVolunteers();

    findById("first-name-input").value = "";
    findById("last-name-input").value = "";
    findById("first-name-input").focus();
};


const clearVolunteers = function () {
    volunteerArray = [];

    displayVolunteers();

    findById("first-name-input").focus();
};


const sortVolunteers = function () {
    volunteerArray.sort();

    displayVolunteers();
};


// When the page is fully loaded, map buttons to functions
window.onload = function () {
    findById("add-button").onclick = addVolunteer;
    findById("delete-button").onclick = deleteVolunteer;
    findById("clear-button").onclick = clearVolunteers;
    findById("sort-button").onclick = sortVolunteers;

    findById("first-name-input").focus();
};
