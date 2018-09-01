import {RECEIVE_USERS,REQUEST_USERS,SELECT_LANGUAGE} from '../actions';
import {combineReducers} from 'redux';
const users = (state = {isFetching: false,items: [] },action) =>{
    switch (action.type){
        case REQUEST_USERS: {
            return {
                ...state,
                isFetching: true
            };
        }
        case RECEIVE_USERS: {
            return {
                ...state,
                isFetching:false,
                items: action.users
            };
        }
        default: {
            return state;
        }
    }
}
 
const userByLanguage = (state ={},action) => {
    switch (action.type) {
        case REQUEST_USERS:
        case RECEIVE_USERS: {
            return {
                ...State,
                [action.language]: users(state[action.language],action)
            };
        }
        default: {
            return state;
        }
    }
}

const language = (state ='javascript',action)=>{
    switch (action.type){
        case SELECT_LANGUAGE: {
            return action.language
        }
        default: {
            return state
        
        }
    }
};

export default combineReducers({usersByLanguage,language});