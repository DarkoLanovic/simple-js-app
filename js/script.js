
let pokemonList = [
  {
    name: "Ivysaur",
    heigh: "1",
    type: ["grass","poison"]
  },
  {
    name: "Spearow",
    heigh: "0.3",
    type: ["flying","normal"]}
    ,
  {
    name: "Rhydon",
    heigh: "1.9",
    type: ["rock","ground"]
  },
  {
    name: "Starmie",
    heigh: "1.1",
    type: ["psychic","water"]
  },
  {
    name: "Articuno",
    heigh: "1.7",
    type: ["ice","flying"]
  },
  {
    name: "Aggron",
    heigh: "2.1",
    type: ["steel","rock"]
  }
];

// "for" loop which iterate over each object within that array and display them in order
pokemonList.forEach(function(item){
  // checking which pokemon has the biggest heigh
  if (pokemonList[i].heigh >2){
    document.write('<p> "' + pokemonList[i].name + ' (heigh: ' + pokemonList[i].heigh + ')' + '"' + ' - Wow, that\'s big!' + '</p>')
  }else {
    document.write(`<p>"${pokemonList[i].name} (heigh: ${pokemonList[i].heigh})"</p>`);
    //document.write('<p>' + ' "' + pokemonList[i].name + ' ' + ' (heigh: ' + pokemonList[i].heigh + ')' + '"' + '</p>');
  }
});


// let foodList = ['tuna', 'cheese', 'salad'];
//
// document.write('<h3>===for LOOP===</h3>');
// for (let i = 0; i < foodList.length; i++) {
//   document.write('<p>' + foodList[i] + '</p>');
// }
//
// document.write('<h3>===forEach LOOP===</h3>');
// foodList.forEach(function (item) {
//   document.write('<p>' + item + '</p>');
// });
































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
