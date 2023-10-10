import React, { FC } from 'react';
import { projects } from '.';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { SectionBanner } from '../../components/SectionBanner';
import Image from 'next/image';

interface ProyectoProps {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function Proyecto({ proyecto }: any) {
  const project = projects.find((project) => project.id === proyecto.id) || {
    image: '',
    title: '',
    content: () => '',
    link: '',
  };
  return (
    <Layout>
      <SectionBanner
        title="Proyectos"
        description="Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades."
        caption="Proyectos"
      />
      <div className="flex flex-col items-start justify-center h-full sm:px-20 py-12 px-8">
        <h3 className="text-4xl font-semibold text-left font-acto text-primary mb-4">
          {project.title}
        </h3>
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={500}
        />

        <div className="my-4 text-xl  text-left font-lato ">
          {project.content()}
        </div>

        <div className="w-40">
          <Button
            onClick={() => {
              window.open(project.link, '_blank');
            }}
          >
            Ver más
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      },
      {
        params: {
          id: '2',
        },
      },
      {
        params: {
          id: '3',
        },
      },
      {
        params: {
          id: '4',
        },
      },
      {
        params: {
          id: '5',
        },
      },
      {
        params: {
          id: '6',
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      proyecto: {
        id: params.id,
      },
    },
  };
}
