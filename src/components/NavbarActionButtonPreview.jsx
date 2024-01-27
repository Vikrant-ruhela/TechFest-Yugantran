import { useState } from "react"
import {motion} from 'framer-motion'

export default function NavbarActionButtonPreview() {
  const [isToggleOpen, setIsToggleOpen] = useState(false)

  return (
    <>
      {/*<!-- Component: Navbar with CTA --> */}
      <header className="bg-[#13080E]   relative z-20 w-full after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full  lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-white-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1" 
            >
              <img src="https://geetauniversity.edu.in/wp-content/uploads/2022/07/GU-Logo-768x349-1-removebg-preview-300x136.png" alt="logo"  width='140px' className="pt-4"/>
              
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-4 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch px-4">
              <div className="ml-auto flex items-center px-2 sm:px-6 lg:ml-0 lg:p-0">
              <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} className="inline-flex h-10 items-center justify-center gap-2 border-2 rounded-2xl  whitespace-nowrap  border-[#f856e5] bg-[#13080E] px-2 sm:px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-slate-200 transition duration-300  hover:shadow-sm hover:shadow-slate-200 focus:bg-[#930066]focus:shadow-sm focus:shadow-slate-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-300 disabled:shadow-none ">
                <span className='text-[#f856e5] hover:text-white' style={{fontFamily:"ethnocentricregular"}}> <a href="https://drive.google.com/file/d/1-HMVUUWL_kxThHQMSrIXGktYacDjd9yA/view?usp=drive_link" target='BLANK'>RULEBOOK</a></span>
              </motion.button>
            </div>
              </li>
                       
            </ul>
            

            <div className="ml-auto flex items-center px-2 sm:px-6 lg:ml-0 lg:p-0">
              <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} className="inline-flex h-10 items-center justify-center gap-2 border-2 rounded-2xl  whitespace-nowrap  border-[#f856e5] bg-[#13080E] px-2 sm:px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-slate-200 transition duration-300  hover:shadow-sm hover:shadow-slate-200 focus:bg-[#930066]focus:shadow-sm focus:shadow-slate-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-300 disabled:shadow-none ">
                <span className='text-[#f856e5] hover:text-white' style={{fontFamily:"ethnocentricregular"}}> <a href="https://forms.gle/Kcky4ZtJtzjtbVXk9"> Register </a></span>
              </motion.button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
