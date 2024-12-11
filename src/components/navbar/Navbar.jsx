import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false)

    


const closeMenu = () => {
    setOpen(false);
} 
    return (
        <div className='bg-gradient-to-r from-[#002853] to-[#040C18] ...'>
            <div className='max-w-[90%] md:flex items-center justify-between  py-5 m-auto' >
                <div className=''>
                    <img className='w-[3.91rem]' src={logo} alt="" />
                </div>
                <div className=''>
                    <ul className='hidden md:flex text-lg text-white font-thin gap-5'>
                        <li><NavLink to='' >Home</NavLink></li>
                        <li><NavLink to='/whatisgpt'>What is GPT?</NavLink></li>
                        <li><NavLink to='openai'>Open AI</NavLink></li>
                        <li><NavLink to='casestudies'>Case Studies</NavLink></li>
                        <li><NavLink to='library'>Library</NavLink></li>
                    </ul>
                </div>
                <div className='hidden text-white md:flex gap-3 text-lg'>
                    <button>Sign in</button>
                    <button className='bg-[#FF4820] px-4 py-1 rounded-md'>Sign up</button>
                </div>
                
            </div>
            <div>
                    <div className='cursor-pointer'>
                        <Bars3BottomLeftIcon className={`absolute right-4 top-3 h-7 fill-white md:hidden  ${open && 'hidden'}`} onClick={() => setOpen(!open)} />

                    </div>
                    <div className={`absolute top-0 right-0  bg-[#002853] h-screen  ${open ? 'w-[50%]' : 'w-0'}`}>
                       <div className=' gap-4 px-4'>
                        <ul className={` flex flex-col  gap-4 text-lg text-white font-thin py-10 ${!open && 'hidden'}`} >
                            <li><NavLink to='' onClick={closeMenu}>Home</NavLink></li>
                            <li><NavLink to='/whatisgpt' onClick={closeMenu}>What is GPT?</NavLink></li>
                            <li><NavLink to='openai'  onClick={closeMenu}>Open AI</NavLink></li>
                            <li><NavLink to='casestudies' onClick={closeMenu}>Case Studies</NavLink></li>
                            <li><NavLink to='library' onClick={closeMenu}>Library</NavLink></li>
                            <li>
                                <button>Sign in</button>
                            </li>
                            <li><button className='bg-[#FF4820] px-4 py-1 rounded-md'>Sign up</button></li>
                        </ul>
                        </div>
                        <XMarkIcon className= 'fill-white h-7 absolute  top-2 left-3 ' onClick={() => setOpen(!open)}/>
                    </div>
                </div>
        </div>
    )
}

export default Navbar