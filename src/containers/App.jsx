import React,{Component} from 'react';
import { connect } from 'react-redux';

import { fetchUsersIfNeeded,selectLanguage } from '../actions';

import UserList from '../components/UserList.jsx';
import Picker from '../components/Picker.jsx';

const LANGUAGES = ['javascript','go','perl','ruby','php','java','python','css','html']
class AppContainer extends Component {
    componentDidMount(){
        this.props.fetchUsersIfNeeded(this.props.language);
    }
    handleLanguageChange = language=>{
        this.props.selectLanguage(language);
    }
    componentWillReceiveProps(nextProps){
        if (this.props.language !==nextProps.language){
            this.props.fetchUsersIfNeeded(nextProps.language);
        }
    }
    render() {
        const {users,language,isFetching} = this.props;
        return (
            <div>
                <Picker 
                value={language}
                options = {LANGUAGES}
                onChange={this.handleLanguageChange} />
                {isFetching ? 'Loading ... ' : 
                <UserList users={users} /> }
            </div>
        );
    }
}

function getUsersByLanguage(state) {
    return state.usersByLanguage[state.language] || {};
}
const mapStateToProps = state => {
    const users = getUsersByLanguage(state);
    return {
        users: users.items || [],
        isFetching: users.isFetching,
        language: state.language
    };
};
export default connect(mapStateToProps, {fetchUsersIfNeeded,selectLanguage})(AppContainer);
