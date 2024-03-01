import React from 'react'
import '../pages/home/home.css'
import { FaCrown } from 'react-icons/fa'
import { programs } from '../constants/data'
import { Link } from 'react-router-dom'


const Programs = () => {
  return (
    <section className='programs'>
      <div className='container programs__container'>
        <div className="section__head">
          <span className='section__icon'>{<FaCrown />}</span>
          <h2>Our Programs</h2>
        </div>
        <div className="cards__container">
          {
            programs.map((program) => {
              return (
                <div className="card__container" key={program.id}>
                  <div className="card__icon">
                    {program.icon}
                  </div>
                  <h3>{program.title}</h3>
                  <p>{program.info}</p>
                  <Link to={program.path} className='btn'>Learn More</Link>
                </div>
              )

            })
          }
        </div>
      </div>
    </section>
  )
}

export default Programs