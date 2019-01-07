import { combineReducers } from 'redux';
import { bookCaseReducer } from './BookCase/reducer';

export default combineReducers({
    BookCaseList: bookCaseReducer,
})