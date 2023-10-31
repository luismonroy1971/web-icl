import React from 'react';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { SectionBanner } from '../../components/SectionBanner';
import Image from 'next/image';
import { useGetProyectoQuery } from '../../redux/reduxQuery/proyectos';
import { useRouter } from 'next/router';

export default function Proyecto() {
  const router = useRouter();
  const { id } = router.query;
  const { data: project } = useGetProyectoQuery(id);

  if (!project) {
    return <div>Loading...</div>;
  }

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
          className="rounded-md"
        />

        <div
          className="font-lato my-4 leading-relaxed text-md"
          dangerouslySetInnerHTML={{ __html: project.content }}
        ></div>

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
