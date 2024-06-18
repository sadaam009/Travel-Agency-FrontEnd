import React from 'react'
import Home from './Home'
import Cardpl from './Cardpl'
import Bookcard from './Bookcard'
import VacationCard from './VacationCard'
import About from './About'
import Blog from './Blog'
import Searchbar from './Searchbar'

export default function Display() {
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
