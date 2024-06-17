import React, { useEffect } from 'react'

export default function Searchbar() {
    useEffect(()=>{
    document.body.style.backgroundColor='#FEFCFB'
    },[])
  return (
    <div className=' flex justify-center mt-[1.5rem] relative  '>
 <button className='py-3 px-8 bg-orange-500 rounded text-white absolute 
 right-[19rem] top-[2.5rem]   '>Explore New</button>

      <div className="flex w-[841px] h-[120px] bg-white  
      space-x-[2rem] rounded-[0.7rem] shadow-lg   ">
       
      <div className='  mt-[1.5rem] ml-[1.5rem] space-y-3 space-x-0 '>
            <label htmlFor="" className=' text-[1.3rem] border-none   '>Location :</label>
        <select className=' text-orange-500' name="" id="">
            <option value="">None</option>
            <option className=' bg-slate-200 ' value="">Bannaadir</option>
            <option className=' bg-slate-200' value="">Dabka</option>
            <option className=' bg-slate-200' value="">Km4</option>
            <option className=' bg-slate-200' value="">Waratanabada</option>
        </select>
        <p className='text-gray-400'>Where are you going</p>
        </div>

        <div className='mt-[1.5rem] space-y-3'>
            <label htmlFor="" className='text-[1.3rem]'>Data :</label>
       
           <input className='text-orange-500' type="date" />
       
        <p className='text-gray-400'>When you will go</p>
       
        </div>

        <div className='mt-[1.5rem] space-y-3'>
            <label htmlFor="" className='text-[1.3rem]'>Guest :</label>
        <select className='text-orange-500' name="" id="">
            <option value="">None</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
        </select>
        <p className='text-gray-400'>Number of guest</p>
        </div>
      </div>
        
       
    </div>
  )
}
