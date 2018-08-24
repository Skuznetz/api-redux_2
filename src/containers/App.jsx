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

export default connect(null, {fetchUsers})(AppContainer);
