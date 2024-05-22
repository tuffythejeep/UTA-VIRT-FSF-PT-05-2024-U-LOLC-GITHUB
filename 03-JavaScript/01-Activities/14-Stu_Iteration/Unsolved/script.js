// WRITE YOUR CODE BELOW
const students = ["Alex", "Destinee", "Travis", "John", "Sally"];

console.log("Welcome to the class " + students[0]);
console.log("Welcome to the class " + students[1]);
console.log("Welcome to the class " + students[2]);
console.log("Welcome to the class " + students[3]);
console.log("Welcome to the class " + students[4]);

console.log("Total number of students is " + students.length);

for (let i = 0; i < students.length; i++) {
  console.log(`Great to see you, ${students[i]}.`);
}
