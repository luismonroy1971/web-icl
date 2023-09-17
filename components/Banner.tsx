import React from 'react';
import { Button } from './Button';

export const Banner = () => {
  return (
    <div className="h-[calc(100vh-6rem)] w-full bg-lightBlue flex z-50">
      <div className="flex flex-col justify-center items-start px-4 gap-4 w-1/2">
        <h1 className="text-6xl text-primary font-bold font-acto">
          Dando forma a la Lima del mañana
        </h1>
        <p className="text-black text-xl text-left font-lato">
          Tu aliado en la gestión catastral y territorial, facilitando un
          desarrollo urbano sostenible y planificado.
        </p>
        <Button>Accede a nuestros servicios</Button>
      </div>
    </div>
  );
};
