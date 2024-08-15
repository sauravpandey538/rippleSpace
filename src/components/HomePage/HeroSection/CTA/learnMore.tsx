import { Button } from '@/components/ui/button'
import { PiReadCvLogoLight } from "react-icons/pi";

function LearnMore() {
    return (
        <Button variant={"outline"} className='bg-transparent text-white'>
            Learn More
            <PiReadCvLogoLight className="ml-2 h-4 w-4" />

        </Button>
    )
}

export default LearnMore
