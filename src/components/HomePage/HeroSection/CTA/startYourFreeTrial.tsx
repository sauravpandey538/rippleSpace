import { Button } from '@/components/ui/button'
import { FaArrowRight } from "react-icons/fa6";

function StartYourFreeTrial() {
    return (
        // <Button variant={"outline"}>
        //     Start Your Free Trial
        //     <FaArrowRight className="ml-4 h-4 w-4" />

        // </Button>
        <Button className="flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-green-400 rounded-lg hover:from-blue-500 hover:to-green-300 transition-all duration-300 ease-in-out border-0 shadow-lg">
            Start Your Free Trial
            <FaArrowRight className="ml-4 h-4 w-4" />
        </Button>

    )
}

export default StartYourFreeTrial;
