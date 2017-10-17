import {ADD_PATRON, addPatron, RENDER_PATRONS, renderPatrons} from '../actions'; 
const initialState = {
    patrons: []
}

export const customerReducer = (state=initialState, action) => {
    if(action.type === ADD_PATRON) {
        return Object.assign({}, state, 
            { patrons: 
                [ ...state.patrons, {
                        table: action.table, 
                        seat: action.seat,
                        weight: 150, 
                        gender: action.gender, 
                        start: Date.now(),
                        bac: 0.0,
                        drinks: [] 
                    }
                ]
            })
    }
    else if (action.type === RENDER_PATRONS) {
        return Object.assign({}, state, { patrons: 
            [
                ...state.patrons, ...action.patrons
            ]
        })
    }
    return state; 
} 