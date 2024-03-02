import { FaQuestion } from "react-icons/fa"
import { faqs } from "../../constants/data"
import Faq from "./Faq";

const Faqs = () => {
    return (
        <section className='faqs'>
            <div className="container faqs__section-container">
                <div className="section__head">
                    <span className="section__icon">
                        <FaQuestion />
                    </span>
                    <h2>FAQS</h2>
                </div>
                <div className="faqs__container">
                    {
                        faqs.map((faq) => {
                            return (
                                <Faq key={faq.id} question={faq.question} answer={faq.answer}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Faqs