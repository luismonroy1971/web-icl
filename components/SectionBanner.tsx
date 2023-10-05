import React, { FC, useEffect, useState } from 'react';
import { Button } from './Button';
import Image from 'next/image';

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
    <div>
      <div
        className={`sm:h-fit py-12 w-full bg-gradient-to-r from-primary from-5% via-[#0066AB] via-30% to-transparent flex z-5 relative ${
          loaded ? 'opacity-100' : 'opacity-0'
        } duration-2000 ease-in-out`}
      >
        <div className="flex flex-col justify-center items-start px-20 gap-4 sm:w-1/2">
          <p
            className={`text-xl text-white font-acto font-extralight -mb-4 ${
              loaded ? 'opacity-100' : 'opacity-0'
            } duration-2000 ease-in-out`}
          >
            {caption}
          </p>
          <h1 className="text-6xl text-white font-bold font-acto">{title}</h1>
          <p className="text-white text-xl text-left font-lato">
            {description}
          </p>
          {buttonText && (
            <div className="w-64">
              <Button>Accede a nuestros servicios</Button>
            </div>
          )}
        </div>
        {image && (
          <div className="absolute -right-12 bottom-8 h-[320px] max-w-[460px] w-full">
            <Image src={image} alt={title} layout="fill" />
          </div>
        )}
      </div>

      {titlePage && (
        <div className="mx-8 py-12">
          <h3 className="font-acto text-4xl text-primary">
            {titlePage || title}
          </h3>
        </div>
      )}
    </div>
  );
};
