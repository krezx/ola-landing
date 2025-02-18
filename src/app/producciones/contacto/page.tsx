import SubHeader from '@/components/SubHeader/ProductionsSubHeader';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/producciones.ola',
    icon: FaInstagram,
    username: '@producciones.ola',
    color: 'hover:text-pink-500'
  },
  {
    name: 'Correo',
    url: 'mailto:ola.proartistica@gmail.com',
    icon: FaEnvelope,
    username: 'ola.proartistica@gmail.com',
    color: 'hover:text-blue-500'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/56991287436',
    icon: FaWhatsapp,
    username: '+569 9128 7436',
    color: 'hover:text-green-500'
  }
];

export default function ContactoProduccionesPage() {
  return (
    <main className="min-h-screen">
      <SubHeader />
      <div className="max-w-7xl mx-auto px-4 py-16 mt-[200px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contacta con nosotros</h1>
          <p className="text-gray-300 text-lg">
            ¿Interesado en nuestros servicios de producción? Contáctanos por cualquiera de estos medios
          </p>
        </div>

        <div className="grid gap-8 max-w-2xl mx-auto">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-6 p-6 bg-zinc-900/50 rounded-lg 
                  transition-all duration-300 hover:scale-105 ${social.color}`}
              >
                <Icon className="text-4xl" />
                <div className="text-left">
                  <h2 className="text-xl font-semibold">{social.name}</h2>
                  <p className="text-gray-300">{social.username}</p>
                </div>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300">
            Estamos listos para ayudarte con tu próximo proyecto audiovisual
          </p>
        </div>
      </div>
    </main>
  );
} 