import React from 'react'
import hotel1 from'../assets/hotelone.png'
import hotel2 from'../assets/hoteltwo.png'
import hotel3 from'../assets/hotelthree.png'
import hotel4 from'../assets/hotelfour.png'
import loc from'../assets/location.png'

export default function Bookcard() {
  return (
    <div className=' mt-[7rem] bg-[#FEFCFB] py-[1rem]   '>
        <div className="">
       <div className=' text-center space-y-4'>
       <h1 className=' text-[3rem]  font-semibold font-Far  '>Exclusive   
             <span className=' text-orange-400'>  deals & discounts</span> </h1>
             <p className=' text-gray-400 text-[1.2rem]  '>Discover our fantastic early booking <br /> discounts & start planning your journey.
</p>
       </div>

       <div className=" flex justify-center items-center space-x-4 mt-[4rem]  ">


        <div className=" w-[270px] h-[430px] shadow bg-white rounded hover:scale-105 duration-300  ">
        <div className=" absolute h-[290px] w-[270px] bg-black/40 flex
         justify-center items-center   opacity-0 hover:opacity-100 rounded  ">
               <button className=' text-white py-2 px-7 bg-orange-500 rounded mt-[3rem]  '>Book Now</button>
              </div>
            <img src={hotel1} alt="" />
         
        

            <div className=" flex justify-between mx-[1rem] items-center mt-[2rem]  ">
                <h1 className= ' text-[1.5rem] font-semibold  font-Far '>Madrid</h1>
                <p className='text-[1rem] text-gray-500 font-semibold  '><i class="fa-solid fa-star  text-yellow-300 pr-2">  </i>5.6</p>
            </div>

            <div className=' flex justify-between items-center mx-[1rem] mt-[0.7rem]   '>
              <div className="flex space-x-2 items-center">
                <img className=' h-[3vh] mt-1 ' src={loc} alt="" />
              <p className=' text-gray-500 text-[1rem] font-Far  '>Spain</p>
              </div>

               <div className="flex space-x-3 items-center">
               <span className=' text-[1.1rem] text-gray-600 font-semibold line-through  font-Far  '>$500</span>
               <span className='  text-[1.1rem] font-Far font-semibold text-orange-600 py-1 px-4 bg-orange-100 rounded'>$200</span>
               </div>
            </div>
        </div>




        <div className=" w-[270px] h-[430px]  bg-white rounded  shadow-2xl shadow-orange-200 hover:scale-105 duration-300">
        <div className=" absolute h-[290px] w-[270px] bg-black/40 flex
         justify-center items-center   opacity-0 hover:opacity-100 rounded  ">
               <button className=' text-white py-2 px-7 bg-orange-500 rounded mt-[3rem]  '>Book Now</button>
              </div>
        <img src={hotel2} alt="" />
        <div className="">

          <div className=" flex items-center justify-between mx-[1rem] mt-[2rem]   ">
            <h1 className='text-[1.5rem] font-semibold  font-Far'>Firenze</h1>
            <p> <i class="fa-solid fa-star  pr-2 text-yellow-300  "></i>4.5</p>
          </div>


          <div className=" flex justify-between items-center mx-[1rem] mt-[0.7rem]">

          <div className="flex space-x-2 items-center">
          <img className=' h-[3vh] mt-1 ' src={loc} alt="" />
          <p>Italy</p>
          </div>

          <div className=" space-x-3 ">
          <span className=' text-[1.1rem] text-gray-600 font-semibold line-through  font-Far  '>$900</span>
          <span className='  text-[1.1rem] font-Far font-semibold text-orange-600 py-1 px-4 bg-orange-100 rounded'>$800</span>
          </div>

          </div>

        </div>
        </div>
        <div className=" w-[270px] h-[430px] shadow bg-white rounded hover:scale-105 duration-300 ">
        <div className=" absolute h-[290px] w-[270px] bg-black/40 flex
         justify-center items-center   opacity-0 hover:opacity-100 rounded  ">
               <button className=' text-white py-2 px-7 bg-orange-500 rounded mt-[3rem]  '>Book Now</button>
              </div>
        <img src={hotel3} alt="" />
        <div className="">
        <div className=" flex items-center justify-between mx-[1rem] mt-[2rem]   ">
            <h1 className='text-[1.5rem] font-semibold  font-Far'>Firenze</h1>
            <p> <i class="fa-solid fa-star  pr-2 text-yellow-300  "></i>3.5</p>
          </div>


          <div className=" flex justify-between items-center mx-[1rem] mt-[0.7rem]">

          <div className="flex space-x-2 items-center">
          <img className=' h-[3vh] mt-1 ' src={loc} alt="" />
          <p>Italy</p>
          </div>

          <div className=" space-x-3 ">
          <span className=' text-[1.1rem] text-gray-600 font-semibold line-through  font-Far  '>$500</span>
          <span className='  text-[1.1rem] font-Far font-semibold text-orange-600 py-1 px-4 bg-orange-100 rounded'>$300</span>
          </div>

          </div>

        </div>
        </div>

        <div className=" w-[270px] h-[430px] shadow bg-white rounded hover:scale-105 duration-300 ">
          <div className=" absolute h-[290px] w-[270px] bg-black/40 flex
         justify-center items-center   opacity-0 hover:opacity-100 rounded  ">
               <button className=' text-white py-2 px-7 bg-orange-500 rounded mt-[3rem]  '>Book Now</button>
              </div>
        <img className=' ' src={hotel4} alt="" />
        <div className="">
        <div className=" flex items-center justify-between mx-[1rem] mt-[2rem]   ">
            <h1 className='text-[1.5rem] font-semibold  font-Far'>Firenze</h1>
            <p> <i class="fa-solid fa-star  pr-2 text-yellow-300  "></i>5.9</p>
          </div>


          <div className=" flex justify-between items-center mx-[1rem] mt-[0.7rem]">

          <div className="flex space-x-2 items-center">
          <img className=' h-[3vh] mt-1 ' src={loc} alt="" />
          <p>Italy</p>
          </div>

          <div className=" space-x-3 ">
          <span className=' text-[1.1rem] text-gray-600 font-semibold line-through  font-Far  '>$600</span>
          <span className='  text-[1.1rem] font-Far font-semibold text-orange-600 py-1 px-4 bg-orange-100 rounded'>$200</span>
          </div>

          </div>

        </div>
        </div>
       </div>
        </div>

        <div className=" space-x-4  ml-[40.4rem] mt-[3rem]   ">
        <i class="fa-solid fa-arrow-left border-2 border-gray-300 px-3 py-2  rounded-[50%] "></i>
        <i class="fa-solid fa-arrow-right px-3 py-2  rounded-[50%] bg-orange-500  border-2 border-orange-500 text-white"></i>
       
        </div>
    </div>
  )
}
