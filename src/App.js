import BookForm from "./components/BookForm/BookForm.js";
import BooksList from "./components/BooksList/BooksList.js";


const App = () => {
  return (
    <div>
      <h1>Books App</h1>
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;
