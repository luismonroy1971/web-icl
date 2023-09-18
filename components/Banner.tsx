import React, { useEffect, useState } from 'react';
import { Button } from './Button';

export const Banner = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={`sm:h-[calc(100vh-6rem)] w-full bg-lightBlue flex z-50 ${
        loaded ? 'opacity-100' : 'opacity-0'
      } duration-2000 ease-in-out`}
    >
      <div className="flex flex-col justify-center items-start px-4 gap-4 sm:w-1/2">
        <h1 className="text-6xl text-primary font-bold font-acto">
          Dando forma a la Lima del mañana
        </h1>
        <p className="text-black text-xl text-left font-lato">
          Tu aliado en la gestión catastral y territorial, facilitando un
          desarrollo urbano sostenible y planificado.
        </p>
        <div className='w-64'>
          <Button>Accede a nuestros servicios</Button>
        </div>
      </div>
    </div>
  );
};
