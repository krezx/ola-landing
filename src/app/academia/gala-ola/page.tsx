'use client'

import React from 'react';
import AcademySubHeader from '@/components/SubHeader/AcademySubHeader';
import { GalaCard } from '@/components/GalaCard/GalaCard';

interface Gala {
    id: number;
    titulo: string;
    imagenUrl: string;
    galleryImages?: string[];
    imagePosition?: string;
}

const galas: Gala[] = [
    {
        id: 1,
        titulo: "Gala Anual 2024",
        imagenUrl: "/images/galas/2024/main.jpg",
        galleryImages: [
            "/images/galas/2024/1.jpg",
            "/images/galas/2024/2.jpg",
            "/images/galas/2024/3.jpg",
            "/images/galas/2024/4.jpg",
            "/images/galas/2024/5.jpg",
        ]
    },
    {
        id: 2,
        titulo: "Gala Anual 2023",
        imagenUrl: "/images/galas/2023/main.jpg",
        galleryImages: [
            "/images/galas/2023/1.jpg",
            "/images/galas/2023/2.jpg",
            "/images/galas/2023/3.jpg",
            "/images/galas/2023/4.jpg",
            "/images/galas/2023/5.jpg",
        ],
        imagePosition: '50% 85%'
    },
    {
        id: 3,
        titulo: "Gala Anual 2022",
        imagenUrl: "/images/galas/2022/main.jpg",
        galleryImages: [
            "/images/galas/2022/1.jpg",
            "/images/galas/2022/2.jpg",
            "/images/galas/2022/3.jpg",
            "/images/galas/2022/4.jpg",
        ]
    },
    {
        id: 4,
        titulo: "Gala Anual 2021",
        imagenUrl: "/images/galas/2021/main.jpg",
        galleryImages: [
            "/images/galas/2021/1.jpg",
            "/images/galas/2021/2.jpg",
        ],
        imagePosition: '50% 60%'
    }
];

export default function GalaOlaPage() {
    return (
        <main className="min-h-screen bg-black">
            <AcademySubHeader />
            <div className="container mx-auto px-4 py-8 sm:mt-[144px] lg:mt-[200px] mt-[200px]">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12">
                    Gala Olá Dance
                </h1>
                
                <div className="max-w-7xl mx-auto">
                    <p className="text-sm sm:text-base lg:text-lg text-center text-gray-300 mb-8 sm:mb-12 lg:mb-16">
                        Cada año, la Academia Olá celebra el talento y dedicación de sus alumnos 
                        con una gala especial donde demuestran todo lo aprendido durante el año.
                    </p>

                    <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                        {galas.map((gala) => (
                            <div key={gala.id}>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6">
                                    {gala.titulo}
                                </h2>
                                <GalaCard gala={gala} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
} 