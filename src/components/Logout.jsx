import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Admin extends Component {
    constructor(props) {
        super(props);
     localStorage.removeItem('token')
    }
    render() { 
        return (
             <>
             <h1>you have Successfully logout :)</h1>
             <Link to ="/" >Login Again</Link>
             </> 
        );
    }
}
 
export default Admin;