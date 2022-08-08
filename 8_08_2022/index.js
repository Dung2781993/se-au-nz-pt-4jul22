let library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];


library.forEach((item, index) => {
    let book = `${library[index].title} by ${library[index].author}`
    if(library[index].readingStatus) {
        console.log(`Already read ${book}`);
    } else {
        console.log(`You still need to read ${book}`);
    }
})