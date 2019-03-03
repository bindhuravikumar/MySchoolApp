import { GET_USER_NAME } from "../Actions/Actions";
const defaultState ="";

export default function loginReducer(state = defaultState, action){
    switch(action.type){
        case GET_USER_NAME:
        console.log("ACTION",action.name);
        let newState = state;
        newState = action.name;
            return newState;
        default:
            return state;
    }
}