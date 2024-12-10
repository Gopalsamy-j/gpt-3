import React from 'react'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassion from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

const Brand = () => {
    return (
        
            <div className='flex  justify-center md:gap-9 gap-2 pt-2 '>
                <img className='md:h-6 h-4' src={google} alt="" />

                <img className='md:h-6 h-4' src={slack} alt="" />
                <img className='md:h-6 h-4' src={atlassion} alt="" />
                <img className='md:h-6 h-4' src={dropbox} alt="" />
                <img className='md:h-6 h-4' src={shopify} alt="" />
            </div>


    )
}

export default Brand