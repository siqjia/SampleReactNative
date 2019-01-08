export function loadBooks() {
    return { type: 'LOAD_BOOKS'}
}

export function deleteBook(book) {
    return { type: 'DELETE_BOOK', payload:book }
}