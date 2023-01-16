import React, {useState} from "react";
import logo from "./logo.jpg";
import {Link} from "react-router-dom";
import "./styles.css";

export default function NewUser() {

    //variables for user
    // let username = undefined
    // let password = undefined
    // let address = undefined
    // let proptype = undefined
    // let bedrooms = undefined
    // let evc = undefined

    // React States
    // const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        setIsSubmitted(true)
    }

        // if (renderForm) {
        //     setIsSubmitted(true)
        // }
        // add password check condition


        // const renderErrorMessage = (name) =>
        //     name === errorMessages.name && (
        //         <div className="error">{errorMessages.message}</div>
        //     );


    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Create Username </label>
                    <input type="text" name="uname" required/>
                </div>
                <div className="input-container">
                    <label>Create Password </label>
                    <input type="password" name="pass" required/>
                </div>
                <div className="input-container">
                    <label>Repeat Password </label>
                    <input type="password" name="passcheck" required/>
                </div>
                <div className="input-container">
                    <label>Address </label>
                    <input type="address" name="address" required/>
                </div>
                <div className="input-container">
                    <label>Property Type </label>
                    <input type="propType" name="propType" required/>
                </div>
                <div className="input-container">
                    <label>Number of Bedrooms</label>
                    <input type="bedrooms" name="bedrooms" required/>
                </div>
                <div className="input-container">
                    <label>Energy voucher code (EVC)</label>
                    <input type="evc" name="evc"/>
                </div>
                <div className="button-container">
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );


    return (

        <div className="NewUser">

                <img style={{
                    objectFit: "cover"

                }}
                    src={logo} className="App-logo" alt="logo"/>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} className="title">Create a new user</div>

            {isSubmitted ? <div className="button-container">User is successfully created, press continue to see account
                <Link to="/loggedin">
                    <input type="button" value="Continue"/>
                </Link>  </div> : renderForm}



        </div>
    )
}





