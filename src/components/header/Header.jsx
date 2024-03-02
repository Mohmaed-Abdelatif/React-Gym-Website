import React from 'react'
import "./header.css"
const Header = ({ title, image, para }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-bg">
          <img src={image} alt="" />
        </div>
        <div className="header__content">
          <h3>{title}</h3>
          <p>{para}</p>
        </div>
      </div>
    </header>
  )
}

export default Header