import ComparePlans from '@/components/HomePage/HeroSection/CTA/comparePlans'
import StartYourFreeTrial from '@/components/HomePage/HeroSection/CTA/startYourFreeTrial'

function FreeTrial() {
    return (
        <div>
            <p className='text-3xl  w-full text-center py-10 text-muted-foreground'>Or,</p>
            <div>
                <p className='text-3xl font-bold w-full text-center'>Start Your Free Trial </p>
                <p className='text-lg  w-full text-center text-muted-foreground'>Try our Professional Plan features free for 14 days. No credit card required.</p>
            </div>
            <div className=' flex justify-center gap-5 items-center py-5 flex-wrap'>
                <StartYourFreeTrial />
                <ComparePlans />
            </div>
        </div>
    )
}

export default FreeTrial;
