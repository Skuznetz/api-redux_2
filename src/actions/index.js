import api from '../api';

export const fetchUsers = language =>dispatch => {
    return api.getPopularUsersByLanguage(language)
    .then(data => console.log(data));
}