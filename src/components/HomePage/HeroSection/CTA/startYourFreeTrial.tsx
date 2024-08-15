import { Button } from '@/components/ui/button'
import { FaArrowRight } from "react-icons/fa6";

function StartYourFreeTrial() {
    return (
        <Button variant={"outline"}>
            Start Your Free Trial
            <FaArrowRight className="ml-4 h-4 w-4" />

        </Button>
    )
}

export default StartYourFreeTrial;
