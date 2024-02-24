import BookForm from "./components/BookForm/BookForm.js";
import BooksList from "./components/BooksList/BooksList.js";
import { useState } from 'react';
import shortid from 'shortid';

const App = () => {

  const [books, setBooks] = useState([
    { id:1, title:"The Catcher in the Rye", author:"John Steinbeck" },
    { id:2, title:"The Witcher", author:"Andrzej Sapkowki" },
  ]);

  const removeBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId));
  };                  
    // This is how you remove a book from the books array. ZWRACA TE ELEMENTY Z TABLICY ,które spełniają wybrany warunek warunek.
  

  const addBook = newBook => {
    setBooks([...books, { id: shortid(), title: newBook.title, author: newBook.author }]);
  };  // yarn add short id

  return (
    <div>
      <h1>Books App</h1>
      <BooksList  books={books} removeBook={removeBook} />
      <BookForm addBook={addBook} />
    </div>
  );
}

export default App;
