import React, { Component } from 'react'
import { Redirect } from 'react-router';

class Form extends Component {
    constructor(props) {
        super(props);
     
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        
        this.state = {
            username:"",
            password:"",
            loggedIn
          }
    }

    nameHandler= (event)=>{
        this.setState({ username: event.target.value  });
    }

    passwordHandler =(event)=>{
        this.setState({ password:event.target.value  });
    }

    submitHandler =(event)=>{
        event.preventDefault()
        // console.warn(this.state);
const {username,password}= this.state
        if(username === "A" && password === "B"){
            localStorage.setItem("token", "vdjhvsvfdshfjvkfavfjvcmnMNCvAS")
           this.setState({ loggedIn :true  });
        }
    }


    render() { 

        if(this.state.loggedIn){
            return <Redirect to= '/admin' />
        }

        return (
            <>
            <h1>Login form</h1>
            <form action="#" onSubmit={this.submitHandler}>
                <div>
            Name
            <input 
            type="text"
            value ={this.state.username}
            onChange={this.nameHandler}
             />
             </div>

           <div>
          password
            <input 
            type="password"
            value ={this.state.password}
            onChange={this.passwordHandler}
             />
             </div>
             <button type="submit">submit</button>
            </form>
            </>
          );
    }
}
 
export default Form;