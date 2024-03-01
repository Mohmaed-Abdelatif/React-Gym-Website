import IMage from '../assets/values.jpg'
import { values } from '../constants/data'
import { GiCutDiamond } from 'react-icons/gi'

const Values = () => {
    return (
        <section className='values'>
            <div className="container values__container">
                <div className="values__left">
                    <div className="image">
                        <img src={IMage} alt="imge" />
                    </div>
                </div>
                <div className="values__right">
                    <div className="values__head">
                        <div className="section__head">
                            <div className="section__icon">
                                <GiCutDiamond/>
                            </div>
                            <h2>Our Values</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero laboriosam alias beatae. Molestias sit aliquam, voluptatum unde corporis quisquam?
                        </p>
                    </div>
                    <div className="cards__container">
                        {
                            values.map((value) => {
                                return (
                                    <div className="card__container value__card"
                                        key={value.id}>
                                        <div className="card__icon value__card-icon">
                                            {value.icon}
                                        </div>
                                        <h3>{value.title}</h3>
                                        <p>{value.desc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values