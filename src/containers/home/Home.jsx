import React from 'react'
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'
import Brand from '../../components/brand/Brand'

const Home = () => {
  return (
    
    <div className='bg-gradient-to-r from-[#002853] to-[#040C18] ...'>
      <div className='md:flex max-w-[90%] m-auto  justify-center'>
        <div className='md:w-[50%] py-20'>

          <h2 className='font-extrabold text-[3rem] bg-gradient-to-r from-[#AE67FA] to-[#F49867] ... text-transparent
          bg-clip-text '>Let’s Build Something amazing with GPT-3 OpenAI</h2>
          <p className='py-5 text-xl text-[#81AFDD] '>Yet bed any for travelling assistance indulgence unpleasing.
            Not thoughts all exercise blessing. Indulgence way
            everything joy alteration boisterous the attachment.
            Party we years to order allow asked of.</p>
          <div className='items-center'>
              <input className='bg-[#052D56] md:w-[28rem] w-56 py-4 px-3 outline-none text-[#3D6184] rounded-l-md' type="text" placeholder='Your Email Address' />
              <button className='bg-[#FF4820] px-3 py-4 rounded-r-md '>Get Started</button>
          </div>
          <div className='my-10 flex items-center gap-5 text-white'>
          <img className='' src={people} alt="" />
<p className='text-xs font-medium'>1,600 people requested access a visit in last 24 hours</p>
          </div>
         
        </div>
        <div className='md:w-[50%]'>
          <img src={ai} alt="" />
        </div>
        
      </div>
      <div className='max-w-[90%] m-auto '>
    
      </div>
      <Brand />
    </div>
    


  )
}

export default Home