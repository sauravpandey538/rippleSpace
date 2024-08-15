import { SubHeader } from '@/reuse/subHeader';
import { Description } from '@/reuse/description';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Feature {
    name: string;
    position: string;
    description: string;
}

interface CardModelProps {
    fakeApi: Feature[];
}

function TestimonialModel({ fakeApi }: CardModelProps) {
    return (
        <div className='flex justify-center items-stretch w-full bg-transparent flex-wrap gap-6'>
            {fakeApi?.map((feature, index) => (
                <div key={index} className='bg-gray-800 shadow-lg rounded-lg p-6 max-w-sm w-full'>
                    <div className='flex gap-4 justify-start items-center'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>PP</AvatarFallback>
                        </Avatar>
                        <div>
                            <SubHeader className='my-0 py-0 text-left text-xl font-semibold'>{feature.name}</SubHeader>
                            <Description className='text-left text-sm '>{feature.position}</Description>
                        </div>
                    </div>
                    <Description className='text-left mt-4 '>{feature.description}</Description>
                </div>
            ))}
        </div>
    );
}

export default TestimonialModel;
