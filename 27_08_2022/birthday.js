const onMyBirthday = (buddy) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!buddy) {
        resolve(2);
      } else {
        reject(new Error("I am sad"));
      }
    }, 2000);
  });
};

// not sick
onMyBirthday(false)
  .then((result) => {
    console.log(`I have ${result} cakes`); // In the console: I have 2 cakes
  })
  .catch((error) => {
    console.log(error); // Does not run
  })
  .finally(() => {
    console.log("Party"); // Shows in the console no matter what: Party
  });

//sick
onMyBirthday(true)
  .then((result) => {
    console.log(`I have ${result} cakes`); // does not run
  })
  .catch((error) => {
    console.log(error); // in console: Error: I am sad
  })
  .finally(() => {
    console.log("Party"); // Shows in the console no matter what: Party
  });
