var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";

alert("Welcome to " + city3);

var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
alert("Welcome to " + cities[4]);
cities.pop(); // to remove an element in the last of an array// 
console.log (cities)
cities.push("New York", "Washington"); // to add one or more element in the last of an array// 
console.log (cities)
cities.shift(); // to remove an element in the start of an array// 
console.log (cities)
cities.unshift("California", "Texas"); // to add one or more  element in the start of an array// 
console.log (cities)
cities.splice(3, 0, "Isb", "Lahore", "Karachi"); // to add one or more element at any position you want // 
console.log (cities)
cities.splice(3, 3, "Isb", "Lahore", "Karachi");
console.log (cities)
var nocities = cities.slice(2, 4);
console.log (cities)

// chapter 18 for loop// 

var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
if (cityToCheck === cleanestCities[0]) {
alert("It's one of the cleanest cities");
}
else if (cityToCheck === cleanestCities[1]) {
    alert("It's one of the cleanest cities");
    }
    else if (cityToCheck === cleanestCities[2]) {
    alert("It's one of the cleanest cities");
    }
    else if (cityToCheck === cleanestCities[3]) {
    alert("It's one of the cleanest cities");
    }
    else if (cityToCheck === cleanestCities[4]) {
    alert("It's one of the cleanest cities");
    }
    else {
    alert("It's not on the list");
}


// consice code using loop // 

for (var i = 0; i <= 4; i++) {
if (cityToCheck === cleanestCities[i]) {
alert("It's one of the cleanest cities");
    }
}