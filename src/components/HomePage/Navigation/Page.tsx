import Logo from './Logo'
import MiniNav from './MiniNav'
import SignIn from './SignIn'
import GetStarted from './GetStarted'

const Navigation = () => {
    return (
        <div className='flex justify-between items-center px-3 md:px-10 py-3 fixed top-0 left-0 w-full bg-gray-800 z-10 gap-3'>
            <Logo />
            <MiniNav /> {/* automatically hides for small devices*/}
            <div className='flex gap-3'>
                <SignIn />
                <GetStarted />
            </div>
        </div>
    )
}

export default Navigation
