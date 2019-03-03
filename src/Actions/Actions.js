export const GET_USER_NAME = 'GET_USER_NAME';
export const GET_SCHOOLS = 'GET_SCHOOLS';
export const GET_SCHOOLNAME = 'GET_SCHOOLNAME';

export function getusername(name){
    return {type: GET_USER_NAME,
    name}
}

export function getschools(lists){
    return {type: GET_SCHOOLS, lists}
}

export function getschoolname(name){
    return {type: GET_SCHOOLNAME,
        name}
}