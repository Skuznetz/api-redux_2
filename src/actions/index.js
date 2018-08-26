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
        type: REQUEST_USERS
    })
    return api.getPopularUsersByLanguage(language)
    .then(data => dispatch({
        type: RECEIVE_USERS,
        users: data.items}));
}