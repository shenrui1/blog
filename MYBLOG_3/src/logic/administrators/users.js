import React, { Component } from 'react';
import UsersUI from '../../ui/administrators/usersUI';
import {common} from '../../app';


export default class Users extends Component {
    constructor(props) {
        super(props);
        common.on('admin_users', data => {
            this.state = data;
        })
    }
    
    render() {
        return (
            <UsersUI
                userList = {this.state.userList}
            />
        )
    }
}
