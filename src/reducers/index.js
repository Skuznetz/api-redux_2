const users = (state = {isFetching: false,items: [] }) =>{
    switch (action.type){
        case RECEIVE_USERS: {
            return {
                ...state,
                isFetching:false,
                items: action.users
            }
        }
    }
}

export default (state = {},action) => state;