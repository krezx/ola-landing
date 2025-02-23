'use client'

import React from 'react';
import AcademySubHeader from '@/components/SubHeader/AcademySubHeader';
import { GalaCard } from '@/components/GalaCard/GalaCard';

interface Gala {
    id: number;
    titulo: string;
    imagenUrl: string;
    galleryImages?: string[];
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
        ]
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
        ]
    }
];

export default function GalaOlaPage() {
    return (
        <main className="min-h-screen">
            <AcademySubHeader />
            <div className="container mx-auto px-4 py-8 mt-[200px]">
                <h1 className="text-4xl font-bold text-center mb-12">Gala Olá Dance</h1>
                
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-center mb-16">
                        Cada año, Olá Dance celebra el talento y dedicación de sus alumnos 
                        con una gala especial donde demuestran todo lo aprendido durante el año.
                    </p>

                    <div className="grid gap-8">
                        {galas.map((gala) => (
                            <div key={gala.id} className="mb-20">
                                <h2 className="text-3xl font-bold mb-4">{gala.titulo}</h2>
                                <GalaCard key={gala.id} gala={gala} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
} 