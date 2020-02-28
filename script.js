/******************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var $3years = 3;
var johnMark = 'John and Mark'
var if = 23;
*/



/*****************************************
* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver'

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/



/****************************** 
* Basic operators
*/
/*
var now, yearJohn, yearMark
now = 2018
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logiacl operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// Typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/



/**************************************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operator
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/



/************************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

Good luck =)
*/
/*
var weightMark, weightJohn, heightMark, heightJohn;
weightMark = 69;
weightJohn = 55;
heightMark = 1.62;
heightJohn = 1.58;

var markBMI = weightMark / heightMark ** 2;
console.log(markBMI);
var johnBMI = weightJohn / heightJohn ** 2;
console.log(johnBMI);

var markBMI_higher = markBMI > johnBMI;
console.log(markBMI_higher);

console.log("Is Mark's BMI higher than John's?" + ' ' + markBMI_higher);
*/
/****************************
* If / else statement
*/
/*
var firstName = 'John';
var civilStatus = 'single'

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is hopefully marry soon :)');
}


var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is hopefully marry soon :)');
}

/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
// var markHigherBMI = BMIMark > BMIJohn;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/
/*********************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.')
} else {
    console.log(firstName + ' is a man.');
}
*/



/*****************************
* The Ternary Operator and Switch Statement
*/
/*
var firstName = 'John';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/
/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

// Switch statement
/*
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 30;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/


/*****************************
* Turthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values
/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!')
}
*/



/******************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the last 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calulate the average score for each team
2. Decide which team wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK :)
*/
/*
var averageScoreTeamJohn = ( 89 + 120 + 103 ) / 3; // 312/3 = 104
var averageScoreTeamMike = ( 116 + 94 + 123 ) / 3; // 333/3 = 111
var averageScoreTeamMary = ( 97 + 134 + 105 ) / 3; // 336/3 = 112
console.log(averageScoreTeamJohn, averageScoreTeamMike, averageScoreTeamMary);

switch (true) {
    case averageScoreTeamJohn > averageScoreTeamMike && averageScoreTeamJohn > averageScoreTeamMary:
        console.log('John\'s team is winning the game with ' + averageScoreTeamJohn + ' scores!');
        break;
    case averageScoreTeamMike > averageScoreTeamJohn && averageScoreTeamMike > averageScoreTeamMary:
        console.log('Mike\'s team is winning the game with ' + averageScoreTeamMike + ' scores!');
        break;
    case averageScoreTeamMary > averageScoreTeamJohn && averageScoreTeamMary > averageScoreTeamMike:
        console.log('Mary\'s team is winning the game with ' + averageScoreTeamMary + ' scores!');
        break;
    default:
        console.log('The game ended in a draw.');
}
//1 ~ 3
if (averageScoreTeamJohn > averageScoreTeamMike) {
    console.log('John\'s team wins with ' + averageScoreTeamJohn + ' points!');
} else if (averageScoreTeamMike > averageScoreTeamJohn) {
    console.log('Mike\'s team wins with ' + averageScoreTeamMike + ' points!');
} else {
    console.log('There is a draw.');
}
*/
/******************************
* Functions
*/
/*
function caculateAge (birthAge) {
    return 2018 - birthAge;
}

var ageJohn = caculateAge(1990);
var ageMike = caculateAge(1948);
var ageJane = caculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearUntilRetirement(year, firstName) {
    var age = caculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
       console.log(firstName + ' retires in ' + retirement + ' years.'); 
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearUntilRetirement(1990, 'John');
yearUntilRetirement(1948, 'Mike');
yearUntilRetirement(1969, 'Jane');
*/





/*****************************
* Function Statements and Expressions
*/
/*
// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives an uber in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:    
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/



/*************************
* Arrays
*/
/*
// Initialize new array
var names = ['John', 'Mike', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer.' : 'John IS a designer.';
console.log(isDesigner);
*/


/*******************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculater (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% fo a value, simply multiply if with 20/100 =  0.2)

GOOD LUCK :)
*/

function calculatorTip(bill) {
    var percentage;
    switch(bill) {
        case bill < 50:
            percentage = .2;
            break;
        case bill >= 50 && bill < 200:
            percentage = .15;
            break;
        default:
            percentage = .1;
    }
    return bill * percentage;
}

var bills = [125, 40, 268];
var tips = [calculatorTip(bills[0]),
            calculatorTip(bills[1]),
            calculatorTip(bills[2])];

var total = [bills[0] + tips[0],
             bills[1] + tips[1],
             bills[2] + tips[2]];
console.log(tips, total);















