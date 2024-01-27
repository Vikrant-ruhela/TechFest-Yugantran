import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

function Bgmi(props) {
  useEffect(() => {
    window.scrollTo(0,0)   
  }, [])
  
  return (
    <>
      <div className='bg-[#13080e] relative overflow-x-hidden'>
        <div className='absolute right-[-20rem] sm:right-[-15rem] z-0 overflow-hidden'>
          <img src="https://res.cloudinary.com/de1hkb0kq/image/upload/v1698856478/techfest/falhxnhnrsb05lajy3bl.png" alt="logo" width='100px' className='w-[27rem] z-0 ' />
        </div>

        <div className='absolute left-[-19rem] sm:left-[-14rem] z-0'>
          <img src="https://res.cloudinary.com/de1hkb0kq/image/upload/v1698856478/techfest/falhxnhnrsb05lajy3bl.png" alt="logo" width='100px' className='w-[27rem] z-0' />
        </div>

        <Fade cascade={true} damping={0.1}>
          <h1 className='text-4xl pt-8 pb-6 sm:text-7xl text-white sm:pt-14 sm:pb-2 flex justify-center z-20' style={{ fontFamily: "ethnocentricregular" }}>{props.eventname}</h1>

          <h2 className='text-[1.9rem] pb-4 sm:text-6xl text-black strTxt sm:py-6 flex justify-center z-20' style={{ fontFamily: "ethnocentricregular" }}>{props.subname}</h2>
          <h3 className='pb-4 sm:text-4xl text-white sm:pt-2 sm:pb-10 flex justify-center z-20' style={{ fontFamily: "ethnocentricregular" }}>6-7 FEBRUARY 2024</h3>
        </Fade>

        <motion.div whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} className="ml-auto flex justify-center items-center px-1 py-1 sm:px-6 sm:py-2 lg:ml-0 lg:p-0">
          <button className="inline-flex sm:h-10 items-center justify-center  sm:gap-2 border-2 rounded-[10px]  whitespace-nowrap bg-[#13080E] border-[#f856e5] px-4 py-2 sm:px-10 sm:py-6 text-xl font-medium tracking-wide text-white shadow-md shadow-y-md shadow-slate-200 transition duration-300 hover:text-white  hover:shadow-sm hover:shadow-slate-200 focus:bg-[#930066]focus:shadow-sm focus:shadow-slate-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-300 disabled:shadow-none z-20">
            <span className='text-[#f856e5] hover:text-white z-20' style={{ fontFamily: "ethnocentricregular" }}> <a href="https://forms.gle/Kcky4ZtJtzjtbVXk9"> Register </a></span>
          </button>
        </motion.div> 
        

        <h2 className='text-2xl px-4 py-4 sm:text-3xl text-black strTxt sm:p-[4rem] flex justify-left' style={{ fontFamily: "ethnocentricregular" }}>Prizes:-</h2>
        <Fade cascade={true} damping={0.01}>

          <div className='text-xl px-4 w-[100px] sm:w-44  sm:text-xl text-white sm:px-[4rem] pb-[1.5rem] sm:pb-[1.5rem] flex justify-left gap-4 align-middle'><img src="https://cdn.pixabay.com/photo/2016/08/23/14/25/cup-1614530_1280.png"  alt="" /><span style={{ fontFamily: "ethnocentricregular" }} className='py-5 text-2xl'>{props.price1}</span></div>

          <div className='text-xl px-4 w-[100px] sm:w-44 sm:text-xl text-white sm:px-[4rem] pb-[1.5rem] sm:pb-[1.5rem] flex justify-left gap-4 align-middle'><img src="https://cdn.pixabay.com/photo/2016/08/23/15/07/cup-1614673_960_720.png"  alt="" /><span style={{ fontFamily: "ethnocentricregular" }} className='py-5 text-2xl'>{props.price2}</span></div>

          <div className='text-xl px-4 w-[100px] sm:w-44 sm:text-xl text-white sm:px-[4rem] pb-[1.5rem] sm:pb-[1.5rem] flex justify-left gap-4 align-middle'><img src="https://cdn.pixabay.com/photo/2016/08/23/16/04/cup-1614844_1280.png"  alt="" /><span style={{ fontFamily: "ethnocentricregular" }} className='py-5 text-2xl'>{props.price3}</span></div>
           
        </Fade>
        


        <h2 className='text-2xl px-4 py-4 sm:text-3xl text-black strTxt sm:p-[4rem] flex justify-left' style={{ fontFamily: "ethnocentricregular" }}>Rules:-</h2>
        <Fade cascade={true} damping={0.01}>
      
           {props?.rules?.map((rule,index) => {
            return (
              <h3 key={index} className='text-xl px-4 sm:text-xl text-white sm:px-[4rem] pb-[1.5rem] sm:pb-[1.5rem] flex justify-left'>{rule}</h3>
            )
          })}
        </Fade>


        <h2 className='text-2xl px-4 py-4 sm:text-3xl text-black strTxt sm:p-[4rem] flex justify-left' style={{ fontFamily: "ethnocentricregular" }}>Winning Conditions :</h2>
        <Fade cascade={true} damping={0.01}>
          {props?.winningconditions?.map((rule,index) => {
            return (
              <h3 key={index} className='text-xl px-4 sm:text-xl text-white sm:px-[4rem] sm:pb-[2.5rem] flex justify-left'>{rule}</h3>
            )
          })}
        </Fade>



      </div>

    </>
  )
}

export default Bgmi
