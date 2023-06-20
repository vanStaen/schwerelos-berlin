import React, { useState } from "react";

import TelegramLogo from "../../img/telegramLogo.png";

import "./Menu.less";

export const Menu = () => {
    const [showMenu, setShowMenu] = useState(true);

    return (
        <>
            <div className="menu">
                <div className={showMenu ? 'menu-bar' : 'menu-bar change'} onClick={() => setShowMenu(!showMenu)}>
                    <div id="bar1" className="bar"></div>
                    {showMenu && <div className="spacer"></div>}
                    <div id="bar2" className="bar"></div>
                    {showMenu && <div className="spacer"></div>}
                    <div id="bar3" className="bar"></div>
                </div>
                <nav className={showMenu ? 'nav' : 'nav change'}>
                    <ul className="list">
                        <li><a href="#">Presskit</a></li>
                        <li><a href="#">Booking</a></li>
                        <li><a href="#">About</a></li>
                        <li>
                            <a href='https://t.me/SCHWERELOS_BERLIN' target='_blank'>
                                <img src={TelegramLogo} className="logoTelegram" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div >
            <div className={showMenu ? 'menu-bg' : 'menu-bg change-bg'} id="menu-bg"></div>
        </>
    );
}; 