import { MainHeader } from "@/reuse/mainHeader"
import TestimonialModel from "./testimonialModel"


function Testimonial() {
    const fakeApi = [
        { name: "John D.", position: "SEO Specialist", description: "AI-Powered Analytics has completely transformed our financial analysis. It's fast, accurate, and helps us make better data-driven decisions." },
        { name: "Sarah M.", position: "Private Equity Investo", description: "The real-time reporting feature has saved us countless hours. Ripple Space provides the insights we need when we need them." },
        { name: "Alice Ane", position: "Venture Capitalist", description: "Ripple Space has revolutionized our due diligence process. The AI tools are incredibly powerful, and the customizable workflows mean we can tailor the platform to suit each unique deal." },


    ]
    return (
        <div>
            <MainHeader className=" max-w-full ">Customer Testimonials</MainHeader>
            <TestimonialModel fakeApi={fakeApi} />
        </div>
    )
}

export default Testimonial
