import { LuFileStack } from "react-icons/lu";
import { VscThreeBars } from "react-icons/vsc";

function Logo() {
    return (
        <div className="flex justify-center items-center min-w-10 h-10  bg-white rounded-full ">
            <LuFileStack className="text-2xl hidden md:block" />
            <VscThreeBars className="text-2xl block md:hidden" />

        </div>
    );
}

export default Logo;
