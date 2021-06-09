import React, {useState} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/login.css";
import {NavLink, Redirect} from 'react-router-dom';

export default function Login(){
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");
    let [successLogin, setSuccess] = useState(false);
    
    function checkValidity(){
        return email.length > 0 && pass.length > 0;
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                setSuccess(true);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setSuccess(false);
            });
    }
    return (
    <div className="inner">
        <h3>Log in</h3>
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!checkValidity()} onClick={handleSubmit}>
                Login
            </Button>
            <p className="text-right">
                Don't have an account? <NavLink to="/register">Register here</NavLink>
            </p>
        </Form>
        {successLogin &&
          <Redirect to='/'/>
        }     
    </div> 
    ); 
}

/* 
    return (
        <form>
            
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password"/>
            </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            <p className="text-right">
                Don't have an account? <NavLink to="/register">Sign up here</NavLink>
            </p>
        </form>
    );
*/
