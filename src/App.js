import BookForm from "./components/BookForm/BookForm.js";
import BooksList from "./components/BooksList/BooksList.js";
import { useState } from 'react';

const App = () => {

  const [books, setBooks] = useState([
    { id:1, title:"The Catcher in the Rye", author:"John Steinbeck" },
    { id:2, title:"The Witcher", author:"Andrzej Sapkowki" },
  ]);

  return (
    <div>
      <h1>Books App</h1>
      <BooksList  books={books} />
      <BookForm />
    </div>
  );
}

export default App;
