import React, { Component } from 'react';

import User from './User.jsx';

import styles from './UserList.less';

export default class UserList extends Component {
    render() {
        const { users } = this.props;

        return (
            <div className={styles.root}>
                {
                    users.map(user =>
                        <User
                            key={user.login}
                            name={user.login}
                            avatar={user.avatar_url}
                            link={user.url}
                        />
                    )
                }
            </div>
        );
    }
}
