import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import * as actions from '../../../store/actions/index';

class UsersList extends Component {
    state = {  }

    componentDidMount(){
        this.props.fetchAllUsers();
    }
    // create function to delete user from DB. Need userId
    deleteUser(id){
        axios.delete(`/api/user/${id}`)
        this.componentDidMount()
    }
    render() { 
        return (
            <React.Fragment>
            <div className="container-flex m-3 p-2">
                <h1 className="text-center"> Current Registered Users</h1>
                <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#id</th>
                    <th scope="col">Name</th>
                    <th scope="col">email</th>
                    <th scope="col">Delete User</th>
                    </tr>
                </thead>
                {this.props.activeUsers.map((user, i)=>
                <tbody>
                    <tr>
                    <th scope="row">{user.id}</th>
                    <td>{user.first_name} {user.last_name}</td>
                    <td>{user.email}</td>
                    <td><button className="btn-small btn-danger" onClick={()=>this.deleteUser(user.id)}>Delete</button></td>
                    </tr>
                </tbody>
                    )}
                </table>
            </div>
            </React.Fragment>
          );
    }
}

const mapStateToProps = state => {
    return {
        activeUsers: state.admin.Users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: () => dispatch(actions.fetchAllUsers()),
    }
}


 
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);