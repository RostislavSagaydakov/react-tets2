import logo from '../../../images/logo.png';
import {NavLink} from "react-router-dom";
import MainNavigation from "./header/nav";
import HeaderActions from "./header/actions";
export default function Header(){
    return(
        <header className="header">
            <div className="header__notification">
                <p>Free express worldwide shipping. Subscribe to discover</p>
            </div>
            <div className="container header__container">
                <NavLink to="/">
                    <img
                        className="logo"
                        src={logo}
                        alt="some cool description"/>
                </NavLink>
                <MainNavigation/>
                <HeaderActions/>
            </div>
        </header>
    )
}