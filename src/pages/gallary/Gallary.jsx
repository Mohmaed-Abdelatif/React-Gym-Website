import './gallary.css'
import Header from '../../components/header/Header'
import headerImage from'../../assets/header_bg_4.jpg'
import {gallery} from'../../constants/data'

const Gallary = () => {
  return (
    <>
      <Header title="Gallary" image={headerImage} para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore vitae expedita nemo nihil nostrum, voluptatum sint voluptatibus alias iusto!" />
    <section className="gallary">
      <div className=" container gallary__container">
        <div className="img__container">
          {
            gallery.map((image)=>{
              return(
                <div className="image__box">
                  <img src={image.image} alt="" />
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

export default Gallary