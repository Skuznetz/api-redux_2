import React,{Component} from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

import UserList from '../components/UserList.jsx';
import Picker from '../components/Picker.jsx';
class AppContainer extends Component {
    componentDidMount(){
        this.props.fetchUsers(this.props.language);
    }
    render() {
        const {users,language,isFetching} = this.props;
        return (
            <div>
                <Picker 
                value={language}
                options = {LANGUAGE} />
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
export default connect(mapStateToProps, {fetchUsers})(AppContainer);
