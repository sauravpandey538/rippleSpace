import { SubHeader } from '@/reuse/subHeader';
import { Description } from '@/reuse/description';

interface Feature {
  title: string;
  description: string;
}

interface CardModelProps {
  fakeApi: Feature[];
}

function CardModel({ fakeApi }: CardModelProps) {
  return (
    <div className='flex justify-center items-start  w-full bg-transparent  flex-wrap gap-5'>
      {fakeApi?.map((feature, index) => (
        <div key={index} className='mb-6 flex-col max-w-96  flex justify-center items-center p-5'>
          <div className="flex justify-center items-center h-64 w-80 bg-gray-100 flex-wrap mb-4">
            <img
              src='https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg'
              alt={feature.title}
              className='max-h-full max-w-full'
            />
          </div>
          <SubHeader className='my-2 text-left'>{feature.title}</SubHeader>
          <Description className='text-left'>{feature.description}</Description>
        </div>
      ))}
    </div>
  );
}

export default CardModel;
