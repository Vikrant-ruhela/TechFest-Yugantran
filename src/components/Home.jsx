import React, { Suspense, useEffect, useRef } from 'react'
import Techtop from './Techtop'
import Model3d from './Model3d'
import Team from './Team'
import Brochure from './Brochure'
import EventCards from './EventCards'
import { InfinitySpin } from 'react-loader-spinner'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'


function Home() {
  const div=useRef(null)
  return (
    <>
      <div className='bg-[#13080e]'>
        <Techtop />
        <div className='flex justify-center items-center'>
        <Suspense fallback={
        <InfinitySpin 
        width='200'
        color="#9400D3"
      />
        } >
          <Model3d />
        </Suspense>
        </div>
        <div className="w-[97%] flex justify-end items-end flex-col">
        <button onClick={()=>{ div.current.scrollIntoView({ behavior: "smooth", block: "start" })}} className='text-purple-600 text-6xl relative bottom-10 sm:bottom-64 sm:right-0 right-5'  ><BsFillArrowDownCircleFill/></button>
         </div>
         <div ref={div}>
         <EventCards />
         </div>
          <Brochure />
        <Team />
      </div>

    </>
  )
}

export default Home
