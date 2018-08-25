import React,{Component} from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';
class AppContainer extends Component {
    componentDidMount(){
        this.props.fetchUsers('javascript');
    }
    render() {
        return <h1>Привет</h1>;
    }
}
const mapStateToProps = state => ({
    users: state.items
});
export default connect(mapStateToProps, {fetchUsers})(AppContainer);
