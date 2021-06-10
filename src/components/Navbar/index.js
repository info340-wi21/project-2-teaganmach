import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';


const Navbar = () => {
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
};

export default Navbar;