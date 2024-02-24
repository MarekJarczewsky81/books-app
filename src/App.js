import BookForm from "./components/BookForm/BookForm.js";
import BooksList from "./components/BooksList/BooksList.js";
import React from 'react';
import shortid from 'shortid';

class App extends React.Component {
  // state to jeden obiekt 
  state = {
    books: [
      { id:1, title:"The Catcher in the Rye", author:"John Steinbeck" },
      { id:2, title:"The Witcher", author:"Andrzej Sapkowki" }
    ]
  };

  // nizej == to co wyzej

  // constructor() {
  //   this.state = {
  //     books: [
  //       { id:1, title:"The Catcher in the Rye", author:"John Steinbeck" },
  //       { id:2, title:"The Witcher", author:"Andrzej Sapkowski" }
  //     ]
  //   }
  // }

  
  // to sa metody 
  removeBook = bookId => {
    this.setState({ books: this.state.books.filter(book => book.id !== bookId) })
  };                  
    // This is how you remove a book from the books array. ZWRACA TE ELEMENTY Z TABLICY ,które spełniają wybrany warunek warunek.
  
// metoda
  addBook = newBook => {
    this.setState({ books: [...this.state.books, { id: shortid(), title: newBook.title, author: newBook.author }] })
  };  // yarn add short id

  // metoda render
  render() {
    // destrukturyzacja
    const { books } = this.state;
    const { removeBook, addBook } = this;

    return (
      <div>
        <h1>Books App</h1>
        <BooksList  books={books} removeBook={removeBook} />
        <BookForm addBook={addBook} />
      </div>
    );
  }
}

export default App;
