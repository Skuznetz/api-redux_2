import {RECEIVE_USERS,REQUEST_USERS} from '../actions';

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

export default users;