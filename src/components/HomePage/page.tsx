
import IntroDescription from './Description/page'
import Features from './Features/page'

import HeroSection from './HeroSection/Page'
import Navigation from './Navigation/Page'
import Testimonial from './Testimonials/page'

function HomePage() {

    return (
        <div className='bg-gray-800 '>
            <Navigation /> {/* navigation is not required for now*/}
            <HeroSection />
            <IntroDescription />
            <Features />
            <Testimonial />

        </div>
    )
}

export default HomePage
