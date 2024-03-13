import { createStore } from'redux';
import shortid from 'shortid';

const reducer = (state, action) => {
    switch(action.type) {
        case 'REMOVE_BOOK':
            return { ...state, books: state.books.filter(book => book.id !== action.payload) };
        
        case 'ADD_BOOK':         
            return { ...state, books: [...state.books, {...action.payload, id: shortid() } ]};  //adds a new book to
        default:
            return state
    }
};

const initialState = {
  books: [
    { id: 1, title: "The Catcher in the Rye", author: "John Steinbeck" },
    { id: 2, title: "The Witcher", author: "Andrzej Sapkowki" },
  ],
};

const store = createStore(
    reducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;