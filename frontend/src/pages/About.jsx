import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online.</p>
              <p>Our mission at Forever is to empower customers with choice, convenience, and confidence.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission is to provide the best quality products with the best customer service.</p>
          </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}
export default About