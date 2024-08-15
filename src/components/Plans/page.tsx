import BasicPlan from './Basic/basicPlan'
import FreeTrial from './FreeTrial/freeTrial'

function Plans() {
    return (
        <>
            <div className=' py-10 flex flex-col gap-3'>
                <p className='text-4xl md:text-5xl font-bold w-full text-center'>Flexible Pricing Plans </p>
                <p className='text-muted-foreground mx-auto w-fit px-5'>
                    Choose the plan that fits your needs. Whether you're an individual investor or part of a large firm, Ripple Space has a pricing plan that's right for you.
                </p>
            </div>
            <BasicPlan />
            <FreeTrial />
        </>
    )
}

export default Plans
