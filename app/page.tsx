// src/app/page.tsx
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaGlobe, FaStar } from "react-icons/fa";
import Particles from "../components/Particles";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[100dvh] max-h-[100dvh] h-[100dvh] animated-gradient p-10 relative overflow-hidden">
      {/* Partículas de Luz */}
      <Particles />

      {/* Fondo Decorativo con Patrón Personalizado */}
      <div className="absolute inset-0 pattern-diagonal-lines opacity-20 pointer-events-none"></div>

      {/* Contenedor Principal */}
      <div className="bg-darkCard backdrop-blur-md bg-opacity-80 rounded-3xl shadow-esoteric p-8 flex flex-col items-center relative z-10 animate-float">
        {/* Logo */}
        <div className="rounded-full w-28 h-28 overflow-hidden border-[6px] shadow-xl hover:scale-105 transition border-white mb-4">
          <Image
            className="w-full h-full object-cover"
            src="/cuerpoyalma.jpg"
            alt="Cuerpo y Alma Logo"
            width={112}
            height={112}
            priority
          />
        </div>
        {/* Título */}
        <h1 className="text-white text-center text-3xl md:text-4xl font-cinzel font-semibold mb-6">
          Librería Cuerpo y Alma
        </h1>

        {/* Enlaces */}
        <div className="flex flex-col gap-4 w-full">
          {/* Instagram */}
          <a
            href="https://instagram.com/libreria_cuerpoyalma"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-gradient-to-br from-purple-500 to-rose-500 p-px text-white bg-opacity-60 hover:bg-opacity-80 rounded-lg transition duration-300 shadow-esoteric hover:shadow-lg"
          >
            <div className="flex items-center justify-center py-2 rounded-lg bg-black/80">
              <FaInstagram className="mr-3 text-xl" />
              Instagram
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/56963648365"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-purple-500 to-rose-500 p-px text-white bg-opacity-60 hover:bg-opacity-80 rounded-lg transition duration-300 shadow-esoteric hover:shadow-lg"
          >
            <div className="flex items-center justify-center py-2 rounded-lg bg-black/80">
              <FaWhatsapp className="mr-3 text-xl" />
              WhatsApp
            </div>
          </a>

          {/* Sitio Web */}
          <a
            href="https://www.cuerpoyalmalibreria.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-purple-500 to-rose-500 p-px text-white bg-opacity-60 hover:bg-opacity-80 rounded-lg transition duration-300 shadow-esoteric hover:shadow-lg"
          >
            <div className="flex items-center justify-center py-2 rounded-lg bg-black/80">
              <FaGlobe className="mr-3 text-xl" />
              Sitio Web
            </div>
          </a>
        </div>
      </div>

    </main>
  );
}
