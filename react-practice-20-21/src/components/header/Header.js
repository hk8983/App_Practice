import React from 'react'

const Header = () => {
    const navbarMenu = [
        { href: "/home", content: "Home" },
        { href: "/news", content: "News" },
        { href: "/contact", content: "Contact" },
    ];
    const navbarListItems = navbarMenu.map((menu, index) => (
        <li key={index}>
            <NavLink to={menu.href}>{menu.content}</NavLink>
        </li>
    ));
    return (
        <header>
            <ul>{navbarListItems}</ul>
        </header>
    )
}

export default Header