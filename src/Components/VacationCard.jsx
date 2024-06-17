import React from 'react'
import element1 from'../assets/Elementone.png'
import hotel1 from'../assets/hotelone.png'
import hotel2 from'../assets/victwo.png'
import hotel3 from'../assets/victhree.png'

export default function VacationCard() {
  return (
    <div className='  mt-[6rem] relative '>
{/* Header div */}
<div className="text-center space-y-4">
<img className=' absolute right-[13rem]    ' src={element1} alt="" />
    <h1  className='text-[3rem]  font-semibold font-Far'>Best <span className='text-orange-500'> vacation plan</span></h1>
    <p  className='text-gray-400 text-[1.2rem]'>Plan your perfect vacation with our travel agency. Choose <br /> among 
        hundreds of all-inclusive offers! </p>
</div>



<div className=" ">
{/* Arrow Box */}

<div className="  ml-[67rem] space-x-4  ">
<i class="fa-solid fa-arrow-left border-2 border-gray-300 py-2 px-3  rounded-[50%]  "></i>
<i class="fa-solid fa-arrow-right border-2 border-orange-500 py-2 px-3  rounded-[50%]  bg-orange-500 text-white"></i>
</div>
    
</div>

{/* card vacation */}
<div className=" flex justify-center items-center gap-4 mt-[2rem]   ">
    <div className=" w-[370px] h-[430px]  bg-white shadow rounded  ">
        <img className=' w-full h-[49vh]  ' src={hotel1} alt="" />
        <div className=" mx-[1rem] space-y-3 mt-[1.2rem] ">

            <div className="flex justify-between items-center">
                <h1 className=' text-[1.2rem] font-semibold font-Far     '>Ankara, Turkey</h1>
                <p className='text-[1.2rem] font-semibold font-Far text-orange-500     '>$3,140k</p>
            </div>

            <div className=" flex justify-between items-center">
                <p className=' text-gray-500 text-[1.1rem]   '><i class="fa-solid fa-location-arrow pr-1 text-orange-500"></i> 6 Days Trip</p>
                <p className=' text-gray-500 font-semibold   '> <i class="fa-solid fa-star  pr-2 text-yellow-300 pl-3 "></i>4.2</p>
            </div>

        </div>
    </div>

    <div className=" w-[370px] h-[430px] bg-white shadow-2xl  shadow-orange-200  rounded  ">
    <img className=' w-full h-[49vh]  ' src={hotel2} alt="" />
    <div className=" mx-[1rem] space-y-3 mt-[1.2rem] ">

<div className="flex justify-between items-center">
    <h1 className=' text-[1.2rem] font-semibold font-Far     '> Madrid ,Spain</h1>
    <p className='text-[1.2rem] font-semibold font-Far text-orange-500     '>$8,450k</p>
</div>

<div className=" flex justify-between items-center">
    <p className=' text-gray-500 text-[1.1rem]   '><i class="fa-solid fa-location-arrow pr-1 text-orange-500"></i> 9 Days Trip</p>
    <p className=' text-gray-500 font-semibold   '> <i class="fa-solid fa-star  pr-2 text-yellow-300 pl-3 "></i>5.0</p>
</div>

</div>
    </div>
    
    <div className=" w-[370px] h-[430px]  bg-white shadow ">
    <img className=' w-full h-[49vh]  ' src={hotel3} alt="" />
    <div className=" mx-[1rem] space-y-3 mt-[1.2rem] ">

<div className="flex justify-between items-center">
    <h1 className=' text-[1.2rem] font-semibold font-Far     '>Rome, Italty</h1>
    <p className='text-[1.2rem] font-semibold font-Far text-orange-500     '>$10,850k</p>
</div>

<div className=" flex justify-between items-center">
    <p className=' text-gray-500 text-[1.1rem]   '><i class="fa-solid fa-location-arrow pr-1 text-orange-500"></i> 15 Days Trip</p>
    <p className=' text-gray-500 font-semibold   '> <i class="fa-solid fa-star  pr-2 text-yellow-300 pl-3 "></i>4.9</p>
</div>

</div>
    </div>
</div>

    </div>
  )
}
