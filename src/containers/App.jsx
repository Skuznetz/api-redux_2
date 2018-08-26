import React,{Component} from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

import UserList from '../components/UserList.jsx';
import Picker from '../components/Picker.jsx';
class AppContainer extends Component {
    componentDidMount(){
        this.props.fetchUsers('javascript');
    }
    render() {
        const {users,isFetching} = this.props;
        return (
            <div>
                {isFetching ? 'Loading ... ' : 
                <UserList users={users} /> }
            </div>
        );
    }
}
const mapStateToProps = state => ({
    users: state.items,
    isFetching: state.isFetching
});
export default connect(mapStateToProps, {fetchUsers})(AppContainer);
