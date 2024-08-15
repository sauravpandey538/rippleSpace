import { Button } from '@/components/ui/button'
import { IoIosGitCompare } from "react-icons/io";

function ComparePlans() {
    return (
        <Button className=" bg-gray-800 text-white hover:bg-gray-700 hover:text-white" variant={'outline'}>
            Compare Plans
            <IoIosGitCompare className="ml-4 h-4 w-4" />

        </Button>
    )
}

export default ComparePlans;
