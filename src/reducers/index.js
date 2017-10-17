import {ADD_PATRON, addPatron, RENDER_PATRONS, renderPatrons, UPDATE_PATRON, updatePatron} from '../actions'; 
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
    else if (action.type === UPDATE_PATRON) {
        console.log(action.bac)
        const formatted = {};
        state.patrons.forEach((obj, idx) => {
            return formatted[idx] = obj;
        })
        console.log(formatted)
        // for(let i = 0; i < formatted.length; i++) {
        //     if()
        // }

        return Object.assign({}, state, 
            {
                patrons: [
                    ...state.patrons.filter(patron => patron.id !== action.id), 
                    Object.assign({}, ...state.patrons.filter(patron => patron.id === action.id, { 
                        bac: action.bac
                    }))
                ]
            }
        )
    }
    return state; 
} 