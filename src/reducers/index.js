import { ADD_PATRON, RENDER_PATRONS, HANDLE_ERROR, CLEAR_ERROR } from '../actions'; 

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
                ...action.patrons
            ]
        })
    }
    else if (action.type === HANDLE_ERROR) {
        return Object.assign({}, state, { error: action.err }); 
    }
    else if (action.type === CLEAR_ERROR) {
        return Object.assign({}, state, { error: undefined })
    }
    return state; 
} 