import React from 'react'
import Home from '../Components/Home'
import Cardpl from '../Components/Cardpl'
import VacationCard from '../Components/VacationCard'
import About from '../Components/About'
import Blog from '../Components/Blog'
import Searchbar from '../Components/Searchbar'
import Bookcard from '../Components/Bookcard'


export default function Home1() {
  return (
    <div>
  
    <Home/>
    <Searchbar/>
    <Cardpl/>
    <Bookcard/>
    <VacationCard/>
    <About/>
    <Blog/>
    </div>
  )
}
