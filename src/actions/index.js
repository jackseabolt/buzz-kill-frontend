import thunk from 'redux-thunk';
export const PATRON_ADDED = 'PATRON_ADDED'
export const patronAdded = (table, seat, gender, start) => ({
    type: ADD_PATRON,
    table, 
    seat,
    gender, 
    start
}); 

export const ADD_PATRON = 'ADD_PATRON';
export const addPatron = (table, seat, gender, start) => dispatch => {
    return fetch('http://localhost:8080/api/patrons/', {
        method: 'POST', 
        body: JSON.stringify({
            table, 
            seat, 
            gender, 
            start
        }), 
        headers: {
           'Content-Type': 'application/json' 
        }
    })
    .then( res => {
        if(!res.ok){
            return Promise.reject(res.statusText)
        }
        return res.json(); 
    })
    .then(patron => {
        console.log(patron);
        dispatch(patronAdded(patron.table, patron.seat, patron.gender, patron.start))
    })
}; 

export const RENDER_PATRONS = 'RENDER_PATRONS'; 
export const renderPatrons = patrons => ({
    type: RENDER_PATRONS, 
    patrons
}); 

export const GET_PATRONS = 'GET_PATRONS'; 
export const getPatrons = () => dispatch => {
    return fetch('http://localhost:8080/api/patrons/')
        .then(res => {
            if(!res.ok){
                return Promise.reject(res.statusText)
            }
            return res.json(); 
        })
        .then(data => dispatch(renderPatrons(data)));
}
