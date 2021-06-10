import React, {useState} from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import firebase from "firebase/app";
import "firebase/auth";


const Navbar = () => {
    const [user, setUser] = useState(undefined);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          setUser(user);
        } else {
          // No user is signed in.
          setUser(null);
        }
      });

    if (!user) {
        return (
            <>
            <Nav>
                <NavLink to="/">
                    <h1>
                        2hBM
                    </h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/Health-Data">
                        Health Data
                    </NavLink>
                    <NavLink to="/Planner">
                        Planner
                    </NavLink>
                    <NavLink to="/activities">
                        Activity List
                    </NavLink>
    
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
            </>
        );
    } else {
        return (
            <>
            <Nav>
                <NavLink to="/">
                    <h1>
                        2hBM
                    </h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/Health-Data">
                        Health Data
                    </NavLink>
                    <NavLink to="/Planner">
                        Planner
                    </NavLink>
                    <NavLink to="/activities">
                        Activity List
                    </NavLink>
    
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/logout'>Sign Out</NavBtnLink>
                </NavBtn>
            </Nav>
            </>
        );
    }
};

export default Navbar;