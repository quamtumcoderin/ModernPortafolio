import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import HeroSection from './components/sections/HeroSection'
import DafoSection from './components/sections/DafoSection'
import ActivitiesSection from './components/sections/ActivitiesSection'
import SoftSkillsSection from './components/sections/SoftSkillsSection'
import ReflectionSection from './components/sections/ReflectionSection'

function App() {
    return (
        <div className='font-sans text-gray-800 bg-white'>
            <Navbar />

            <main>
                <HeroSection />

                <DafoSection />

                <SoftSkillsSection />

                <ActivitiesSection />

                <ReflectionSection />
            </main>

            <Footer />
        </div>
    )
}

export default App