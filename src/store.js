import {createStore, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk'; 
import {customerReducer} from './reducers'; 
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(customerReducer, composeWithDevTools(
    applyMiddleware(thunk)
)); 

