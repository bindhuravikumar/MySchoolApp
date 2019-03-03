import {combineReducers} from 'redux';
import loginReducer from './LoginReducer';
import schoolsReducer, {schoolnameReducer} from './SchoolsReducer';

export default combineReducers({
    name: loginReducer,
    schools: schoolsReducer,
    schoolname: schoolnameReducer
}
)