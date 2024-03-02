import { Home, About, Contact, Gallary, NotFound, Plans, Trainers,} from './pages'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import GoUp from './components/GOUp'

const App = () => {
  return (
    <BrowserRouter>
      <GoUp/>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='gallery' element={<Gallary/>}/>
        <Route path='plans' element={<Plans/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App