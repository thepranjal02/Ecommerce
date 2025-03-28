import React from 'react'
import HeroSection from '../components/HeroSection'
import Items from '../components/Items'
import CardSection from '../components/CardSection'

function Landingpage() {
  return (
    <div className='bg-gray-900 text-gray-100 min-h-screen flex flex-col'>
         <main className="flex-grow pt-16">
      
      <HeroSection />
      <Items />
      <CardSection />
      </main> 
    </div>
  )
}

export default Landingpage