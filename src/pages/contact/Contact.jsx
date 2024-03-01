import './contact.css'
import Header from '../../components/Header'
import headerImage from '../../assets/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

const Contact = () => {
  return (
    <>
      <Header title="Contact Us" image={headerImage} para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore vitae expedita nemo nihil nostrum, voluptatum sint voluptatibus alias iusto!"
      />
      <section className="contact">
        <div className="container contact__container">
          <div className="box__container">
            <a href="http://wa.me/+201019902711" target='_blank' rel="noreferrer"><IoLogoWhatsapp /></a>
            <a href="http://m.me/imoalsaeed" target='_blank' rel="noreferrer"><BsMessenger /></a>
            <a href="mailto:mo.abdelatif@outlook.com" target='_blank' rel="noreferrer"><MdEmail /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact