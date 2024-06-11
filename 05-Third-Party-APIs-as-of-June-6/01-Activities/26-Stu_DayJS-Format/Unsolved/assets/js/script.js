// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
const graduation = dayjs('2024-10-28');
$("#1a").text(graduation.format("MMM D,YYYY"))

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
const dayWeek = dayjs('2027-01-01').format("[That days is] dddd");
$("#2a").text(dayWeek);

// TODO: 3. What is the current time in the format: hours:minutes:seconds
const reformatDate = dayjs().format("h:mm:ss a");
$("#3a").text(reformatDate);

// TODO: 4. What is the current Unix timestamp?
const currentUnix = dayjs().unix();
$("#4a").text(currentUnix);

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.



// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)
const date1 = dayjs("2027-05-04");
const date2 = days();
const date1.diff(date2);
$("#6a").text(date1.diff(date2))
