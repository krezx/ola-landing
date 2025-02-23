import React from 'react';;
import Header from '@/components/Header/Header';
import SubHeader from '@/components/SubHeader/ProductionsSubHeader';

const StaffPage = () => {

  return (
    <>
      <Header />
      <SubHeader/>
      <main className="container mx-auto px-4 py-8 mt-[200px]">
        <h1 className="text-4xl font-bold mb-8 text-center">Staff de productoras</h1>
      </main>
    </>
  );
};

export default StaffPage; 