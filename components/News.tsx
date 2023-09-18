import React, { FC } from 'react';
import { Button } from './Button';

interface NewsProps {
  title: string;
  description: string;
  img: string;
}

export const News: FC<NewsProps> = ({ title, description, img }) => {
  const truncatedDescription = description.split(' ').slice(0, 45).join(' ');
  return (
    <div className="sm:flex gap-4 border-2 border-primary rounded-md">
      <img src={img} alt="news" className="h-60" />
      <div className="flex flex-col justify-between text-left py-2">
        <h3 className="font-acto text-primary text-xl">{title}</h3>
        <div>
          <span className="font-lato text-md">{truncatedDescription}</span>
          <span className='text-gray ml-1'>...</span>
        </div>
        <p className="text-primary text-xs mt-2">Hace 2 días</p>
        <div className="mt-2">
          <Button>Ir a la noticia</Button>
        </div>
      </div>
    </div>
  );
};
