import { Link } from "react-router-dom"
import Image from '../../assets/main_header.png'
import "../../pages/home/home.css"
const MaainHeader = () => {
    return (
        <header  className="main__header ">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h4 className="">#100 Days Of WorkOut</h4>
                    <h1>Join The Legends Of The Fitness World</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore accusantium blanditiis ad perspiciatis, reiciendis soluta!
                    </p>

                    <Link to="/plans" className="btn">Get Started</Link>
                </div>
                <div className="main__header-right">
                    <div className="main__header-circle"></div>
                    <div className="main__header-imge">
                        <img src={Image} alt="HomeImage" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MaainHeader