import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ContactFormProps {
    onSubmit: (formData: { name: string; email: string; message: string }) => void;
}

function ContactForm({ onSubmit }: ContactFormProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='flex flex-col items-center p-6 max-w-screen-sm w-full   text-white'>
            <h2 className='text-2xl font-bold mb-4'>Contact Form</h2>
            <form onSubmit={handleSubmit} className='w-full space-y-4'>
                <div>
                    <label htmlFor='name' className='block text-sm font-medium mb-1 text-white'>
                        Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='border border-gray-300 rounded-lg w-full px-3 py-2  bg-transparent  focus:outline-none'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='email' className='block text-sm font-medium mb-1 text-white '>
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border border-gray-300 rounded-lg w-full px-3 py-2  bg-transparent  focus:outline-none'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='message' className='block text-sm font-medium mb-1'>
                        Message
                    </label>
                    <textarea
                        id='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='border border-gray-300 rounded-lg w-full px-3 py-2 bg-transparent  focus:outline-none'
                        rows={4}
                        required
                    />
                </div>
                <Button type='submit' variant={"outline"} className='text-black w-full'>
                    Send Message
                </Button>
            </form>
        </div>
    );
}

export default ContactForm;
