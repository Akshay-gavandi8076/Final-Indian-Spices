import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SignInForm extends Component{
    render(){
        return(
            <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handelSubmit}>

            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
            </div>

            <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
            </div>
            
            <div className="FormField">
                <button className="FormField__Button mr-20" >Sign In</button> <Link to="/sign-up" className="FormField__Link">Create an Account</Link>
            </div>

            </form> 
          </div>
        );
    }

}
export default SignInForm;