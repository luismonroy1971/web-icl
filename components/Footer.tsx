import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <div className="flex flex-col  bg-primary p-10">
      <div className="flex justify-between  gap-4">
        <div className="flex items-center h-28">
          <img src="/images/logo.svg" alt="logo" className="h-20" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-acto text-xl">Enlaces Rápidos</h2>
          <div className="flex flex-col gap-2">
            <Link href="/sobre-nosotros">
              <span className="text-white">¿Quiénes somos?</span>
            </Link>
            <Link href="/servicios">
              <span className="text-white">Servicios</span>
            </Link>
            <Link href="/noticias">
              <span className="text-white">Noticias</span>
            </Link>
            <Link href="/preguntas-frecuentes">
              <span className="text-white">Preguntas Frecuentes</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-acto text-xl">Contacto</h2>
          <div className="flex flex-col gap-2">
            <span className="text-white">Teléfono: 01 632 1300</span>
            <span className="text-white">
              Correo:
              <a href="mailto:" className="text-white">
                Correo
              </a>
            </span>
            <span className="text-white">
              Dirección: Av. Nicolás de Piérola 308, Cercado de Lima 15001
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-acto text-xl">Redes Sociales</h2>
          <div className="flex gap-2">
            <Link href="/">
              <img src="/images/facebook.svg" alt="facebook" className="h-8" />
            </Link>
            <Link href="/">
              <img
                src="/images/instagram.svg"
                alt="instagram"
                className="h-8"
              />
            </Link>
            <Link href="/">
              <img src="/images/whatsapp.svg" alt="whatsapp" className="h-8" />
            </Link>
            <Link href="/">
              <img src="/images/youtube.svg" alt="youtube" className="h-8" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
