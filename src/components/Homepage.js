import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import '../css/home.css';

const firebaseConfig = {
	apiKey: "AIzaSyBRLQH4lYcb4PcxmmkfJLoH--9Dha3HAw4",
	authDomain: "info340-react-app.firebaseapp.com",
	databaseURL: "https://info340-react-app-default-rtdb.firebaseio.com",
	projectId: "info340-react-app",
	storageBucket: "info340-react-app.appspot.com",
	messagingSenderId: "180506027778",
	appId: "1:180506027778:web:9abab356e9c73b50fd841b"
  };
  firebase.initializeApp(firebaseConfig);

  const buttonStyle = {
    backgroundColor:'rgb(49, 97, 185)',
    borderRadius:'22px',
    border:'solid 0.5px #445383',
    display:'inline-block',
    color: 'white',
    padding:'15px 30px', 
    textDecoration:'none',
    fontSize:'20px',
    textAlign: 'center',
	fontFamily: 'sans-serif', 
    };

export default function Home() {
	return (
	<div>
		<div class="container">
		<h1>Welcome to <em>Healthy Body Healthy Mind</em>!</h1>
		
		<p>Feeling sick from quarantine blues? Here at 2hBM, we are dedicated to helping bored individuals find
			new exercises to stay healthy in <b><em>body and mind</em></b>! Use this webapp to find new fun exercises that won't take up much of your time, and learn
			how to practice mindfulness.</p>
		<a style={buttonStyle} href="/Health-Data" >Get started with our health data!</a>
		</div>
	</div>
	);
}

