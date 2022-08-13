const companies = [];
class Company {
    constructor(name, category, start, end) {
        this.name = name;
        this.category = category;
        this.start = start;
        this.end = end;
    }
}

companies.push(
    new Company("Company One", "Finance", 1981, 2004),
    new Company("Company Three", "Auto", 1999, 2007),
    new Company("Company Four", "Retail", 1989, 2010),
    new Company("Company Five", "Technology", 1987, 2010),
    new Company("Company Six", "Finance", 1986, 1996),
    new Company("Company Eight", "Finance", 1986, 1996),
    new Company("Company Seven", "Technology", 1981, 1996),
    new Company("Company Nine", "Retail", 2011, 1996),
);
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



console.log(companies);



/** 
Exercise 1: In index.js print the name of each company using forEach
Exercise 2: In index.js print the name of each company that started after 1987
Exercise 3: In index.js get only the companies that have category Retail
Exercise 4: In index.js sort the companies based on their end date in asceding order
Exercise 5: In index.js sort the ages array in desceding order
Exercise 6: In index.js make an new object that has the properties of name and category same as the companies[0] and a method print that prints out the name (use object destructuring and ES6 JS - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 
Exercise 7: In index.js create a funcion that takes an unkown number of arguments that are numbers and return their sum;
Exercise 8: In index.js make a function that takes an unkown number of arguments of any type and adds them in an array and returns the array, if the argument is an array it should add it's values to the array that will be returned by the function
*/

/** Exercise 1*/
console.log("Exercise 1");
companies.forEach((item) => {
  console.log(item.name);
});

console.log("-----------------------------------------------------");
/** Exercise 2 */
console.log("Exercise 2");
companies.forEach((item) => {
  if (item.start > 1987) console.log(item.name);
});

console.log("-----------------------------------------------------");

/** Exercise 3 */
console.log("Exercise 3");
let result3 = [];
companies.forEach((item) => {
  if (item.category === "Retail") {
    result3.push(item);
  }
});
result3.forEach((item) => console.log(item));
console.log("-----------------------------------------------------");

/** Exercise 4 */
let sortCompaniesEndDate = [...companies];
console.log("Exercise 4");
sortCompaniesEndDate.sort((a, b) => {
  return a.end - b.end;
});
sortCompaniesEndDate.forEach((item) => console.log(item));
console.log("-----------------------------------------------------");

/** Exercise 5 */
let sortCompaniesAge = [...companies];
console.log("Exercise 5");
sortCompaniesEndDate.forEach((item) => {
  item.age = item.end - item.start;
});

sortCompaniesEndDate.sort((a, b) => {
  return a.age - b.age;
});
sortCompaniesEndDate.forEach((item) => console.log(item));
console.log("-----------------------------------------------------");

/** Exercise 6 */
console.log("Exercise 6");
let firstCompany = companies[0];
if (companies[0].name && companies[0].category) {
  let { name, category} = companies[0];
  let newObject = { name, category };

  //Adding new object to array
  companies.push(newObject);
}

// //Print name method
let printName = (item) => {
  if (item.name) return item.name;
  return "Not valid name";
};

console.log(printName(companies[companies.length - 1]));
console.log("-----------------------------------------------------");

/** Exercise 7 */
console.log("Exercise 7");
let sum = (...nums) => {
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
};

console.log(sum(...ages));
console.log("-----------------------------------------------------");

/** Exercise 8 */
console.log("Exercise 8");
let result = [];
let addArray = (...param) => {
    if(Array.isArray(param)) {
        param.forEach(item => {
            result.push(item);
        })
    } else {
        result.push(param);
    }
    return result;
};
console.log(addArray('test'));
console.log("-----------------------------------------------------");

