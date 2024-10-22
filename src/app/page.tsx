'use client';
import React from 'react'
import Image from 'next/image'
// import Link from 'next/link'
import Hero from "../app/Hero/hero"

const Home = () => {
  
  return (
    <div id=''>
      <Hero/>
      <p className='text-center text-3xl font-serif font-medium mt-24'>Projects <span className='text-blue-400'>.</span></p>
      <div className='flex justify-between mt-16'>
        <div>
          <Image
          className='ml-36 rounded-lg'
          src="/pro-1.jfif"
          alt='project'
          width={300}
          height={200}/>
          
            <p className='text-xl ml-60 '>Project 1</p>
          <p className='text-lg ml-40'>I made a News Website from Next.Js </p>
         
          
          {/* <button><Link href="">Review Here</Link></button> */}
          <button className=" ml-56 px-4 rounded-3xl py-3 text-sm bg-blue-500 text-white hover:bg-white hover:text-blue-700 duration-700"><a href='https://tanzeel-news-69.vercel.app/'target='_blank'>Review Here</a>  </button>

          
        </div>
        {/* ---------------2------------------ */}
        <div>
          <Image
          className='mr-40 rounded-lg'
          src="/p-2.jfif"
          alt='project'
          width={300}
          height={200}/>
          <p className='text-xl ml-24 '>Project 2</p>
          <p className='text-base ml-4'>I made a Website from Figma templates </p>
         
          
          {/* <button><Link href="">Review Here</Link></button> */}
          <button className=" ml-20 px-4 rounded-3xl py-3 text-sm bg-blue-500 text-white hover:bg-white hover:text-blue-700 duration-700"><a href='https://figma-assignment-fawn.vercel.app/'target='_blank'>Review Here</a> </button>

          
        </div>

      </div>
     

      
    </div>
  )
}

export default Home