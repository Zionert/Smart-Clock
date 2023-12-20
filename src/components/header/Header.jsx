import React from 'react'
import '../header/Header.scss'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <nav className='navigation-header'>
            <ul className='navs'>
                <li>
                    <NavLink to='/timer'>Timer</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Clock</NavLink>
                </li>
                <li>
                    <NavLink to='/smartwatch'>Smartwatch</NavLink>
                </li>
            </ul>
    </nav>
  )
}

export default Header