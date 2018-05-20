import React, { Component } from 'react';

import User from '../User';
import Spinner from '../Spinner';
import Modal from '../../containers/Modal';
import '../../styles/UsersTable/index.css';

export default class UsersTable extends Component {
    componentDidMount() {
        this.props.getUsers();
    }
    onClickModal = () => {
        this.props.toggleModal();
    }
    renderContent() {
        return (
            <div className = 'content'>
                <div className = 'main-header'>
                    <h1 className = 'title'>Users</h1>
                    <button onClick = {this.onClickModal} className = 'add-user'>Add User</button>
                </div>
                <table className = 'table table-striped users-table'>
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Visits</th>
                            <th scope="col">Progress</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((item) => <User key = {item.id}
                                                      id = {item.id}
                                                      firstName = {item.firstName}
                                                      lastName = {item.lastName}
                                                      age = {item.age}
                                                      visits = {item.visits}
                                                      progress = {item.progress}
                                                      status = {item.status}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
    render() {
        return (
         <main className = 'main'>
             <div className = 'main-wrapper'>
                 { this.props.users.length ? this.renderContent() : <Spinner /> }
                 { this.props.showModal && <Modal /> }
             </div>
         </main>
    );
  }
}
