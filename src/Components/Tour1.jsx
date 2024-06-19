import React from 'react'
import cover from'../assets/malda.jpg'
import img1 from'../assets/maldevs.jpeg'
import img2 from'../assets/bali.jpeg'
import loc from'../assets/location.png'
import us from'../assets/us.jpeg'
import uk from'../assets/uk.jpeg'

export default function Tour1() {
  return (
    <div className=' bg-[#FEFCFB] mt-[2rem]   '>
      <img className=' h-[40vh] w-full  object-bottom ' src={cover} alt="" />
      <div className=" flex justify-center space-x-4 mt-[4rem] mx-[5rem] items-center  ">
        
        <div className=" w-[340px] h-[400px] bg-white shadow-lg rounded   ">
        <img className='h-[30vh] rounded  ' src={img2} alt="" />
                  
                  <div className="flex justify-between mx-[1rem] mt-6  ">
                    {/* LEFT SIDE */}
                  <div className="flex space-x-2 items-center">
                <img className=' h-[3vh] mt-1 ' src={loc} alt="" />
              <p className=' text-black text-[1rem] font-Far font-bold  '>Bali</p>
              </div>
                  {/* LEFT SIDE */}

                  {/* RIGHT SIDE */}
                  <p className='text-[1rem] text-gray-500 font-semibold  '><i class="fa-solid fa-star  text-orange-400 pr-2">  </i>5.6</p>
                  
                  {/* RIGHT SIDE */}
            
                  </div>
                  <h1 className=' text-[1.5rem] font-semibold font-Far ml-[1rem] my-[1rem]  '>Bali Indonesia</h1>

                 <div className=" flex justify-between mx-[1rem] items-center  ">
                  <span className=' text-[1.1rem] font-semibold text-gray-500  '>$200/Per Persone</span>
                  <button className=' py-2 px-3 rounded bg-orange-500 text-white font-semibold  '>Book Now</button>
                 </div>
              
        </div>
         
         {/* START CARD TWO */}

         <div className=" w-[340px] h-[400px] bg-white shadow-lg rounded   ">
        <img className='h-[30vh] rounded  ' src={img1} alt="" />
                  
                  <div className="flex justify-between mx-[1rem] mt-6  ">
                    {/* LEFT SIDE */}
                  <div className="flex space-x-2 items-center">
                <img className=' h-[3vh] mt-1 ' src={loc} alt="" />
              <p className=' text-black text-[1rem] font-Far font-bold  '>Male</p>
              </div>
                  {/* LEFT SIDE */}

                  {/* RIGHT SIDE */}
                  <p className='text-[1rem] text-gray-500 font-semibold  '><i class="fa-solid fa-star  text-orange-400 pr-2">  </i>5.6</p>
                  
                  {/* RIGHT SIDE */}
            
                  </div>
                  <h1 className=' text-[1.5rem] font-semibold font-Far ml-[1rem] my-[1rem]  '>Male Maldives</h1>

                 <div className=" flex justify-between mx-[1rem] items-center  ">
                  <span className=' text-[1.1rem] font-semibold text-gray-500  '>$400/Per Persone</span>
                  <button className=' py-2 px-3 rounded bg-orange-500 text-white font-semibold  '>Book Now</button>
                 </div>
              
        </div>
            {/* END CARD TWO */}


              {/* START CARD TWO */}

         <div className=" w-[340px] h-[400px] bg-white shadow-lg rounded   ">
        <img className='h-[30vh] rounded  ' src={uk} alt="" />
                  
                  <div className="flex justify-between mx-[1rem] mt-6  ">
                    {/* LEFT SIDE */}
                  <div className="flex space-x-2 items-center">
                <img className=' h-[3vh] mt-1 ' src={loc} alt="" />
              <p className=' text-black text-[1rem] font-Far font-bold  '>UK</p>
              </div>
                  {/* LEFT SIDE */}

                  {/* RIGHT SIDE */}
                  <p className='text-[1rem] text-gray-500 font-semibold  '><i class="fa-solid fa-star  text-orange-400 pr-2">  </i>5.6</p>
                  
                  {/* RIGHT SIDE */}
            
                  </div>
                  <h1 className=' text-[1.5rem] font-semibold font-Far ml-[1rem] my-[1rem]  '>UK Manchester</h1>

                 <div className=" flex justify-between mx-[1rem] items-center  ">
                  <span className=' text-[1.1rem] font-semibold text-gray-500  '>$1000/Per Persone</span>
                  <button className=' py-2 px-3 rounded bg-orange-500 text-white font-semibold  '>Book Now</button>
                 </div>
              
        </div>
            {/* END CARD TWO */}

              {/* START CARD TWO */}

         <div className=" w-[340px] h-[400px] bg-white shadow-lg rounded   ">
        <img className='h-[30vh] rounded  ' src={us} alt="" />
                  
                  <div className="flex justify-between mx-[1rem] mt-6  ">
                    {/* LEFT SIDE */}
                  <div className="flex space-x-2 items-center">
                <img className=' h-[3vh] mt-1 ' src={loc} alt="" />
              <p className=' text-black text-[1rem] font-Far font-bold  '>USA</p>
              </div>
                  {/* LEFT SIDE */}

                  {/* RIGHT SIDE */}
                  <p className='text-[1rem] text-gray-500 font-semibold  '><i class="fa-solid fa-star  text-orange-400 pr-2">  </i>5.6</p>
                  
                  {/* RIGHT SIDE */}
            
                  </div>
                  <h1 className=' text-[1.5rem] font-semibold font-Far ml-[1rem] my-[1rem]  '>USA New York</h1>

                 <div className=" flex justify-between mx-[1rem] items-center  ">
                  <span className=' text-[1.1rem] font-semibold text-gray-500  '>$2000/Per Persone</span>
                  <button className=' py-2 px-3 rounded bg-orange-500 text-white font-semibold  '>Book Now</button>
                 </div>
              
        </div>
            {/* END CARD TWO */}
        
      </div>
      
    </div>
  )
}
