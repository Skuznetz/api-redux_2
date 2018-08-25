import api from '../api';

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const fetchUsers = language =>dispatch => {
    return api.getPopularUsersByLanguage(language)
    .then(data => dispatch({
        type: RECEIVE_USERS,
        users: data.items}));
}