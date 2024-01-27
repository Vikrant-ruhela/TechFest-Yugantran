import React from 'react'

function Footer() {
  return (
    <>
      <div className='bg-[#13080e]'>
        <h3 className=' text-[16px] pt-4 sm:text-4xl text-white sm:pt-6 flex justify-center' style={{ fontFamily: "ethnocentricregular" }}>ORGANIZED BY</h3>
        <div className='flex justify-center p-4 sm:p-8'>
          <h3 className='text-[16px] sm:text-4xl text-white sm:pt-6 flex justify-center items-start' style={{ fontFamily: "ethnocentricregular" }}>
            <span className=' text-purple-600'>S</span>CHOOL &nbsp;<span>OF</span> &nbsp;
            <span className=' text-purple-600'> C</span>OMPUTER &nbsp; 
            <span className=' text-purple-600'> S</span>CIENCE
          </h3>


        </div>
      </div>

    </>
  )
}

export default Footer
