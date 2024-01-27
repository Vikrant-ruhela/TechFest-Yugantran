import React from 'react'
import CountUp from 'react-countup';
import { Fade } from 'react-awesome-reveal';
import {motion} from 'framer-motion'

function Brochure() {
  return (
    <>
      <div className='bg-[#13080E] py-10 relative overflow-hidden'>
        <div className='absolute left-[-28rem] sm:left-[-24rem] top-0 z-0'>
          <img src="https://res.cloudinary.com/de1hkb0kq/image/upload/v1698856478/techfest/falhxnhnrsb05lajy3bl.png" alt="logo" width='100px' className='w-[40rem] h-[19rem] z-0' />
        </div>
        <Fade cascade={true}>

        <h3 className='text-[1rem] text-center sm:text-2xl text-white pt-8 pb-6 flex justify-center z-20' style={{ fontFamily: "ethnocentricregular" }}>
           <span className=' text-purple-600'>{<CountUp end={2} duration={15} />}</span>
           DAYS | 
           <span className='text-purple-600'>
           {<CountUp end={14} duration={15} />}
           </span>
           EVENTS |  
           <span className='text-purple-600'>
           {<CountUp end={15} duration={15} />} 
           </span>
           HOURS
           </h3>
        <h2 className='text-[1.9rem] sm:text-6xl text-white py-2 pb-8 flex justify-center z-20' style={{ fontFamily: "ethnocentricregular" }}>REGISTER NOW</h2>

        </Fade>
        <div className="ml-auto flex justify-center items-center px-1 pb1 pt-4 sm:px-6 sm:py-2 lg:ml-0 lg:p-0">
          <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} className="inline-flex sm:h-10 items-center justify-center  sm:gap-2 border-2 rounded-[10px]  whitespace-nowrap bg-[#13080E] border-[#f856e5] px-2 py-2 sm:px-10 sm:py-6 text-xl font-medium tracking-wide text-white shadow-md shadow-y-md shadow-slate-200 transition duration-300 hover:text-white  hover:shadow-sm hover:shadow-slate-200 focus:bg-[#930066]focus:shadow-sm focus:shadow-slate-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-300 disabled:shadow-none z-20">
            <span className='text-[#f856e5] hover:text-white z-20' style={{ fontFamily: "ethnocentricregular" }}> <a href="https://drive.google.com/file/d/1-HMVUUWL_kxThHQMSrIXGktYacDjd9yA/view?usp=drive_link" target='BLANK'>DOWNLOAD RULEBOOK</a></span>
          </motion.button>
        </div>
      </div>

    </>
  )
}

export default Brochure
