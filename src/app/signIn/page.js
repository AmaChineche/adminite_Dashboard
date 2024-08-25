import { GoDotFill } from "react-icons/go";
import React from 'react'

const page = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-cyan-500'>
      <div className='bg-white m-40 shadow-2xl border border-black'>
        <h2 className='py-2 justify-center items-center text-center'> <p className="flex px-32 text-center items-center"><GoDotFill /> Registration Form<GoDotFill /></p></h2>
        {/* <span className='justify-center font-bold items-center left-32'><GoDotFill /></span> */}
        <form className='m-10 justify-center items-center cursor-pointer'>
          <div className="flex">
            <p className=""><GoDotFill /></p> <input className=' border-black border-b-4 block w-full px-3 py-2  placeholder-black focus:border-blue-500 outline-none ' type='text' placeholder='Name :' />
          </div>

          <div className="flex mt-8">
            <p className=""><GoDotFill /></p> <input className='  border-black border-b-4 block w-full px-3 py-2  placeholder-black focus:border-blue-500 outline-none ' type='email' placeholder='Email Address :' />
          </div>
          <div className="flex mt-8">
            <p className=""><GoDotFill /></p> <input className=' border-black border-b-4 block w-full px-3 py-2  placeholder-black focus:border-blue-500 outline-none ' type='country' placeholder='COuntry :' />

          </div>
          <div className="flex mt-8">
            <p className=""><GoDotFill /></p> <input className=' border-black border-b-4 block w-full px-3 py-2  placeholder-black focus:border-blue-500 outline-none ' type='contact' placeholder='Contact :' />

          </div>
          <div className="flex mt-8 mb-5">
            <p className=""><GoDotFill /></p> <input className=' border-black border-b-4 block w-full px-3 py-2  placeholder-black focus:border-blue-500 outline-none ' type='password' placeholder='Password :' />

          </div>

          <div className='justify-center items-center mx-10'>
            <p> <input type="checkbox" name="option1" value="value1" /> just know that am here to stay, im gonna be one of the best web dev. in the wolrd of tech......<br />
              this tech ive come to stay
            </p>
            <button className='p-8 px- mt-10 ml-32 	text-transform: uppercase justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white'> create account</button>
            <p className='ml-40 mt-5 mb-20'>   Already Have an Account? <span className='text-gradient-to-r from-cyan-500'> <a>Sign In</a> </span></p>
          </div>
        </form>


      </div>

    </div>
  )
}

export default page
