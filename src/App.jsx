import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'

import Header from'./Components/Header'
import Footer from'./Components/Footer'
// import Home from './Home'
import Cardpl from './Components/Cardpl'
// import Bookcard from './Bookcard'
// import VacationCard from './VacationCard'
// import About from './About'
// import Blog from './Blog'
// import Searchbar from './Searchbar'



import Home1 from './Pages/Home1'
import Tour from './Pages/Tour'
// import Blog1 from './Pages/Blog1'
import Destination from './Pages/Destination'
import Display from './Components/Display'







function App() {
 return(

  <>
    <div className="">
    <Router>
  
  <Header/>

     <Routes>
        
        <Route path="/about" element={<Destination/>}/>
      
        <Route path="/tour" element={<Home1/>}/>
        <Route path="/blog" element={<Tour/>}/>
      </Routes>
       
      <Display/>

    </Router>
 
  </div>
  <div className="">
  <Footer/>
  </div>
 
  </>

 )
 
}

export default App
