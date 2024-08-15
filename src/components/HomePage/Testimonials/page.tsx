import { MainHeader } from "@/reuse/mainHeader"
import TestimonialModel from "./testimonialModel"


function Testimonial() {
    const fakeApi = [
        { img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", name: "Joha D.", position: "SEO Specialist", description: "AI-Powered Analytics has completely transformed our financial analysis. It's fast, accurate, and helps us make better data-driven decisions." },
        { img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", name: "Sarah M.", position: "Private Equity Investo", description: "The real-time reporting feature has saved us countless hours. Ripple Space provides the insights we need when we need them." },
        { img: "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", name: "Alice Ane", position: "Venture Capitalist", description: "Ripple Space has revolutionized our due diligence process. The AI tools are incredibly powerful, and the customizable workflows mean we can tailor the platform to suit each unique deal." },


    ]
    return (
        <div>
            <MainHeader className=" max-w-full ">Customer Testimonials</MainHeader>
            <TestimonialModel fakeApi={fakeApi} />
        </div>
    )
}

export default Testimonial
