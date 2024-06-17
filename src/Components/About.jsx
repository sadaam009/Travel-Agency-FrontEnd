import React from 'react'
import image1 from'../assets/frame.png'
import image2 from'../assets/Elementfour.png'

export default function About() {
  return (
    <div className=' mt-[6rem] my-[2rem] bg-[#F7F8FC] p-[2rem]  relative '>


        <div className=" flex justify-center  space-x-[8rem] mt-[13rem] ">

            <div className=" space-y-5  relative bottom-[7rem]   ">
                <h1 className=' text-[2.7rem]  font-semibold font-Far   '>What People Say <br /><span className='text-orange-500'>About Us</span></h1>
                <p className='text-[1.1rem] text-gray-500 '>Our Clients send us bunch of smilies with our <br /> services and we love them.</p>
                <div className=" space-x-4 pt-[1.4rem]    ">
        <i class="fa-solid fa-arrow-left border-2 border-gray-300 px-3 py-2  rounded-[50%] "></i>
        <i class="fa-solid fa-arrow-right px-3 py-2  rounded-[50%] bg-orange-500  border-2 border-orange-500 text-white"></i>
       
        </div>
            </div>
            <img style={{zIndex:1}} className=' absolute top-[8.2rem] right-[42.6rem]  ' src={image1} alt="" />
            <img src={image2} className=' absolute right-6 top-[6rem]  ' alt="" />
            <div className="  relative right-[-3rem] ">
                <div className=" w-[470px] h-[250px] rounded bg-gray-100  shadow-lg    ">
                    <div className=" absolute bottom-[2.1rem] left-8 ">
                        <h1 className=' font-semibold font-Far text-gray-500 text-[1.3rem]  '>Chris Thomas</h1>
                        <p className=' text-gray-400 text  '>CEO of Red Button</p>
                    </div>
                </div>
                <div className=" w-[470px] h-[250px] rounded bg-white absolute bottom-[6rem] shadow-lg right-[4rem] px-10 py-[3rem]    ">
                    <p className='  '>“On the Windows talking painted pasture yet its express parties use. Sure 
                    last upon he same as knew next. Of believed or diverted no.”</p>
                  <div className="">
                  <h1 className='text-[1.4rem]  font-semibold pt-[2rem]    '>Mike taylor</h1>
                    <p>Lahore, Pakistan</p>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
