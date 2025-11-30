import React from 'react'
import HeroAbout from '../Components/HeroAbout'
import FeaturedSection from '../Components/FeaturedSection'
import VisionMission from '../Components/VissionMission'
import DeliveryMarquee from '../Components/Marquee'
import TestimonialSlider from '../Components/Testimonials'
import PartnersMarquee from '../Components/PartnersMarquee'

const About = () => {
  return (
    <>
    <HeroAbout/>
    <FeaturedSection/>
    <DeliveryMarquee/>
    <VisionMission/>
    <PartnersMarquee/>
    <TestimonialSlider/>

    </>
  )
}

export default About