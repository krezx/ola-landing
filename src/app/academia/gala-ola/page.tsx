import React from 'react';
import AcademySubHeader from '@/components/SubHeader/AcademySubHeader';
import Image from 'next/image';

interface Gala {
    id: number;
    titulo: string;
    fecha: string;
    descripcion: string;
    imagenUrl: string;
    detalles?: string[];
}

const galas: Gala[] = [
    {
        id: 1,
        titulo: "Gala Anual 2024",
        fecha: "Diciembre 2024",
        descripcion: "Celebración de fin de año con presentaciones de todos nuestros alumnos",
        imagenUrl: "/images/galas/gala-2024.jpg",
        detalles: [
            "Presentación de todas las disciplinas",
            "Más de 100 alumnos en escena",
            "Teatro Municipal de Santiago",
            "Espectáculo de 2 horas de duración"
        ]
    },
    {
        id: 2,
        titulo: "Gala Anual 2023",
        fecha: "Diciembre 2023",
        descripcion: "Celebración de fin de año con presentaciones de todos nuestros alumnos",
        imagenUrl: "/images/galas/gala-2023.jpg",
        detalles: [
            "Presentación de todas las disciplinas",
            "Más de 100 alumnos en escena",
            "Teatro Municipal de Santiago",
            "Espectáculo de 2 horas de duración"
        ]
    },
    {
        id: 3,
        titulo: "Gala Anual 2022",
        fecha: "Diciembre 2022",
        descripcion: "Una noche mágica donde nuestros alumnos demostraron su talento y dedicación",
        imagenUrl: "/images/galas/gala-2022.jpg",
        detalles: [
            "Presentaciones especiales de profesores",
            "Coreografías originales",
            "Gran participación de alumnos",
            "Momento memorable para toda la comunidad"
        ]
    }
];

export default function GalaOlaPage() {
    return (
        <main className="min-h-screen">
            <AcademySubHeader />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-12">Gala Olá Dance</h1>
                
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-center mb-16 text-gray-700">
                        Cada año, Olá Dance celebra el talento y dedicación de sus alumnos 
                        con una gala especial donde demuestran todo lo aprendido durante el año.
                    </p>

                    {galas.map((gala) => (
                        <section key={gala.id} className="mb-20">
                            <div className="relative h-[400px] w-full mb-8">
                                <Image
                                    src={gala.imagenUrl}
                                    alt={gala.titulo}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold">{gala.titulo}</h2>
                                <p className="text-xl text-gray-600">{gala.fecha}</p>
                                <p className="text-lg">{gala.descripcion}</p>
                                
                                {gala.detalles && (
                                    <ul className="mt-6 space-y-2">
                                        {gala.detalles.map((detalle, index) => (
                                            <li key={index} className="flex items-center">
                                                <span className="mr-2">•</span>
                                                {detalle}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
} 