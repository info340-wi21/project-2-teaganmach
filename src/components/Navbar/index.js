import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';


const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <h1>
                    logo
                </h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/">
                    About
                </NavLink>
                <NavLink to="/">
                    Contact Us
                </NavLink>
                <NavLink to="/Health-Data">
                    Health Data
                </NavLink>
                <NavLink to="/Planner">
                    Planner
                </NavLink>

            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/login'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};

export default Navbar;