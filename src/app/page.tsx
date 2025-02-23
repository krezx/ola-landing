import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pt-[144px]">
      <div className="relative h-[500px] w-full mb-12">
        <Image
          src="/images/inicio.jpg"
          alt="Imagen de inicio"
          fill
          className="object-cover rounded-lg"
          priority
          quality={100}
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Visítanos</h1>
        
        <p className="text-xl text-gray-300 text-center mb-8">
          Encuéntranos en el corazón de La Serena, donde el arte y la danza cobran vida.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Olá Producciones Artísticas</h2>
              <p className="text-gray-300">Benavente 1160</p>
              <p className="text-gray-300">La Serena, Chile</p>
            </div>

            <a 
              href="https://www.google.com/maps/place/Ol%C3%A1+Producciones+Artisticas/@-29.9120627,-71.2463657,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <span>Ver en Google Maps</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>

          <div className="relative h-[400px] w-full rounded-lg overflow-hidden order-1 md:order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.7793893560087!2d-71.2463657!3d-29.9120627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691cb5d939ad791%3A0xde2723f036e57f3e!2sOl%C3%A1%20Producciones%20Artisticas!5e0!3m2!1ses!2scl!4v1708487623682!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
