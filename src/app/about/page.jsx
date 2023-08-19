import Testimonials from '@/components/entities/Testimonial'
import AboutComponent from '@/components/home_components/AboutSection'
import WhyChooseUs from '@/components/home_components/WhychooseUs'
import React from 'react'

const page = () => {
  return (
    <>
      <AboutComponent/>
      <WhyChooseUs/>
      <Testimonials/>
    </>
  )
}

export default page