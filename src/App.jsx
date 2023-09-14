import './index.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Routes, Route} from 'react-router-dom';
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import { ContextProvider } from "../src/utils/global.context"

function App() {

  return (
    <div className="App">
      <ContextProvider>
          <Navbar/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='favs' element={<Favs/>}/>
                <Route path='/dentist/:id' element={<Detail/>}/>
              </Routes>
        <Footer/>
        </ContextProvider>
      </div>
  )
}

export default App