import Image from 'next/image';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CourseCard = ({ title, description, imageUrl }: CourseCardProps) => {
  return (
    <div className="bg-zinc-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CourseCard; 