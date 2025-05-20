// components/HeroSection.tsx
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 bg-gradient-to-br bg-neutral-300">
      {/* Texto a la izquierda */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="drop-shadow-lg font-[Uncage] text-3xl md:text-4xl lg:text-5xl text-gray-50 uppercase tracking-tight">
          Andrea Victoria Palacios Aguilera
        </h1>
        <h2 className="text-xl md:text-2xl text-red-900 font-bold ">
          Front-End Developer
        </h2>
        <p className="text-lg md:text-xl text-red-800 tracking-tight">
          Me apasiona diseñar <span className="text-2xl">🎨</span> y entrenar{" "}
          <span className="text-2xl">💪</span>
        </p>

        {/* Botón opcional (puedes quitarlo) */}
        <button className="mt-6 px-6 py-3 bg-red-800 text-white rounded-lg hover:bg-red-900 hover:cursor-pointer transition">
          Descargar CV
        </button>
      </div>

      {/* Foto a la derecha (selfie) - Reemplaza con tu imagen */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden hover:border-8 hover:border-red-800 shadow-xl">
          <Image
            src="/imgs/Snapchat1.jpg"
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
