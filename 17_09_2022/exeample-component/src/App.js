import "./App.css";
// import Books from './components/Books';

const Books = (props) => {
  const books = props.books;
  return (
      books.map(item => {
          return (
              <BookItem key={item.id} book={item}/>
          )
      })    
  )
}

const BookItem = (props) => {
  const book = props.book;
  return (
      <div className ="main">
          <label>Title</label>
          <h2>{book.title}</h2>
          <label>Author</label>
          <h2>{book.author}</h2>
      </div>
  )
}

function App() {
  const books = [
    {
      id: 1,
      author: "Test1",
      title: "Hello World1",
    },
    {
      id: 2,
      author: "Test2",
      title: "Hello World2",
    },
    {
      id: 3,
      author: "Test1",
      title: "Hello World3",
    }
  ];


  return (
    <div className="App">
      <div>
        <Books books={books}/>
      </div>
    </div>
  );
}

export default App;
