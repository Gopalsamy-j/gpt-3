import React from 'react'
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div className='bg-[#031B34] py-16  '>
            <div className='max-w-[90%] m-auto flex flex-col gap-10'>
                <p className='bg-gradient-to-r from-[#AE67FA] to-[#F49867] ... text-transparent
          bg-clip-text font-bold text-5xl w-[80%] m-auto'>Do you want to step in to the future before others</p>
                <div className='flex justify-center'>
                    <button className='bg-[#FF4820] px-4 py-2  text-white '>Request Early Access</button>
                </div>

            </div>

            <div className='lg:grid w-[90%] lg:grid-cols-4 m-auto mt-10 cursor-pointer grid grid-cols-2 gap-10 justify-center '>
                <div className='placeholder-opacity-10'>
                    <img className='h-5 ' src={logo} alt="" />
                </div>
                <div className=''>
                    <ul className='text-white flex flex-col  gap-4 '>
                        <li className='font-bold'>Links</li>
                        <li>Overons</li>
                        <li>Social Media</li>
                        <li>Counters</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <ul className='text-white flex flex-col  gap-4'>
                        <li className='font-bold'>Company</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <ul className='text-white flex flex-col  gap-4'>
                        <li className='font-bold'>Get in Touch</li>
                        <li>Crechterwood K12 182 DK Alknjkcb</li>
                        <li>085-132567</li>
                        <li>info@payme.net</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer