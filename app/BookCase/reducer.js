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
                books: [...state.books] //appending state.books to books
            }
        case 'EDIT_BOOK':
            let books = state.books.map((book)=>{
                if(book.id === action.payload.id){
                    return action.payload;
                }else{
                    return book;
                }
            })
            return {
                ...state,
                books //appending state.books to books
            }
        default:
            return state;
    }
}