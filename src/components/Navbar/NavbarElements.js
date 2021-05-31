import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #f0f0f0;
    height:80px;
    display: flex;
    padding: 0.5rem 2rem;
    justify-content: space-between;

`

export const NavLink = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    &:hover {
        text-decoration: none !important;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: black;

    @media screen and (max-width: 760px) {
        display block;
        position: absolute;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-itemns: center;
    // justify-content: flex-end;
    @media screen and (max-width: 760px) {
        display: none;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    // align-items: center;

    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    padding: 10px 22px;
    color: gray;
    text-decoration: none;

    &:hover {
        text-decoration: none !important;
    }
`
