import React from 'react';
// import './css/home.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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

const pStyle = {
	fontSize: '30px',
	textAlign: 'center',
  	fontFamily: 'georgia',
  	fontWeight: 'bold',
	color: '#3c85cf',
	paddingTop: '100px',
  	paddingBottom: '50px'
  };

const container = {
	display: 'flex',
	flexDirection: 'column ',
}

const p2Style = {
	fontSize: '14px',
    lineHeight: '20px',
	textAlign: 'center',
	wordWrap: 'break-word',
	paddingRight: '200px',
	paddingLeft: '200px',
	fontWeight: 'bold',
	paddingBottom: '200px'

}


// const buttonStyle = {
// 	boxShadow: '0px 0px 2px 2px #9fb4f2',
//     backgroundColor:'rgb(49, 97, 185)',
//     borderRadius:'12px',
//     border:'solid 0.5px #445383',
//     display:'inline-block',
//     color: 'white',
//     padding:'15px 30px', 
//     texrDecoration:'none',
//     fontSize:'20px',
// 	textAlign: 'center',
// }
class Home_ extends React.Component {
	render() {
		return (
			<div style={container}>
				<p style={pStyle}>WELCOME TO [APP NAME]</p>
				
				<p style={p2Style}>Feeling sick from quarantine blues? Try [OUR APP NAME], the website designed to help bored individuals find
					new hobbies to stay healthy in body and mind!<br/>(Currently, the only feature we have enabled is the calorie tracker-- 
					check it out in the health data tab!)</p>
				{/* <a style={buttonStyle} href="#" >EXPLORE</a>         */}
			</div>
			
		);
	}
}

export default Home_;
