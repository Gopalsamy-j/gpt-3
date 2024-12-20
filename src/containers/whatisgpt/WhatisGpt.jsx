import React from 'react'
import Bar from '../../components/bar/Bar'

const WhatisGpt = () => {
  return (
    <div className='bg-gradient-to-b from-[#040C18] to-[#0a2441] ... h-auto'>
      <div className='max-w-[90%] m-auto relative'> 
        <div className='lg:absolute top-32 bg-[#002853] p-16 w-[90%] '>
          <div className='md:p-24'>
            <Bar/>
            <div className=' lg:flex mt-6 gap-10'>
            <h2 className=' text-white font-bold text-2xl md:w-[40%] '>What is GPT ?</h2>
            <p className='text-[#81AFDD] font-medium text-base mt-6 lg:mt-0'>We so opinion friends me message as delight. 
              Whole front do of plate heard oh ought. 
              His defective nor convinced residence own. 
              Connection has put impossible own apartments boisterous. 
              At jointure ladyship an insisted so humanity he. 
              Friendly bachelor entrance to on by.</p>
            </div>
            <div className=' lg:flex justify-between mt-24 '>
              <h1 className='bg-gradient-to-r from-[#AE67FA] to-[#F49867] ... text-transparent
          bg-clip-text font-bold text-4xl lg:w-[40%]
          '>The possibilities are beyond your imagination</h1>
              <h2 className='mt-5 lg:mt-0 text-[#FF8A71]  font-medium text-base'>Explore The Library</h2>
            </div>

            <div className='lg:flex mt-24 gap-20 justify-between'>
              <div className=''>
                <Bar />
                <h1 className='mt-6 font-bold text-2xl text-white'>Chatbots</h1>
                <p className='mt-6 font-medium text-base text-[#81AFDD]'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
              </div>
              <div className='mt-16 lg:mt-0'>
                <Bar />
                <h1 className='mt-6 font-bold text-2xl text-white'>Knowledgebase</h1>
                <p className='mt-6 font-medium text-base text-[#81AFDD]' >At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
              </div>
              <div className='mt-16 lg:mt-0'>
                <Bar />
                <h1 className='mt-6 font-bold text-2xl text-white'>Education</h1>
                <p className='mt-6 font-medium text-base text-[#81AFDD]'>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
              </div>
            </div>
           

          </div>

        </div>
      </div>
      
    </div>
  )
}

export default WhatisGpt