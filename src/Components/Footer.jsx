import React from 'react'

export default function Footer() {
  return (
    <div className='mt-[6rem]    '>

        <div className="flex justify-center space-x-[10rem]   ">
     <div className=" space-y-5  ">
     <h1 className=' text-2xl font-bold'>Trabook</h1>
        <p className=' text-gray-500'>Book your trip in minute, get full <br /> Control for much longer.</p>
        <div className=' space-x-5'>
        <i class="fa-brands fa-twitter fa-1x  py-2 px-3 bg-white rounded-[50%] shadow-lg  "></i>
        <i class="fa-brands fa-facebook fa-1x  py-2 px-3 bg-white rounded-[50%] shadow-lg  "></i>
        <i class="fa-brands fa-instagram fa-1x  py-2 px-3 text-white bg-orange-500 rounded-[50%] shadow-lg  "></i>
        </div>
     </div>

        <div className="flex space-x-[9rem]">
          
          <div className=''>
            <h1 className=' text-[1.2rem] font-semibold  '>Company</h1>
           <div className=" mt-[2rem] space-y-[0.8rem] text-gray-500  ">
           <li className=' list-none'> <a href="">About</a></li>
            <li className=' list-none'> <a href="">Careers</a></li>
            <li className=' list-none'><a href="">Logistic</a></li>
            <li className=' list-none'> <a href="">Privacy & Policy</a></li>
           </div>

          </div>

          <div className=''>
          <h1 className=' text-[1.2rem] font-semibold  '>Company</h1>
           <div className=" mt-[2rem] space-y-[0.8rem] text-gray-500  ">
           <li className=' list-none'> <a href="">About</a></li>
            <li className=' list-none'> <a href="">Careers</a></li>
            <li className=' list-none'><a href="">Logistic</a></li>
            <li className=' list-none'> <a href="">Privacy & Policy</a></li>
           </div>

          </div>

          <div className=''>
          <h1 className=' text-[1.2rem] font-semibold  '>Company</h1>
           <div className=" mt-[2rem] space-y-[0.8rem] text-gray-500  ">
           <li className=' list-none'> <a href="">About</a></li>
            <li className=' list-none'> <a href="">Careers</a></li>
            <li className=' list-none'><a href="">Logistic</a></li>
            <li className=' list-none'> <a href="">Privacy & Policy</a></li>
           </div>

          </div>

        </div>

        </div>

       <hr className=' mx-[10rem] mt-[2rem] border-[1px] border-gray-400   ' />
       <div className=" flex justify-between mx-[10rem] mt-[2rem]  ">
        <p className=' text-gray-400'>Copyright, Trabook 2024. All rights reserved.</p>
        <p className=' text-gray-400'>Terms & Conditions</p>
       </div>

    </div>
  )
}
