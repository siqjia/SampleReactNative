const initialState = {
    books: [
        {
            id: 1,
            title: 'Harry Potter and the Goblet of Fire',
            author: 'J. K. Rowling',
            thumbnail: 'https://covers.openlibrary.org/w/id/7984916-M.jpg'
        },
        {
            id: 2,
            title: 'The Hobbit',
            author: 'J. R. R. Tolkien',
            thumbnail: 'https://covers.openlibrary.org/w/id/6979861-M.jpg'
        },
        {
            id: 3,
            title: '1984',
            author: 'George Orwell',
            thumbnail: 'https://covers.openlibrary.org/w/id/7222246-M.jpg'
        }
    ]
}

export function bookCaseReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_BOOKS':
            return {
                ...state, //in case there are other attributes in the state other than books
                books: [...state.books] //object spread (...), appending state.books to books
            }
        case 'EDIT_BOOK':
            //Array.map loop through books and find book obj with a matching id
            let modifiedBook = state.books.map((book)=>{
                //modify book in books
                if(book.id === action.payload.id){
                    return action.payload;
                }else{
                    return book;
                }
            })
            return {
                ...state,
                books: modifiedBook //appending modifiedBook to state
            }
        case 'ADD_BOOK':
            let bookId = state.books.length + 1;
            action.payload.id = bookId;
            return {
                ...state,
                books: [...state.books, action.payload]
            }
        case 'DELETE_BOOK':
            let deletedBookId = action.payload.id;
            state.books.splice(deletedBookId-1,1); //assuming book ID = index+1
            return {
                ...state,
                books: [...state.books]
            }
        default:
            return state;
    }
}