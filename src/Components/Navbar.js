import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
       <div className='flex md:bg-blue-600 lg:bg-green-600 bg-blue-950 gap-10 box-border justify-between  items-center px-10 mx-0 text-white '>
      <h2 className='text-white text-2xl'>Admin <span>LTE</span></h2>


      <div className='hidden md:flex gap-4 items-center'>
        <Link href="/home" className='font-white' >Home</Link>
        <Link href="/document" className='border-gray-500' >Document</Link>
        <Link href="/blog" className='border-gray-500' >Template</Link>
        <Link href="/template" className='border-gray-500' >Blog</Link>
        <button className='py-2 px-9 bg-transparent  rounded-full border border-white '>Subscribe</button>

      </div>
    </div>
    </>
 
  )
}

export default Navbar
