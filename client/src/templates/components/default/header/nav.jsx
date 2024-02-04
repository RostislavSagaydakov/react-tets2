import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

const categories = [
    [
        "Bracelets",
        "Earrings",
        "Necklaces",
        "Shop Earrings",
        "Wedding & Bridal"
    ],
    "Contact Us",
    "Blog"
];

function NavigationMenu() {
    const renderMenuItems = () => {
        return categories.map((item, index) => {
            if (Array.isArray(item)) {
                const dropdownItems = item.map((subItem, subIndex) => (
                    <li key={subIndex}><a href="#">{subItem}</a></li>
                ));
                return (
                    <li key={index} className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            All products
                            <FontAwesomeIcon icon={faChevronDown} className="icon" />
                        </a>
                        <ul className="dropdown-menu">
                            {dropdownItems}
                        </ul>
                    </li>
                );
            } else {
                return <li key={index}><a href="#">{item}</a></li>;
            }
        });
    };

    return (
        <ul className="header__navigation">
            {renderMenuItems()}
        </ul>
    );
}

export default NavigationMenu;
