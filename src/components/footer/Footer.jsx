import { footerLinks } from "../../constants/data"
import { socialMedia } from "../../constants/data"
import { Link } from "react-router-dom"

import './footer.css'
const Footer = () => (
  <section className="footer">
    <div className="container footer-container">
      <div className="header__links-container">
        <div className=" footer__header">
          <Link to="/" className='logo' >
            <h1>Gym <span>Website</span></h1>
          </Link>
          <p >A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className=" links__container">
          {
            footerLinks.map((footerlink) => (
              <div key={footerlink.title} className="col__links">
                <h4 >{footerlink.title}</h4>
                <ul >
                  {
                    footerlink.links.map((link) => (
                      <li key={link.name}>
                        <Link to={link.link}>{link.name}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>

      <div className="copyrigt__media-container">
        <p>
          Copyright Ⓒ 2024 Mohamed Abdelatif. All Rights Reserved.
        </p>
        <div className="media__container">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className=""
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
)


export default Footer