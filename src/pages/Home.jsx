import React from 'react'
import HeroSection from '../Components/HeroSection'
import WhoWeAre from '../Components/WhoWeAre'
import StatsCounter from "../Components/StatsCounter"
import Testimonials from "../Components/Testimonials"
import WhyChooseUs from '../Components/WhyChooseUs'
import ServiceSection from '../Components/ServiceSection'
// import QuoteForm from "../Components/QuoteForm"
import DeliveryMarquee from '../Components/Marquee'
import Faq from "../Components/Faq"

const Home = () => {
  return (
   <>
   <HeroSection/>
   <WhoWeAre/>
   <WhyChooseUs/>
   <ServiceSection/>
   <StatsCounter/>
   <DeliveryMarquee/>
   <Testimonials/>
   <Faq/>
   </>
  )
}

export default Home