import api from '../api';

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';

export const selectLanguage = language =>({
    type: SELECT_LANGUAGE,
    language
});

export const fetchUsers = language =>dispatch => {
    dispatch({
        language,
        type: REQUEST_USERS
    })
    return api.getPopularUsersByLanguage(language)
    .then(data => dispatch({
        language,
        type: RECEIVE_USERS,
        users: data.items,
        fetchedAt: Date.now()}));
}

const INVALIDATION_TIME = 40000;
const shouldFetchUsers = (state,language)=>{
    const users = state.usersByLanguage[language];
    if (users && Date.now() - users.fetchedAt < INVALIDATION_TIME) {
        return false;
    }
    return true;

}
    export const fetchUsersIfNeeded = language => 
        (dispatch,getState)=>{
        if (shouldFetchUsers(getState(),language)){
            return dispatch(fetchUsers(language));
        }
    }
    