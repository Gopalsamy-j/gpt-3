import React from 'react'
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'

const Library = () => {
  return (
    <div className='bg-gradient-to-r from-[#002853] to-[#040C18] py-10'>
      <div className='max-w-[90%] m-auto'>
        <div className='bg-gradient-to-r from-[#AE67FA] to-[#F49867] ... text-transparent
          bg-clip-text'>
          <p className='font-bold text-5xl'>A lot is happening, <br />
            We are blogging about it.</p>
        </div>
        <div className='lg:grid grid-cols-3  py-10 gap-5'>
          <div className='bg-[#042C54] row-span-2 relative'>
            <img src={blog1} alt="" />
            <p className='font-bold text-xs  text-white py-4 px-4 '>Sep 26, 2021</p>
            <h1 className='font-bold text-2xl text-white px-4 pb-10 lg:pb-0'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>

            <p className='font-semibold text-xs text-white px-4 absolute bottom-3'>Read Full Article</p>

          </div>
          <div>
            <div className='bg-[#042C54] row-span-2 relative'>
              <img src={blog2} alt="" />
              <p className='font-bold text-xs  text-white py-4 px-4'>Sep 26, 2021</p>
              <h1 className='font-bold text-2xl text-white px-4 pb-10'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>

              <p className='font-semibold text-xs text-white px-4 absolute bottom-3'>Read Full Article</p>

            </div>
          </div>
          <div>
            <div className='bg-[#042C54] row-span-2 relative'>
              <img src={blog3} alt="" />
              <p className='font-bold text-xs  text-white py-4 px-4'>Sep 26, 2021</p>
              <h1 className='font-bold text-2xl text-white px-4 pb-10'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>

              <p className='font-semibold text-xs text-white px-4 absolute bottom-3'>Read Full Article</p>

            </div>
          </div>
          <div>
            <div className='bg-[#042C54] row-span-2 relative'>
              <img src={blog4} alt="" />
              <p className='font-bold text-xs  text-white py-4 px-4'>Sep 26, 2021</p>
              <h1 className='font-bold text-2xl text-white px-4 pb-10'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>

              <p className='font-semibold text-xs text-white px-4 absolute bottom-3'>Read Full Article</p>

            </div>
          </div>
          <div>
            <div className='bg-[#042C54] row-span-2 relative'>
              <img src={blog5} alt="" />
              <p className='font-bold text-xs  text-white py-4 px-4'>Sep 26, 2021</p>
              <h1 className='font-bold text-2xl text-white px-4 pb-10'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>

              <p className='font-semibold text-xs text-white px-4 absolute bottom-3'>Read Full Article</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library