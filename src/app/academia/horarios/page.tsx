import SubHeader from '@/components/SubHeader/AcademySubHeader';
import Schedule from '@/components/Schedule/Schedule';

export default function HorariosPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SubHeader />
      <div className="container mx-auto px-4 py-8">
        <Schedule />
      </div>
    </main>
  );
} 