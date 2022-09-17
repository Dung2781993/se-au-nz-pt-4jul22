import BookItem from "./BookItem"

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

export default Books;