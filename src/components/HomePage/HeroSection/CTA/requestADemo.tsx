import { Button } from '@/components/ui/button'
import { IoIosSend } from "react-icons/io";

function RequestADemo() {
    return (
        <Button variant={"outline"} className='bg-black text-white'>
            Request a Demo
            <IoIosSend className="ml-2 h-4 w-4" />

        </Button>
    )
}

export default RequestADemo
