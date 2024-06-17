import React from 'react'
import shape from"../assets/Ellipse.png"
import Tourist from"../assets/tourist-with-thumb-up__1_-removebg.png"
import card1 from"../assets/Cardone.png"
import card2 from"../assets/Cardtwo.png"
import card3 from"../assets/Cardthree.png"
import flay from"../assets/logo1.png"

export default function Home() {
  return (
    <div className='flex mt-[13rem] mx-[6rem] relative   '>
        <div className=" w-[46%] relative bottom-[4rem]  space-y-8 ">
<h1 className=' text-[3.3rem]  font-bold font-Far  ' >Get started your exciting <span className='text-orange-500'>journey</span> with us.</h1>
<p className=' my-4 text-[1.1rem] text-gray-500  '>A Team of experienced tourism professionals will provide you with the best 
    advice and tips for your desire place. </p>
    <button className=' hover:bg-orange-500 hover:text-white mt-[1rem] border-[1px] font-semibold text-orange-500 border-orange-500 py-2 px-5 rounded '>Discover Now</button>
        </div>
        <div className=" ml-[10rem]     ">
         <img className='  absolute top-[9rem]  w-[34vw] ' src={shape}  />
         <img className=' absolute bottom-[0.3rem] w-[35%] right-[2rem] ' src={Tourist}  />
         <div className=" ">
          <img style={{zIndex:-1}} src={flay} alt=""  className='absolute  right-[-10rem]  text-gray-100 top-[-10.5rem] px-[2rem]   '/>
           <img className=' absolute   right-[23.6rem] h-[20vh] bottom-[18.7rem]  ' src= {card1}  />
           <img className=' absolute  right-[-2.4rem] h-[20vh] top-[5rem] ' src= {card2}  />
           <img className=' absolute  right-[19rem] top-[10rem] h-[20vh]' src= {card3}  />
         </div>
        </div>
    </div>
  )
}
