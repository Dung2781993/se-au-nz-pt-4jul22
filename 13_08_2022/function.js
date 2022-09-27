const fruits = ["Banana"];

let arr3 = [];
let arr1 = fruits;
let arr2 = [...fruits];
fruits.forEach((item) => arr3.push(item));

let studentsData = [
  ["Jack", 24],
  ["Sara", 23],
  ["Peter", 25],
  ["Adam", 29],
  ["Lyly", 20],
];

let sortMultidimention = (arr) => {
  //Bubble sort
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j][1] > arr[j + 1][1]) {
        //Swap process
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(sortMultidimention(studentsData));
