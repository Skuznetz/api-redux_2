import React, { Component, PropTypes } from 'react';

import styles from './User.less';

export default class User extends Component {
    render() {
        const { link, name, avatar } = this.props;

        return (
            <a href={link} target='_blank' className={styles.root}>
                <img className={styles.avatar} src={avatar} />
                <div className={styles.info}>
                    <div className={styles.name}> {name} </div>
                </div>
            </a>
        );
    }
}
