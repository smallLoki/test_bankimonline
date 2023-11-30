import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLingui } from "@lingui/react";
import './Menu.css'


const Menu = () => {
    const menuText = useLingui().i18n._('MENU');

    const links = [
        {to: '/', label: menuText["HOME_LOAN"]},
        {to: '/masseurs', label: menuText["CATALOG"]},
    ];

    const renderLinks = () => {
        return links.map((link, index) => {
          return (
            <li key={index}>
              <NavLink
                to={link.to}
                className={({isActive}) => (isActive ? "active" : '')}
              >
                {link.label}
              </NavLink>
            </li>
          )
        })
    }

    return (
      <React.Fragment>
        <nav className={"menu"}>
          <ul>
            { renderLinks() }
          </ul>
        </nav>
      </React.Fragment>
    )
}

export default Menu;
