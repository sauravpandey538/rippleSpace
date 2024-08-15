import MainTitle from "./mainTitle";
import SubTitle from "./subTitle";
import StartYourFreeTrial from "./CTA/startYourFreeTrial";
import LearnMore from "./CTA/learnMore";

function HeroSection() {
    return (
        <div className="flex flex-col justify-center items-center w-full py-40">
            <MainTitle />
            <SubTitle />
            <div className="flex justify-center gap-6 my-10 flex-wrap">
                <StartYourFreeTrial />
                <LearnMore />
            </div>
            {/* <HeroSectionImg /> */}
        </div>
    )
}

export default HeroSection;
