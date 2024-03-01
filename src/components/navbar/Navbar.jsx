import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../../constants/data'
import { VscThreeBars } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';


const Links = () => {

    return (
        <>
            <ul>
                {
                    links.map((link, index) =>
                        <li
                            key={link.name}
                            className={`${index !== links.length - 1 ? "margin-right" : ""} `} >
                            <NavLink to={link.path} className={({ isActive }) => isActive ? "isActive-nav" : ""}>{link.name}</NavLink>
                        </li>
                    )
                }
            </ul>
        </>
    )

}


const Navbar = () => {

    const [toggle, settoggle] = useState(false)
    return (
        <nav>
            <div className='container nav__container'>
                <Link to="/" className='logo' onClick={() => settoggle(prev => !prev)}>
                    <h1>Gym <span>Website</span></h1>
                </Link>
                <div className='nav-links'>
                    <Links />
                </div>
                <div className='nav__menue'>
                    <div>
                        {
                            toggle
                                ? <IoClose onClick={() => settoggle(false)} />
                                : <VscThreeBars onClick={() => settoggle(true)} />
                        }
                    </div>
                    {toggle && (<div className='nav__menue-links sidebar' onClick={() => settoggle(prev => !prev)}><Links /></div>)}
                </div>
            </div>
        </nav>
    )
}

export default Navbar