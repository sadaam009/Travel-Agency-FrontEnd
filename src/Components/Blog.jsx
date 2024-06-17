import React from 'react'
import hotel1 from'../assets/blogone.png'
import hotel2 from'../assets/blogtwo.png'
import hotel3 from'../assets/blogthree.png'
import hotel4 from'../assets/blogfour.png'
import element1 from'../assets/Elementfive.png'
import element2 from'../assets/Shapetr.png'

export default function Blog() {
  return (
    <div className=' mt-[7rem]  '>
        <h1 className='text-[3rem] font-semibold font-Far text-center  '>Get update with<span className='text-orange-500'> latest blog</span></h1>
        <div className="flex justify-center items-center gap-6  mt-[3.5rem]  ">
            <div className="w-[270px] h-[370px] rounded   ">
                <img src={hotel1} alt="" />
               <div className='py-[1rem] space-y-4  '>
               <h2 className='text-[1.2rem] font-semibold font-Far   '>The Amazing Difference a Year of Travelling .</h2>
                <p className=' text-gray-400'>june 1, 2024</p>
               </div>
            </div>

            <div className="w-[270px] h-[370px] rounded   ">
            <img src={hotel2} alt="" />
            <div className='py-[1rem] space-y-4  '>
               <h2 className='text-[1.2rem] font-semibold font-Far   '>The Amazing Difference a Year of Travelling .</h2>
                <p className=' text-gray-400'>July 6, 2024</p>
               </div>
            </div>

            <div className="w-[270px] h-[370px] rounded   ">
            <img src={hotel3} alt="" />
            <div className='py-[1rem] space-y-4  '>
               <h2 className='text-[1.2rem] font-semibold font-Far   '>The Amazing Difference a Year of Travelling .</h2>
                <p className=' text-gray-400'>July 10, 2024</p>
               </div>
            </div>

            <div className="w-[270px] h-[370px] rounded   ">
            <img src={hotel4} alt="" />
            <div className='py-[1rem] space-y-4  '>
               <h2 className='text-[1.2rem] font-semibold font-Far   '>The Amazing Difference a Year of Travelling .</h2>
                <p className=' text-gray-400'>Aug 12, 2024</p>
               </div>
            </div>
        </div>

        {/* card subscribe */}
        <div className=" mt-[12.3rem] w-[1107px] h-[390px] bg-orange-500 rounded-[1rem] mx-auto relative  ">
           <div className=" pt-[4rem]   ">
           <h1 className='text-center  text-[2.6rem] text-white font-semibold font-Far '>Subscribe and get exclusive <br /> deals & offer</h1>
           <img style={{zIndex:0}} className=' absolute left-0 top-6    ' src={element2} alt="" />
            <input className=' absolute left-[16rem] w-[600px]  pl-3 h-[58px] rounded mt-[3.4rem]
                ' type="text" placeholder='Enter Your Email' />
                <button className='py-3 px-8 bg-orange-500 text-white absolute
                 right-[16.4rem] top-[15.5rem] rounded-md  '>Subscribe</button>
               
                 <img className=' absolute right-0 top-4' src={element1} alt="" />
                   
           </div>
            
        </div>
    </div>
  )
}
