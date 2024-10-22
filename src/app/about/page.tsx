import React from 'react'

const About = () => {
  return (
    <div>
        <div className='text-center'>
        <h1 className="text-4xl font-semibold">Hey, I`m Tanzeel <span className='text-blue-400'>.</span></h1>
          <p className="text-lg"> I`m a Front end developer with Excellence in HTML, CSS, JavaScript, TypeScript<br />
          Currently Learning Next.Js from GIAIC </p>
          <div >
            <button className="mt-4 px-6 py-3 rounded-3xl text-sm bg-blue-500 text-white hover:bg-white hover:text-blue-700 duration-700">Hire Me</button>
            <button className="mt-4 ml-3 px-4 rounded-3xl py-3 text-sm bg-blue-500 text-white hover:bg-white hover:text-blue-700 duration-700">Contact Me</button>
          </div>
        </div>

        </div>
   
  )
}

export default About