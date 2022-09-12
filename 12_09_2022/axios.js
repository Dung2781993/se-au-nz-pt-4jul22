const axios = require("axios");
const moment = require("moment-timezone");


//Fetch from API
let SydneyTime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(SydneyTime);

// async function getAllUser() {
//   try {
//     const startTime = moment.now();
//     const response = await axios.get(
//       "http://127.0.0.1:8000/api/v1/user-listing"
//     );
//     const endTime = moment.now();
//     console.log(`Duration: ${endTime - startTime}` )
//     if (response.data.success) {
//       console.log(response.data.data);
//       return response.data.data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }


// getAllUser();

// axios
//   .post("http://127.0.0.1:8000/api/v1/user", {
//     firstName: "Joe",
//     lastName: "Doe",
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

