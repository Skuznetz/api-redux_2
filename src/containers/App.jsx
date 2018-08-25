import React,{Component} from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

import UserList from '../components/UserList.jsx'
class AppContainer extends Component {
    componentDidMount(){
        this.props.fetchUsers('javascript');
    }
    render() {
        const {users} = this.props;
        return (
            <div>
                <UserList users={users} />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    users: state.items
});
export default connect(mapStateToProps, {fetchUsers})(AppContainer);
