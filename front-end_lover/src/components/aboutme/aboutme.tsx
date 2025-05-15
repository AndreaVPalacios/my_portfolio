// components/HeroSection.tsx
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 bg-gradient-to-br from-black to-neutral-900">
      {/* Texto a la izquierda */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="font-[Uncage] text-4xl md:text-5xl lg:text-6xl text-gray-50 uppercase tracking-tight">
          Andrea Victoria Palacios Aguilera
        </h1>
        <h2 className="text-xl md:text-2xl text-purple-600 font-semibold">
          Front-End Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Me apasiona diseñar <span className="text-2xl">🎨</span> y entrenar{" "}
          <span className="text-2xl">💪</span>
        </p>

        {/* Botón opcional (puedes quitarlo) */}
        <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          Ver mis proyectos
        </button>
      </div>

      {/* Foto a la derecha (selfie) - Reemplaza con tu imagen */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
          <Image
            src="/imgs/Snapchat1.jpg" // Reemplaza con la ruta de tu imagen
            alt="Foto de Andrea Palacios"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
