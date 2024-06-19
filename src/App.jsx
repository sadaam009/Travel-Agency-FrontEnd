import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'

import Header from'./Components/Header'
import Footer from'./Components/Footer'
import Home1 from './Pages/Home1'
import About1 from './Pages/About1'
import Blog1 from './Pages/Blog1'

import Tour from './Pages/Tour'

function App() {
 return(

  <>
    <div className="">
    <Router>
  
  <Header/>

     <Routes>
       <Route path="/" element={<Home1/>}/>
        <Route path="/about" element={<About1/>}/>
        <Route path="/tour" element={<Tour/>}/>  
        <Route path="/blog" element={<Blog1/>}/>
      </Routes>
       
     

    </Router>
 
  </div>
  <div className="">
  <Footer/>
  </div>
 
  </>

 )
 
}

export default App
