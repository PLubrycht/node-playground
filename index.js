const peopleAgeList = [
  11, 22, 12, 34, 33, 33, 12, 23, 18, 19, 17, 11, 22, 12, 34, 33, 33, 12, 23,
  18, 19, 17, 11, 22, 12, 34, 33, 33, 12, 23, 18, 19, 17, 11, 22, 12, 34, 33,
  33, 12, 23, 18, 19, 17, 11, 22, 12, 34, 33, 33, 12, 23, 18, 19, 17, 11, 22,
  12, 34, 33, 33, 12, 23, 18, 19, 17,
];

const a = 18;
let peopleOver18Counter = 0;

for (let i = 0; i < peopleAgeList.length; i++) {
  const singleAge = peopleAgeList[i];
  if (singleAge >= a) {
    peopleOver18Counter++;
  }
}

let peopleBelow18Counter = 0;
for (let i = 0; i < peopleAgeList.length; i++) {
  const singleAge = peopleAgeList[i];
  if (singleAge < a) {
    peopleBelow18Counter++;
  }
}
const sum = peopleBelow18Counter + peopleOver18Counter;
if (sum == peopleAgeList.length) {
  console.log("correct");
} else {
  console.log("incorrect");
}
console.log("over or equals 18:", peopleOver18Counter);
console.log("below 18", peopleBelow18Counter);
console.log("sum", sum);
// extend the program to
// * count the people below 18
// * print the amount
// double check that the sum of above 18 and below 18 people it's equal to the length of the list
