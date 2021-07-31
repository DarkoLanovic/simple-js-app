
let pokemonList = [
  {name: "Ivysaur", heigh: "1", type: ["grass","poison"]},
  {name: "Spearow", heigh: "0.3", type: ["flying","normal"]},
  {name: "Rhydon", heigh: "1.9", type: ["rock","ground"]},
  {name: "Starmie", heigh: "1.1", type: ["psychic","water"]},
  {name: "Articuno", heigh: "1.7", type: ["ice","flying"]},
  {name: "Aggron", heigh: "2.1", type: ["steel","rock"]}
];

for (let i=0; i < pokemonList.length; i++){
  document.write(pokemonList[i].name + " " + (pokemonList[i].heigh);
}



let person = [
  {name: "person1", age: 16},
  {name: "person2", age: 10},
  {name: "person3", age: 25}
];

for (let i=0; i < person.length; i++){
  if (person[i].age <19 && person[i].age >13){
    console.log(person[i].name + " is a teenager");
  }else if (person[i].age <13){
    console.log(person[i].name + " is a child");
  }else {
    console.log(person[i].name + " is an adult");
  }
}



































//alert('Hello, My name is Darko');

//let favoriteFood = 'Mediterranean';
//document.write(favoriteFood);

//let myName = 'Darko';
//document.write(myName);
//myName = 'Lanovic';
//document.write(myName);

// Math exsmles
//let simpleAddition = 2 + 2;
//document.write(simpleAddition);

//let size = 100;
//let doubleSize = size * 2;
//document.write(doubleSize);

//let minSize = (doubleSize * 2) - (size / 2);
//document.write(minSize);

// STRINGS
//let text1 = 'This is a text!';
//let text2 = "This uses double quotes.";

//let escapedText = "He said: \"Yes!\", that's for sure";
//let escapedText2 = 'He said: "Yes!", that\'s for sure.';
// If I want to use backslash in text
//let escapedText3 = 'This is \\ it';
