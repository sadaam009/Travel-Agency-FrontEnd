// import { Routes,Route} from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Home'
import Cardpl from './Components/Cardpl'
import Bookcard from './Components/Bookcard'
import VacationCard from './Components/VacationCard'
import About from './Components/About'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import Searchbar from './Components/Searchbar'
// import Home1 from './Pages/Home1'
// import About1 from './Pages/About1'
// import Destination from './Pages/Destination'
// import Tour from './Pages/Tour'
// import Blog1 from './Pages/Blog1'





function App() {
 return(
  <>
  <div className="">
  <Header/>
  <Home/>
  <Searchbar/>
  <Cardpl/>
  <Bookcard/>
  <VacationCard/>
  <About/>
  <Blog/>
  <Footer/>
  
  

</div>

{/* <Routes>
    <Route path='/' element={<Home1/>}/>
    <Route path='/about' element={<About1/>}/>
    <Route path='/destination' element={<Destination/>}/>
    <Route path='/tour' element={<Tour />}/>
    <Route path='/blog' element={<Blog1/>}/>

  </Routes> */}
  </>

 )
 
}

export default App
