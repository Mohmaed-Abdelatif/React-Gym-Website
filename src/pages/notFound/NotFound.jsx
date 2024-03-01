import './notFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="not__found">
      <div className="container not__fonund-container">
        <h1>The Page Not Found</h1>
        <Link to="/" className='btn'>Go To Home</Link>
      </div>  
    </section>
  )
}

export default NotFound