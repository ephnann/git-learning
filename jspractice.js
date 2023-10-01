function helloWorld() {
    const message = "Hello World!";
    console.log(message);
}

helloWorld();

function greet(name, description = "cool") {
    return `Hello ${name}, you are ${description}`;
}

let result = greet("Ephy");
console.log(result);

result = greet("John", "boring");
console.log(result);


function counter(input) {
    if (input < 18) {
        return `You are not old enough to buy alcohol`;
    }
    else {
        return `You are of legal drinking age`;
    }
}

let ageLimit = counter(19);
console.log(ageLimit);

ageLimit = counter(16);
console.log(ageLimit);

// program using switch statement
const month = 5;
let monthName;

switch (month) {
    case 1:
        monthName = 'January';
        break;

    case 2:
        monthName = 'February';
        break;
    case 3:
        monthName = 'March';
        break;
    case 4:
        monthName = 'April';
        break;
    default:
        monthName = 'Invalid month'
}


console.log(`It's ${monthName}`);

// Pass rate program

let allStudents = [
    3,
    1,
    1,
    4,
    5,
    2,
    'B',
    'C',
    'A',
    'A',
    'D'
]
let studentsWhoPass = []

for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] >= 3) {
        studentsWhoPass.push(allStudents[i]);
    }
    else if (allStudents[i] === 'A') {
        studentsWhoPass.push(allStudents[i]);
    }
    else if (allStudents[i] === 'B') {
        studentsWhoPass.push(allStudents[i]);
    }
}

console.log(studentsWhoPass);


// counter program

for (let i = 0; i < 20; i += 3) {
    console.log(i);
}