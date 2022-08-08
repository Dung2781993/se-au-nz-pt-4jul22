let jsonObject = `
{
    "dogBreeds": [{
        "breed": "Labrador Retriever",
        "breedType": "Purebred",
        "origin": "Canada,USA",
        "popularity": "1",
        "temperament": ["Cheerful", "Gentle", "Friendly", "Intelligent"],
        "hypoallergenic": "No",
        "intelligence": 7,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }, {
        "breed": "German Shepard",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "2",
        "temperament": ["Corageous", "Intelligent", "Loyal", "Watchful"],
        "hypoallergenic": "No",
        "intelligence": 3,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }, {
        "breed": "Golden Retriever",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "3", 
        "temperament": ["Intelligent", "Kind", "Friendly", "Confident"],
        "hypoallergenic": "No",
        "intelligence": 4,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }, {
        "breed": "French Bulldog",
        "breedType": "Purebred",
        "origin": "France, UK",
        "popularity": "4",
        "temperament": ["Playful", "Sociable", "Friendly", "Lively", "Patient"],
        "hypoallergenic": "No",
        "intelligence": 58,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Bulldog",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "5",
        "temperament": ["Friendly", "Docile", "Willful", "Gregarious"],
        "hypoallergenic": "No",
        "intelligence": 77,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Beagle",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "6",
        "temperament": ["Gentle", "Intelligent", "Even Tempered", "Determined"],
        "hypoallergenic": "No",
        "intelligence": 72,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Poodle",
        "breedType": "Purebred",
        "origin": "Germany, France",
        "popularity": "7",
        "temperament": ["Intelligent", "Faithful", "Trainable", "Instinctual"],
        "hypoallergenic": "Yes",
        "intelligence": 2,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Rottweiler",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "test",
        "temperament": ["Intelligent", "Corageous", "Fearless", "Confident"],
        "hypoallergenic": "No",
        "intelligence": 9,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "German Shorthaired Pointer",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "9",
        "temperament": ["Intelligent", "Trainable", "Boisterous", "Cooperative"],
        "hypoallergenic": "No",
        "intelligence": 9,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Yorkshire Terrier",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "10",
        "temperament": ["Independent", "Intelligent", "Corageous", "Confident"],
        "hypoallergenic": "Yes",
        "intelligence": 27,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Boxer",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "11",
        "temperament": ["Playful", "Friendly", "Devoted", "Loyal"],
        "hypoallergenic": "No",
        "intelligence": 48,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Hellomama2",
        "breedType": "Purebred",
        "origin": "Dutch",
        "popularity": "11",
        "temperament": ["Playful", "Friendly", "Devoted", "Loyal"],
        "hypoallergenic": "No",
        "intelligence": 48,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }]
}`;

let bodyData = JSON.parse(jsonObject);
let listDog = bodyData.dogBreeds;

const GERMANY_DOG = "Purebred";

// let firstselectDogList = document.getElementById("firstDogList");
// for (let i = 0; i <= listDog.length - 1; i++) {
//   let option = document.createElement("option");
//   let dog = listDog[i];
//   option.value = dog.breed;
//   option.text = dog.breed;
//   firstselectDogList.appendChild(option);
// }

// let secondselectDogList = document.getElementById("secondDogList");
// for (let i = 0; i <= listDog.length - 1; i++) {
//   let option = document.createElement("option");
//   let dog = listDog[i];
//   option.value = dog.breed;
//   option.text = dog.breed;
//   secondselectDogList.appendChild(option);
// }

let exampleObj1 = {
  'school': 'Hello',
  'street': 'AA'
};

let exampleObj = {
  'name': exampleObj1,
  'age': '17'
};



let exampleObj2 = {
  'name': 'test',
  'age': '17'
};

exampleObj.city = "Test";

let arr = [exampleObj, exampleObj1, exampleObj2];

console.log(typeof 1);

console.log(typeof true);

// exampleObj.name = {city: "Test", country: 'AU'};




// let getObjectName = (item) => {
//   try {
//     if(typeof item !== 'object') {
//       throw 'Not Object';
//     }
//     return item.name;
//   } catch (err) {
//     return err;
//   }
// }



// console.log(getObjectName('Test'));

// let compare = () => {
//   //Get the first dog
//   let firstDogSelection = listDog[firstselectDogList.selectedIndex];

//   //Get the second dog
//   let secondDogSelection = listDog[secondselectDogList.selectedIndex];

//   let stringA = "A";

//   let result = "Your grade is " + stringA;

//   let listStudents = ['A', 'B', 'C'];

//   let finalResult = '';
//   listStudents.forEach(item => {
//     let result =  `Student Name is ${item} , `;
//     finalResult += result;
//   });

 

//   if (firstDogSelection === secondDogSelection) {
//     let message = "Same dog";
//     document.getElementById("compare-message").innerHTML = message;
//   }
//   if (firstDogSelection.intelligence > secondDogSelection.intelligence) {
//     let message = `${firstDogSelection.breed} is smarted than the ${secondDogSelection.breed}`;
//     document.getElementById("compare-message").innerHTML = message;
//   }
//   if (firstDogSelection.intelligence < secondDogSelection.intelligence) {
//     let message = `${secondDogSelection.breed} is smarted than the ${firstDogSelection.breed}`;
//     document.getElementById("compare-message").innerHTML = message;
//   }
//   if (firstDogSelection.intelligence == secondDogSelection.intelligence) {
//     let message = `${secondDogSelection.breed} has the same intelligence as the ${firstDogSelection.breed}`;
//     document.getElementById("compare-message").innerHTML = message;
//   }
// };
