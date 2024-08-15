import { MainHeader } from '@/reuse/mainHeader';
import ContactForm from './form';
import { SubHeader } from '@/reuse/subHeader';

import ContactDetails from './contactDetails';

function GetInTouch() {
    const handleFormSubmit = (formData: { name: string; email: string; message: string }) => {
        // Handle form submission, e.g., send data to an API
        console.log('Form submitted:', formData);
    };

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white'>
            <div className='flex flex-col justify-between items-center gap-5 p-20'>
                <MainHeader className='my-0'>
                    Get in Touch with Ripple Space
                </MainHeader>
                <SubHeader className='my-0'>
                    Have questions or need more information? We're here to help.
                </SubHeader>

            </div>
            <div className='flex justify-center items-start gap-5 md:gap-10 w-full flex-wrap'>
                <ContactForm onSubmit={handleFormSubmit} />
                <ContactDetails />
            </div>
            <div className="text-center text-gray-500 text-sm py-5">
                © 2024 Ripple Space. All rights reserved.
            </div>
        </div>
    );
}

export default GetInTouch;
