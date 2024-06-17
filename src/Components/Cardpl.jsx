import React from 'react'
import icone1 from '../assets/Groupone.png'
import icone2 from '../assets/Group.png'
import icone3 from '../assets/Grouptwo.png'
import vector from '../assets/Element.png'

export default function Cardpl() {
  return (
    <div className=' mt-[4rem] bg-[#F7F8FC] py-[5rem] relative   '>
       <div className="text-center space-y-5">
        <img className=' absolute right-[10rem] w-[12%] top-[8rem]    ' src={vector} />
       <h1 className='text-[3rem] font-semibold font-Far   '>Things you need 
       <span className=' text-orange-500'> to do</span></h1>
       <p className=' text-gray-400  text-[1.1rem]   '>We ensure that you’ll embark on a perfectly planned, <br /> safe vacation
         at a price you can afford. </p>
       </div>
        <div className=" flex justify-center items-center space-x-5 mt-[3rem]  ">
            <div className="w-[300px] h-[220px] bg-white rounded      ">
                <div className="  ml-[2.4rem]  mt-[2rem] space-y-4   ">
                    <img src={icone2} alt="" />
                    <h1 className='text-1.5rem font-bold'>Sign Up</h1>
                    <p>Completes all the work associated with  planning and processing</p>
                </div>
            </div>
            <div className="w-[300px] h-[220px]  bg-white rounded      ">
            <div className="  ml-[2.4rem]  mt-[2rem] space-y-4   ">
                    <img src={icone1} alt="" />
                    <h1 className='text-1.5rem font-bold'>Worth of Money</h1>
                    <p>Completes all the work associated with  planning and processing</p>
                </div>
            </div>
            <div className="w-[300px] h-[220px]  bg-white rounded      ">
            <div className="  ml-[2.4rem]  mt-[2rem] space-y-4   ">
                    <img src={icone3} alt="" />
                    <h1 className='text-1.5rem font-bold'>Exciting Travel
</h1>
                    <p>Completes all the work associated with  planning and processing</p>
                </div>
            </div>
        </div>
    </div>
  )
}
