import { FaQuoteLeft } from "react-icons/fa";
import Slide from './slide';

const SliderCom = () => {
    return (
        <section className="slider">
            <div className="container slider__sec-container">
                <div className="section__head">
                    <span className="section__icon">
                        <FaQuoteLeft />
                    </span>
                    <h2>Testimonials</h2>
                </div>
                <div className="slider__container">
                    <Slide />
                </div>
            </div>
        </section>
    )
};

export default SliderCom;
