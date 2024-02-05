import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Navigation from "../../elements/navigation/navigation";
import {NavLink} from "react-router-dom";
function NavigationMenu() {
    return (
        <ul className="header__navigation">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="dropdown">
                <NavLink to="/shop" className="dropdown-toggle">
                    <span>Shop</span>
                    <FontAwesomeIcon icon={faChevronDown} className="icon" />
                </NavLink>
                <ul className="dropdown-menu">
                    <Navigation/>
                </ul>
            </li>
            <li><NavLink to="/contact">Contact us</NavLink></li>
            <li><NavLink to="/blog">Articles</NavLink></li>
        </ul>
    );
}

export default NavigationMenu;
