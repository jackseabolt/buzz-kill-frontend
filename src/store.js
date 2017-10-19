import {createStore, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk'; 
import {customerReducer} from './reducers'; 

export default createStore(customerReducer, composeWithDevTools(
    applyMiddleware(thunk)
)); 

