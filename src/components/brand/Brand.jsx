import React from 'react'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassion from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

const Brand = () => {
    return (
        
            <div className='md:flex  justify-center gap-9 pt-10'>
                <img className='h-6' src={google} alt="" />

                <img className='h-6' src={slack} alt="" />
                <img className='h-6' src={atlassion} alt="" />
                <img className='h-6' src={dropbox} alt="" />
                <img className='h-6' src={shopify} alt="" />
            </div>


    )
}

export default Brand