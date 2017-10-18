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
        dispatch(getPatrons()); 
        // dispatch(patronAdded(patron.table, patron.seat, patron.gender, patron.start))
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
        .then(data => {
            dispatch(renderPatrons(data))
            setTimeout(dispatch(getPatrons()), 60000); 
        }
    );
}

export const ADD_DRINK = 'ADD_DRINK'; 
export const addDrink = (quantity, patronId) => dispatch => { 
    return fetch(`http://localhost:8080/api/drinks/${patronId}`, {
        method: 'PUT', 
        body: JSON.stringify({
            _id: patronId, 
            drinks: {drinkEq: quantity}
        }), 
        headers: {
           'Content-Type': 'application/json' 
        }
    })
    .then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText)
        }
        console.log(res.body)
        return res.json(); 
    })
    .then(patron => {
        console.log(patron)
        dispatch(getPatrons()); 
    })
}; 

export const UPDATE_PATRON = 'UPDATE_PATRON'; 
export const updatePatron = (patron) => ({
    type: UPDATE_PATRON, 
    bac: patron.bac, 
    id: patron.id
})