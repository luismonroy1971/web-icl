import React, { FC } from 'react';
import { projects } from '.';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { SectionBanner } from '../../components/SectionBanner';

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
  console.log(project);
  return (
    <Layout>
      <SectionBanner
        title="Proyectos"
        description="Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades."
        caption="Proyectos"
      />
      <div className="flex flex-col items-start justify-center h-full p-4 ">
        <h3 className="my-4 text-4xl font-semibold text-left font-acto text-primary">
          {project.title}
        </h3>
        <img
          src={project.image}
          alt={project.title}
          className="sm:w-5/12 h-full"
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
