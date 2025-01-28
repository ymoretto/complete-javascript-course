// VALUES AND VARIABLES
// let country = "Germany";
// let continent = 'Europe';
let population = 100;

console.log(country);
console.log(continent);
console.log(population);

// DATA TYPES
// let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LET, CONST AND VAR
language = "deutsch";
const country = 'Portugal';
const continent = 'Europe';
const isIsland = false;
//isIsland = true;

// BASIC OPERATORS
console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 =
  country +
  ' is in ' +
  continent +
  'contnent, and has a population of ' +
  population +
  ' million people that speak ' +
  language;

console.log(description1);

// STRING AND TEMPLATES LITERALS

const description2 = `${country} is in ${continent} continent, and has a population of ${population} million people that speak ${language}.`;

console.log(description2);

// TAKING DECISIONS IF/ELSE STATEMENTS
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

// TYPE CONVERSION AND COERCION
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// EQUALITY OPERATORS
const numNeighbours = prompt(
  'How many neighbour countries does your country have?'
);

if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}

// LOGICAL OPERATOR
if (language === 'english' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// SWITCH STATEMENT
switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

// TERNARY OPERATOR
console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);