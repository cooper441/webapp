import logo from "./logo.jpg";
import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import "./styles.css";

export default function AdminLandingPage() {

    const renderLogo = (
        <img src={logo} className="App-logo" alt="logo" />
    )

    // DropDownButton
    function DropDownButton() {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select User
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">User 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">User 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">User 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }


    return (
        <div className="Admin Form">
            <div>{renderLogo}</div>
            <div>{DropDownButton()}</div>
        </div>
    )
}