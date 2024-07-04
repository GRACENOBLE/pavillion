import About from '@/components/About'
import Events from '@/components/Events'
import Featured from '@/components/Featured'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Featured/>
      <Events/>
    </div>
  )
}

export default page
