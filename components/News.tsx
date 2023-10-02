import React, { FC } from 'react';
import { Button } from './Button';
import { NewsType } from '../utils/types';

export const News: FC<NewsType> = ({ titulo_noticia, descripcion_noticia, url_imagen_portada }) => {
  const truncatedDescription = descripcion_noticia.split(' ').slice(0, 45).join(' ');
  return (
    <div className="sm:flex gap-4 border-2 border-primary rounded-md">
      <img src={url_imagen_portada} alt="news" className="h-60 rounded-t-sm sm:rounded-tr-none" />
      <div className="flex flex-col justify-between sm:text-left text-center py-2 mr-2">
        <h3 className="font-acto text-primary text-xl">{titulo_noticia}</h3>
        <div>
          <span className="font-lato text-md">{truncatedDescription}</span>
          <span className='text-gray ml-1'>... </span>
        </div>
        <p className="text-primary text-xs mt-2">Hace 2 días</p>
        <div className="mt-2 w-48 mx-auto sm:mx-0">
          <Button>Ir a la noticia</Button>
        </div>
      </div>
    </div>
  );
};
