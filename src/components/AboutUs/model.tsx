import { SubHeader } from '@/reuse/subHeader';
import { Description } from '@/reuse/description';

interface StorySection {
    title: string;
    description: string | string[];
}

interface StoryModelProps {
    sections: StorySection[];
}

function Model({ sections }: StoryModelProps) {
    return (
        <div className='flex justify-center  items-stretch w-full bg-transparent gap-5 flex-wrap'>
            {sections.map((section, index) => (
                <div key={index} className='mb-6 flex-col max-w-96 flex  items-center p-5'>
                    <div className="flex justify-center items-center h-64 w-80 bg-gray-100 flex-wrap mb-4">
                        <img
                            src='https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg'
                            alt={section.title}
                            className='max-h-full max-w-full'
                        />
                    </div>
                    <SubHeader className='my-2 text-left'>{section.title}</SubHeader>
                    <div className='text-left'>
                        {Array.isArray(section.description) ? (
                            section.description.map((desc, index) => (
                                <Description key={index} className='my-1 text-left'>
                                    {index + 1}.{" "}{desc}
                                </Description>
                            ))
                        ) : (
                            <Description className='text-left'>{section.description}</Description>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Model;
