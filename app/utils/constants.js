export default BookStatusObj = {
    'book added':{ 
        type: 'success', 
        title: 'Success', 
        message: 'Book has been added!' 
    },
    'add book empty input' :{
        type: 'error',
        title: 'Fail to Add Book',
        message: 'Mandatory input for all fields'
    },
    'book edited' :{ 
        type: 'success', 
        title: 'Success', 
        message: 'Book has been edited!' 
    },
    'edit book empty input' :{
        type: 'error',
        title: 'Fail to Edit Book',
        message: 'Mandatory input for all fields'
    },
    'book deleted' :{
        type: 'success',
        title: 'Success',
        message: 'Book has been deleted!'
    }
}
