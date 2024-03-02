import React from 'react'
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const Faq = ({question, answer}) => {
    const [toggle, settoggle] = useState(false)
    return (
        <article className="faq__container" onClick={() => settoggle(prev => !prev)}>
            <div className="question">
                <h4>{question}</h4>
                <div className='faq__icon'>
                    {
                        toggle
                            ? <FaMinus />
                            : <FaPlus />
                    }
                </div>
            </div>
            {toggle && <div className="answer">{answer}</div>}
        </article>
    )
}

export default Faq