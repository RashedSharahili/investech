import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import ContactUs from '../Home/ContactUs/ContactUs'


function HomePage() {
  return (
    <>
    {/* Hero Section */}
    <Hero />
    {/* Services Section */}
    <Services />
    
    {/* Contact Us Section */}
    <ContactUs />
    </>
  )
}

export default HomePage