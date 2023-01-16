import React, {useState} from "react";
import styled from 'styled-components';
import "./styles.css";
import {Link} from "react-router-dom";

function LoggedIn() {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const Button = styled.button`
      margin-top: 10px;
      cursor: pointer;
      font-size: 15px;
      background: #01d28e;
      border: 1px solid #01d28e;
      color: #fff;
      padding: 10px 20px;
      position: center;
      display: flex;
    `





    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    }

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Submission Date </label>
                    <input type="text" name="date" value={date}/>
                </div>
                <div className="input-container">
                    <label>Electric Meter Reading Day </label>
                    <input type="number" name="elecday" required/>
                </div>
                <div className="input-container">
                    <label>Electric Meter Reading Night </label>
                    <input type="number" name="elecnight" required/>
                </div>
                <div className="input-container">
                    <label>Gas meter reading </label>
                    <input type="number" name="gas" required/>
                </div>

                <div className="button-container">
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );

    const renderFormView = (
        <div className="viewbill">

            {/*<ButtonGroup>*/}
                <Button> View Bill </Button>
                <Button> Pay with EVC Credit </Button>
                <Button> Top up credit with valid EVC </Button>
                <Link to="/">
                    <Button> Sign Out </Button>
                </Link>
            {/*</ButtonGroup>*/}

        </div>
    );



    return (
        <div className="view">
            <h1>User: the user</h1>
            <h2>Enter submission details and press Submit to submit new readings</h2>
            <div>{renderForm}</div>
            <div>{renderFormView}</div>
        </div>
    );
}


export default LoggedIn