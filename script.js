//! Task 1
let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

let json1 = JSON.stringify(obj1);
let json2 = JSON.stringify(obj2);
if (json1 === json2) {
  let parsedObj1 = JSON.parse(json1);
  let parsedObj2 = JSON.parse(json2);
  if (
    parsedObj1.name === parsedObj2.name &&
    parsedObj1.age === parsedObj2.age
  ) {
    console.log("The name and age are equal.");
  } else {
    console.log("The name and age are not equal.");
  }
} else {
  console.log("The JSON objects are different.");
}

//! Task 2
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i = i + 1) {
    console.log(result[i].flags.png);
  }
};

//! Task 3
var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
  var data1 = request1.response;
  var result1 = JSON.parse(data1);
  for (var i = 0; i < result1.length; i = i + 1) {
    console.log(
      "Countryname:" + " " + result1[i].name.common,
      "Region:" + " " + result1[i].region,
      "Subregion:" + " " + result1[i].subregion,
      "Population:" + "" + result1[i].population
    );
  }
};
