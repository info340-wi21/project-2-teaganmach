import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/login.css";

export default function Login(){
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");

    function checkValidity(){
        return email.length > 0 && pass.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!checkValidity()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}