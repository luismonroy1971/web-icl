import React, { FC } from 'react';
import { Button } from './Button';

interface ProjectItemProps {
  id: number;
  image: string;
  title: string;
}

export const ProjectItem: FC<ProjectItemProps> = ({ image, title, id }) => {
  return (
    <div className="flex flex-col items-start justify-center h-full p-4  w-4/12">
      <img src={image} alt={title} className="w-full h-full" />
      <h3 className="my-4 text-2xl font-semibold text-left font-acto text-primary">
        {title}
      </h3>
      <div className="w-40">
        <Button
          onClick={() => {
            window.open(`/proyectos/${id}`, '_blank');
          }}
        >
          Ver más
        </Button>
      </div>
    </div>
  );
};
