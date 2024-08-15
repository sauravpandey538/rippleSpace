
import IntroDescription from './Description/page'
import Features from './Features/page'
import RequestADemo from './HeroSection/CTA/requestADemo'
import StartYourFreeTrial from './HeroSection/CTA/startYourFreeTrial'
import HeroSection from './HeroSection/Page'
// import Navigation from './Navigation/Page'
import Testimonial from './Testimonials/page'

function HomePage() {

    return (
        <div className='bg-gray-800 px-10'>
            {/* <Navigation /> */} {/* navigation is not required for now*/}
            <HeroSection />
            <IntroDescription />
            <Features />
            <Testimonial />
            <div className='flex justify-center items-end w-full py-10 gap-4 flex-wrap'>
                <StartYourFreeTrial />
                <RequestADemo />
            </div>
        </div>
    )
}

export default HomePage
