import { GET_SCHOOLS, GET_SCHOOLNAME } from "../Actions/Actions";
const defaultState ="";
const defaultSchool =null;

export default function schoolsReducer(state = defaultSchool , action){
    switch(action.type){
        case GET_SCHOOLS:
            return action.lists;
        default:
            return state;
    }
}

export function schoolnameReducer(state = defaultState , action){
    switch(action.type){
        case GET_SCHOOLNAME:
        return action.name;
        default:
        return state;
    }
}
