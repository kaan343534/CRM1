import React, { useState } from 'react';
import "./entry.style.css";
import { Jumbotron } from 'react-bootstrap';
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from '../../components/password-reset/PasswordReset';

export const Entry = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [frmLoad, setFmrLoad] = useState("login");

    const handleOnChange = (e) => {

        const { name, value } = e.target;
        switch(name) {
             case 'email':
                setEmail(value);
                break;
             case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
        console.log(name, value);
    }
    
   const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return alert("fill up all the fields! ")
        }
        console.log("submit: ", email, password)
    }

   const handleOnResetSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            return alert("Please enter email! ")
        }
        console.log("Reset submit: ", email)
    }

    const formSwitcher = (formType) => {
       setFmrLoad(formType);
    }

    return (
        <div className="entry-page bg-info bg-light">
            <Jumbotron className="form-box">
                { frmLoad === "login" &&
                 <LoginForm 
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    formSwitcher={formSwitcher}
                    email={email}
                    password={password}
                    />}
                { frmLoad === "reset" &&
                <ResetPassword 
                    handleOnChange={handleOnChange}
                    handleOnResetSubmit={handleOnResetSubmit}
                    formSwitcher={formSwitcher}
                    email={email}
                    /> }
            </Jumbotron>
        </div>
    );
}
