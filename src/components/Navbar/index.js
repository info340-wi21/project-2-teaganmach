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
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/Contact-Us">
                    Contact Us
                </NavLink>
                <NavLink to="/Health-Data">
                    Health Data
                </NavLink>

            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In / SignUp</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};

export default Navbar;