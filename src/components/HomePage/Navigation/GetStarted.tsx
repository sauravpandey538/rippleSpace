import { Button } from '@/components/ui/button'
import { LuFileStack } from "react-icons/lu";

function GetStarted() {
    return (
        <Button variant={"outline"}>
            <LuFileStack className="mr-2 h-4 w-4" />
            Get Started
        </Button>
    )
}

export default GetStarted
