import './about.css'
import Header from '../../components/Header'
import headerImage from '../../assets/header_bg_1.jpg'
import storyImage from "../../assets/about1.jpg"
import visionImage from "../../assets/about2.jpg"
import xImage from "../../assets//about3.jpg"
const About = () => {
  return (
    <>
      <Header title="About Us" image={headerImage} para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore vitae expedita nemo nihil nostrum, voluptatum sint voluptatibus alias iusto!" />

      <section className="about__sec">
        <div className="container about__sec-container">
          <div className="about__sec-image">
            <div className="image">
              <img src={storyImage} alt="" />
            </div>
          </div>
          <div className="about__sec-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam repellendus quibusdam aliquam sit, voluptatum voluptatem ad illo consequuntur iste alias tempora nam error ea consequatur eum eos. Ipsum, sunt?
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium provident magni perferendis, natus animi sint minus! Quia libero iure sint unde consequatur suscipit esse quas!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum asperiores placeat corporis sequi aspernatur. Facilis?
            </p>
          </div>
        </div>
      </section>
      
      <section className="about__sec">
        <div className="container about__sec-reverse_container">
          <div className="about__sec-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam repellendus quibusdam aliquam sit, voluptatum voluptatem ad illo consequuntur iste alias tempora nam error ea consequatur eum eos. Ipsum, sunt?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa quas, doloribus nobis dignissimos dolore? Excepturi qui consequuntur distinctio, sint eum nemo, amet architecto delectus quos repudiandae minima quidem omnis.
            </p>
            
          </div>
          <div className="about__sec-image">
            <div className="image">
              <img src={visionImage} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="about__sec">
        <div className="container about__sec-container">
          <div className="about__sec-image">
            <div className="image">
              <img src={xImage} alt="" />
            </div>
          </div>
          <div className="about__sec-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam repellendus quibusdam aliquam sit, voluptatum voluptatem ad illo consequuntur iste alias tempora nam error ea consequatur eum eos. Ipsum, sunt?
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam vel modi quidem? Dicta omnis illo asperiores quis architecto, iste illum ducimus modi inventore optio, a, expedita aut maxime repellat eius?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum asperiores placeat corporis sequi aspernatur. Facilis?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About