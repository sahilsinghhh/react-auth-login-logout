import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Admin extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state ={
            loggedIn
        }
    }


    render() { 
        if(this.state.loggedIn === false){
            return <Redirect to = '/login'/>
        }
        return (
             <>
             <h1>Welcome to admin panel </h1>
             <Link to ="/logout" >Logout</Link>
             </> 
        );
    }
}
 
export default Admin;