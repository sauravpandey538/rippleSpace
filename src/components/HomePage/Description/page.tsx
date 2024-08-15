import { Description } from '@/reuse/description'
import { MainHeader } from '@/reuse/mainHeader';

function IntroDescription() {
    return (
        <div className='flex flex-col justify-center items-center '>
            <MainHeader>Who we are ?</MainHeader>
            <Description>Welcome to Ripple Space, where cutting-edge technology meets comprehensive due diligence. Whether you're an investor, analyst, or founder, Ripple Space provides you with the tools to conduct thorough, data-driven investigations with ease. Our platform leverages AI to streamline the entire due diligence process, offering real-time insights and in-depth analysis that empowers you to make smarter, more informed decisions.</Description>
        </div>)
}

export default IntroDescription;
