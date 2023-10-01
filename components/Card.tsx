import React, { FC } from 'react';
import { Button } from './Button';

interface CardProps {
  title: string;
  img: string;
  description: string;
  buttonText: string;
}

export const Card: FC<CardProps> = ({
  title,
  img,
  description,
  buttonText,
}) => {
  return (
    <div className="flex flex-col border-2 border-primary rounded-md max-w-[260px] p-2">
      <img src={img} alt={title} className="w-full h-44" />
      <h3 className="font-acto text-primary text-[1.65vw] mt-4 text-left h-[72px] leading-tight">
        {title}
      </h3>
      <p className="font-lato my- text-left h-32">{description}</p>
      <Button>{buttonText}</Button>
    </div>
  );
};
