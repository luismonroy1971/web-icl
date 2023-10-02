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
    <div className="flex flex-col border-2 border-primary rounded-md sm:max-w-[260px] p-2">
      <img src={img} alt={title} className="w-full sm:h-44" />
      <h3 className="font-acto text-primary sm:text-[1.65vw] text-xl 2xl:text-[1.2vw] mt-4 text-left sm:h-[72px] leading-tight">
        {title}
      </h3>
      <p className="font-lato text-left sm:h-32 text-lg sm:text-[1.2vw]">{description}</p>
      <Button>{buttonText}</Button>
    </div>
  );
};
