import { MainHeader } from "@/reuse/mainHeader"
import CardModel from "./cardModel"
import Analytics from "/Analytics.svg"
import Commnication from "/Communication.svg"
import Monitering from "/Monitering.svg"
import Reporting from "/Reporting.svg"
import WorkFlow from "/WorkFlow.svg"

function Features() {
    const fakeApi = [
        { title: "AI-Powered Analytics", description: "Harness the power of AI to analyze financials, legal documents, market trends, and operational data.", img: Analytics },
        { title: "Customizable Workflows", description: "Tailor your due diligence process with our flexible workflow builder, designed to adapt to your specific needs.", img: WorkFlow },
        { title: "Real-Time Reporting", description: "Get dynamic, real-time reports with intuitive visualizations that highlight key findings.", img: Reporting },
        { title: "Integrated Communication", description: "Collaborate seamlessly with team members and external partners through our in-platform messaging and video conferencing tools.", img: Commnication },
        { title: "Continuous Monitoring", description: "Stay ahead with continuous monitoring and instant alerts that keep you informed of any significant changes.", img: Monitering },

    ]
    return (
        <div className="py-20">
            <MainHeader className=" max-w-full ">What We Provide ?</MainHeader>
            <CardModel fakeApi={fakeApi} />
        </div>
    )
}

export default Features
