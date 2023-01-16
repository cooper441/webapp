import React, { useState } from "react";
import logo from './logo.jpg';
import { Link } from "react-router-dom";
import "./styles.css";




export default function LandingPage() {


    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "gse@shangrila.gov.un",
            password: "gse@energy"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var {uname, pass} = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({name: "pass", message: errors.pass});
            }
            else if (userData.username === "gse@shangrila.gov.un" && userData.password === "gse@energy") {
                // take to admin page


            }else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({name: "uname", message: errors.uname});
        }

    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required/>
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required/>
                    {renderErrorMessage("pass")}
                </div>

                <div className="button-container">
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );





    return (
        <div className="app">
            <div className="login-form">
                <img src={logo} className="App-logo" alt="logo" />
                <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}} className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
            <div className="button-container">
                <Link to="/newuser">
                    <input type="button" value="New User"/>
                </Link>
            </div>
            <div className="button-container">
                <Link to="/admin">
                    <input type="button" value="Admin Login"/>
                </Link>
            </div>
        </div>

    );
}
