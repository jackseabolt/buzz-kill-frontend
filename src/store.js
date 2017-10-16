import {createStore} from 'redux'; 
import {customerReducer} from './reducers'; 
export default createStore(customerReducer); 