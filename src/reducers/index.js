import {ADD_USER, addUser} from '../actions'; 
const initialState = {
    customers: [
        {
            timeIn: Date.now(), 
            table: 1, 
            seat: 3, 
            bac: 1.4
        }, 
        {
            timeIn: Date.now(), 
            table: 2, 
            seat: 1, 
            bac: 2.4
        }
    ]
}

export const customerReducer = (state=initialState, action) => {
    if(action.type === ADD_USER) {
        return Object.assign({}, state, 
            { customers: 
                [ ...state.customers, {
                        name: action.name,
                        table: action.table, 
                        seat: action.seat,
                        wgt: 150, 
                        gender: action.gender, 
                        timeIn: Date.now(),
                        bac: 0.0,
                        drinks: [] 
                    }
                ]
            })
    }
    return state; 
} 