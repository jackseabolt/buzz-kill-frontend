export const ADD_USER = 'ADD_USER'
export const addUser = (name, table, seat, gender) => ({
    type: ADD_USER, 
    name,
    table, 
    seat,
    gender
}); 