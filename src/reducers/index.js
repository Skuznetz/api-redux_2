import {RECEIVE_USERS} from '../actions';

const users = (state = {isFetching: false,items: [] },action) =>{
    switch (action.type){
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