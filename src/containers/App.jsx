import React,{Component} from 'react';
import { connect } from 'react-redux';

import { fetchUsers,selectLanguage } from '../actions';

import UserList from '../components/UserList.jsx';
import Picker from '../components/Picker.jsx';

const LANGUAGES = ['javascript','go','perl','ruby','php','java']
class AppContainer extends Component {
    componentDidMount(){
        this.props.fetchUsers(this.props.language);
    }
    componentWillReceiveProps(nextProps){
        if (this.propslanguage !==nextProps.language){
            this.props.fetchUsers(nextProps.language);
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
const mapStateToProps = state => ({
    users: state.users.items,
    isFetching: state.users.isFetching,
    language: state.language
});
export default connect(mapStateToProps, {fetchUsers,selectLanguage})(AppContainer);
