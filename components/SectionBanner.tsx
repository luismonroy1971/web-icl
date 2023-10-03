import React, { FC, useEffect, useState } from 'react';
import { Button } from './Button';

interface Props {
  title: string;
  description: string;
  image?: string;
  buttonText?: string;
  caption: string;
  titlePage?: string;
}

export const SectionBanner: FC<Props> = ({
  title,
  description,
  image,
  buttonText,
  caption,
  titlePage,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div
        className={`sm:h-[calc(100vh-20rem)] w-full bg-lightBlue flex z-50 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } duration-2000 ease-in-out`}
      >
        <div className="flex flex-col justify-center items-start px-4 gap-4 sm:w-1/2">
          <p
            className={`text-xl text-primary font-acto font-extralight -mb-4 ${
              loaded ? 'opacity-100' : 'opacity-0'
            } duration-2000 ease-in-out`}
          >
            {caption}
          </p>
          <h1 className="text-6xl text-primary font-bold font-acto">{title}</h1>
          <p className="text-black text-xl text-left font-lato">
            {description}
          </p>
          {buttonText && (
            <div className="w-64">
              <Button>Accede a nuestros servicios</Button>
            </div>
          )}
        </div>
      </div>
      <div className="mx-8 py-12">
        <h3 className="font-acto text-4xl text-primary">{titlePage || title}</h3>
      </div>
    </>
  );
};
