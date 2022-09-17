//Input from csv

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

for (let i = 0; i < library.length; i++) {
  let bookMessage = `${library[i].title} by ${library[i].author}`;
  let book = library[i];
  console.log(book);
  let readingStatus = book.readingStatus;
  console.log(readingStatus);
  if (readingStatus) {
    console.log(`Already read ${bookMessage}`);
  } else {
    console.log(`You still need to read ${bookMessage}`);
  }
}
