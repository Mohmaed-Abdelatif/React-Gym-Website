/* eslint-disable jsx-a11y/anchor-has-content */
import './trainers.css'
import Header from '../../components/header/Header'
import headerImage from '../../assets/header_bg_3.jpg'
import { trainers } from '../../constants/data'
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Trainers = () => {
  return (
    <>
      <Header title="Trainers" image={headerImage} para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore vitae expedita nemo nihil nostrum, voluptatum sint voluptatibus alias iusto!" />

      <section className="trainers">
        <div className="container traniners__container">
          <div className="cards__container">
            {
              trainers.map((trainer) => {
                return (
                  <div className="card__container" key={trainer.id}>
                    <div className="image">
                      <img src={trainer.image} alt="" />
                    </div>
                    <h3>{trainer.name}</h3>
                    <p>{trainer.job}</p>
                    <div className="socials">
                      <a href={trainer.socials[0]} target='_blank' rel="noreferrer"><AiFillInstagram/> </a>
                      <a href={trainer.socials[1]} target='_blank' rel="noreferrer"><FaTwitter/> </a>
                      <a href={trainer.socials[2]} target='_blank' rel="noreferrer"><FaFacebookF/> </a>
                      <a href={trainer.socials[3]} target='_blank' rel="noreferrer"><FaGithub/> </a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Trainers