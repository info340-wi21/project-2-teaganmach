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

export default function Home() {
	return (
	<div>
		<div class="container">
		<h1>WELCOME TO [APP NAME]</h1>
		
		<p>Feeling sick from quarantine blues? Try [OUR APP NAME], the website designed to help bored individuals find
			new exercises to stay healthy in body and mind!<br/>(Currently, the only feature we have enabled is the calorie tracker-- 
			check it out in the health data tab!) Use this webapp to find new fun exercises that won't take up much of your time, and learn
			how to practice mindfulness.</p>
		{/* <a style={buttonStyle} href="#" >EXPLORE</a>         */}
		</div>
	</div>
	);
}

