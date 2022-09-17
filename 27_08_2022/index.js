let myfun = {
    story: 9,
}

// creating a new object
var obj = Object.create(myfun);

// getting the prototype
//console.log(Object.getPrototypeOf(obj));

let myfun2 = {
    story: 10,
}

//Set prototype

Object.setPrototypeOf(myfun, myfun2);
// console.log(myfun);
// console.log(myfun2);

let test1 = {
    prop1() {
        return 'Object.isExtensible()';
    },
    prop2() {
        return 'JS';
    }
}

let test2 = {
    prop3() {
        return 'HTML';
    },
}

Object.setPrototypeOf(test2, test1);
// console.log(test2);
// console.log(test2.prop3());
// console.log(test2.prop2());
// console.log(test2.prop1());



let employee = {
    eid: "E102",
    name: "Jack",
    eaddress: "New York",
    salary: 50000
}

console.log("Employee: ", employee);
//Shallow copy
let newEmployee = employee;
console.log('New Employee: ', newEmployee);

console.log('-----------------');
newEmployee.name = "Joe";
console.log('Employee: ', employee);
console.log('New Employee: ', newEmployee);



console.log('-------Deep copy----------');
let newEmployee2 = JSON.parse(JSON.stringify(employee));
console.log("Employee: ", employee);
console.log('New Employee2: ', newEmployee2);

console.log('-----------------');
newEmployee2.name = "Joe";
console.log('Employee: ', employee);
console.log('New Employee: ', newEmployee2);


const lodash = require('lodash');
let deepCopy = lodash.cloneDeep(employee);
console.log("Original Employee: ", employee);
console.log("Deep Copy Employee: ", deepCopy);
deepCopy.name = "Joe2"
console.log('-----------------');
console.log('Employee: ', employee);
console.log('New Employee: ', deepCopy);


