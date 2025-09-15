import React from 'react'
import Header from '../components/Header'
import BgRemovalSteps from '../components/BgRemovalSteps'
import BgSlider from '../components/BgSlider'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
     {/* Hero Section */}
     <Header/>
     <BgRemovalSteps/>
     <BgSlider/>
    </div>
  )
}

export default Home
