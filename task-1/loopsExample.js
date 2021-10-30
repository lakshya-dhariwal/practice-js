//while loop
let i = 0; 
const n = 11;
let oddCounter = 0;
let evenCounter = 0;
//even and odd numbers 0 to n
while (i < n) {
  if (i % 2 === 0) {
    console.log(`Even number : ${i}`);
    evenCounter++;
  } else {
    console.log(`Odd number : ${i}`);
    oddCounter++;
  }
  i++; 
}
console.log(`Total :${evenCounter} Even and ${oddCounter} Odd `);

//for loop
const givenNumber = 3;
const checkTillNo = 100;
//numbers from 0 to n  that are divisible by given number
for (let index = 0; index < checkTillNo; index++) {
    let onDivision = index% givenNumber;
  if (Number.isInteger(onDivision)) {
      console.log(`${index} is divisible by ${givenNumber}`)
  }
}

//for off
const sampleArray = [
    "Hello",
    "there",
    "person",
    "checking",
    "my",
    "repo",
    ":)",
  ];
  
  for (i of sampleArray) {
    console.log(i);
  }
//doWhile
let j = 0;
const k = 10;
do {
  console.log(`loop running... ${j} iteration`);
  j++;
} while (j < k);
console.log("Loop Iterations finisher");
