import React, {useState} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/login.css";
import {NavLink, Redirect} from 'react-router-dom';

export default function Logout(){
    let [successLogout, setSuccess] = useState(false);
    
    function handleSubmit(event) {
        event.preventDefault();
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setSuccess(true);
          }).catch((error) => {
            // An error happened.
            setSuccess(false);
          });
    }
    return (
        <div className='inner'>
            <Form onSubmit={handleSubmit}>
                <Button block size="lg" type="submit" onClick={handleSubmit}>
                    Logout
                </Button>
            </Form>
            {successLogout &&
            <Redirect to='/'/>
            }     
        </div> 
    ); 
}