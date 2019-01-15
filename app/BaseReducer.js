import { combineReducers } from 'redux';
import { bookCaseReducer } from './BookCase/reducer';
import { userReducer } from './Profile/reducer';

export default combineReducers({
    BookCaseList: bookCaseReducer,
    UserProfile: userReducer
})