import { REACT_APP_API_URL } from '../config';
import 'whatwg-fetch'; 
 
export const ADD_PATRON = 'ADD_PATRON';
export const addPatron = (table, seat, gender, start) => dispatch => {
    return fetch(`${REACT_APP_API_URL}/api/patrons/`, {
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
        if(!res.ok) {
            return Promise.reject(res.statusText)
        }
        return res.json(); 
    })
    .then(patron => {
        return dispatch(getPatrons()); 
    })
    .catch(err => {
        return dispatch(handleError(err))
    })
}; 

export const HANDLE_ERROR = 'HANDLE_ERROR'; 
export const handleError = err => ({
    type: HANDLE_ERROR, 
    err
});

export const CLEAR_ERROR = 'CLEAR_ERROR'; 
export const clearError = () => ({
    type: CLEAR_ERROR
});

export const RENDER_PATRONS = 'RENDER_PATRONS'; 
export const renderPatrons = patrons => ({
    type: RENDER_PATRONS, 
    patrons
}); 

export const GET_PATRONS = 'GET_PATRONS'; 
export const getPatrons = () => dispatch => {
    return fetch(`${REACT_APP_API_URL}/api/patrons/`)
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText)
            }
            return res.json(); 
        })
        .then(data => {
            dispatch(renderPatrons(data))
            setTimeout(function(){dispatch(getPatrons())}, 60000); 
        }
    );
}

export const ADD_DRINK = 'ADD_DRINK'; 
export const addDrink = (quantity, patronId) => dispatch => { 
    return fetch(`${REACT_APP_API_URL}/api/drinks/${patronId}`, {
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
        if(!res.ok) {
            return Promise.reject(res.statusText)
        }
        return res.json(); 
    })
    .then(patron => {
        dispatch(getPatrons()); 
    });
}; 

export const DELETE_PATRON = 'DELETE_PATRON'; 
export const deletePatron = (patronId) => dispatch => {
    return fetch(`${REACT_APP_API_URL}/api/patrons/${patronId}`, {
        method: 'DELETE'
    })
    .then(res => {
        if(!res.ok) {
            return Promise.reject(res.statusText)
        }
        return;
    })
    .then(() => {
        dispatch(getPatrons());
    }); 
}

export const DELETE_ALL = 'DELETE_ALL'; 
export const deleteAll = () => dispatch => {
    return fetch(`${REACT_APP_API_URL}/api/patrons/dayclose/`, {
        method: 'DELETE'
    })
    .then(res => {
        if(!res.ok) {
            return Promise.reject(res.statusText)
        }
        return; 
    })
    .then(() => dispatch(getPatrons()))
}






