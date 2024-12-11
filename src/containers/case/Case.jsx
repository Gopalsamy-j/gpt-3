import React from 'react'
import possibility from '../../assets/possibility.png'

const Case = () => {
  return (
    <div className='bg-gradient-to-r from-[#002853] to-[#040C18] ... py-24'>
      <div className='max-w-[90%] m-auto '>
        <div className='max-w-[80%] m-auto lg:flex justify-between gap-10'>
          <div>
            <img className='w-[70rem]' src={possibility} alt="" />
          </div>
          <div className='py-40'>
            <p className='text-[#71E5FF] text-base font-medium'>Request Early Access to Get Started</p>
            <h2 className='mt-10 bg-gradient-to-r from-[#AE67FA] to-[#F49867] ... text-transparent
        bg-clip-text font-bold text-3xl'>The possibilities are beyond your imagination</h2>
            <p className='text-[#81AFDD] text-base py-10'>Yet bed any for travelling assistance indulgence unpleasing.
              Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous
              the attachment. Party we years to order allow asked of.</p>
            <h3 className='text-[#FF8A71]'>Request Early Access to Get Started</h3>
          </div>
        </div>

      </div>
      <div className='max-w-[85%] bg-gradient-to-r from-[#AE67FA] to-[#F49867] ... lg:my-20 m-auto lg:flex justify-between items-center px-10 py-4 rounded-md'>
        <div >
        <p className='font-medium text-xs'>Request Early Access to Get Started</p>
        <p className='text-2xl font-bold'>Register today & start exploring the endless possiblities.</p>
        </div>
        <div className='flex justify-center pt-4 lg:flex lg:flex-row'>
          <button className='bg-black text-white px-4 py-2 rounded-full'>Get Started</button>
        </div>
      </div>


    </div>
  )
}

export default Case