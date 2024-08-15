import { MainHeader } from "@/reuse/mainHeader";
import Model from "./model";
import { SubHeader } from "@/reuse/subHeader";

export const storyData = {
    sections: [
        {
            title: "Our Mission",
            description: "At Ripple Space, our mission is to empower investment professionals with the tools they need to make smarter, faster decisions. We believe that due diligence should be thorough, efficient, and insightful, and our platform is designed to deliver just that. By combining advanced AI with a user-friendly interface, we're transforming the way due diligence is conducted across industries."
        },
        {
            title: "Our Story",
            description: "Ripple Space was founded by a team of seasoned investors and technologists who recognized the challenges of traditional due diligence processes. With a deep understanding of the investment landscape and a passion for innovation, we set out to build a platform that simplifies and enhances due diligence for everyone involved."
        },
        {
            title: "Our Values",
            description: [
                "Innovation: We are committed to continuously improving our platform with the latest technologies.",
                "Transparency: We believe in providing clear, actionable insights that help our users make informed decisions.",
                "Collaboration: We foster a collaborative environment both within our team and with our users to ensure that Ripple Space meets the evolving needs of the investment community."
            ]
        }
    ]
};

function AboutUs() {
    return (
        <div className="bg-gray-800 py-20 flex flex-col gap-5">
            <MainHeader className="mx-auto my-0">About Us</MainHeader>
            <SubHeader className="mx-auto my-0">About Ripple Space</SubHeader>
            <Model sections={storyData.sections} />
        </div>
    )
}

export default AboutUs;
