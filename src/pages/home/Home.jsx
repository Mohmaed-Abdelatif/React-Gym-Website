import MaainHeader from '../../components/mainHeader/MaainHeader'
import Programs from '../../components/programs'
import Values from '../../components/Values'
import Faqs from '../../components/faq/Faqs'
import SliderCom from '../../components/testimonials/SliderCom'
import './home.css'

const Home = () => {
  return (
    <>
      <div className="gradient-bg">
        <MaainHeader />
        <Programs />
      </div>
      <Values />
      <Faqs/>
      <SliderCom/>
      
    </>
  )
}

export default Home