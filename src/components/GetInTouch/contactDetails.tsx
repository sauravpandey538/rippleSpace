import { IoLocationSharp } from 'react-icons/io5'; // Import your icon libraries
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa6";
import { Button } from '../ui/button';
import { Description } from '@/reuse/description';

function ContactDetails() {
    return (
        <div className='flex flex-col gap-5 p-10'>
            <div className=' flex flex-col justify-between items-start'>
                <Description className='text-left'>Chat with us</Description>
                <p className=' text-sm text-muted-foreground '>Speak to our friendly team via call.</p>

                <Button className='bg-transparent hover:bg-transparent'>
                    <FaLinkedin className="mr-2 h-4 w-4" /> Start a live chat
                </Button>
                <Button className='bg-transparent hover:bg-transparent'>
                    <MdEmail className="mr-2 h-4 w-4" /> Shoot a email
                </Button>
            </div>


            <div>
                <Description className='text-left'>Call us</Description>
                <p className=' text-sm text-muted-foreground '>Call out team Mon-Fri from 8am to 5pm.</p>

                <Button className='bg-transparent hover:bg-transparent'>
                    <FaPhoneAlt className="mr-2 h-4 w-4" /> 1-800-555-1234
                </Button>
            </div>

            <div>
                <Description className='text-left'>Visit us</Description>
                <p className=' text-sm text-muted-foreground '>Chat to us with the CEO.</p>
                <Button className='bg-transparent hover:bg-transparent text-left whitespace-normal'>
                    <IoLocationSharp className="mr-2 h-4 w-4" />
                    <span className='h-fit'>
                        1234 Market St, Suite 567, San Francisco, CA 94103
                    </span>
                </Button>
            </div>
        </div>
    );
}




export default ContactDetails;
