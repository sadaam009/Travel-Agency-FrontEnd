import { Link } from 'react-router-dom'




export default function Header() {
  return (
    <>
    <div className=' flex justify-between mx-[6rem] items-center  mt-3 '>
        <h1 className=' text-2xl font-bold'>Trabook</h1>

        <div className=" flex space-x-6 font-bold" >

          {/* <li className=" list-none"><a href="">Home</a></li>
          <li className=" list-none"><a href="">About</a></li>
          <li className=" list-none"><a href="">Destination</a></li>
          <li className=" list-none"><a href="">Tour</a></li>
          <li className=" list-none"><a href="">Blog</a></li> */}

        
         <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/destination'>Destination</Link>
          <Link to='/tour'>Tour</Link>
          <Link to='/blog'>Blog</Link>
          
        </div>
        <div className=" space-x-3">
          <button className='text-[1.1rem] text-orange-500   '>LogIn</button>
          <button className='text-[1.1rem]  text-white  bg-orange-500 py-1 px-7   rounded  hover:border-[1px]
           hover:border-orange-500 hover:text-black hover:bg-white   '>SignUp</button>
        </div>
    </div>
   
    
  
    </>
    
  )
}
