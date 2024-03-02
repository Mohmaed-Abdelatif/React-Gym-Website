import './plans.css'
import Header from '../../components/header/Header'
import headerImage from '../../assets/header_bg_5.jpg'
import { PlansData } from '../../constants/data'
import { Link } from 'react-router-dom'


const Plans = () => {
  return (
    <>
      <Header title="Plans" image={headerImage} para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore vitae expedita nemo nihil nostrum, voluptatum sint voluptatibus alias iusto!" />
      <section className="plans">
        <div className="container plans__container">
          <div className="cards__container">
            {
              PlansData.map((plan) => {
                return (
                  <div className="card__container" key={plan.id}>
                    <h3>{plan.name}</h3>
                    <p>{plan.desc}</p>
                    <div className='price'><span>${plan.price}</span>/mo</div>
                    <div className='features'>
                      <h4>Features</h4>
                      {
                        plan.features.map((feature) => {
                          return (
                            <p key={feature.feature} className={`${feature.available ? "avilable" : "not-avilable"}`}>{feature.feature}</p>
                          )
                        })
                      }
                    </div>
                    <Link to="/x" className='btn' >
                    Choose Plan
                    </Link>
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

export default Plans