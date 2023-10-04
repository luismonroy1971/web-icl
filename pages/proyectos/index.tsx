import React from 'react';
import { Layout } from '../../components/Layout';
import { SectionBanner } from '../../components/SectionBanner';
import { ProjectItem } from '../../components/ProjectItem';
export const projects = [
  {
    id: '1',
    image: '/images/proyectos/1.jpg',
    title: 'Sistema Proyecto Arbolado',
    content: () => (
      <div>
        <p>
          <strong>OBJETIVO:</strong> Georreferenciar y contabilizar las
          diferentes especies arbóreas ubicadas en Cercado de Lima; la creación
          de un sistema para la visualización todos los árboles
          Georreferenciados y sus principales características.
        </p>

        <p>
          El Proyecto de inventario de árboles se realizó por encargo de la
          Gerencia de Servicios a la Ciudad y Gestión Ambiental de la
          Municipalidad Metropolitana de Lima y en coordinación con el Instituto
          Catastral de Lima con la finalidad de georreferenciar y contabilizar
          la mayor cantidad de especies arbóreas del Cercado de Lima, a través
          de la creación de un sistema que genera una base de datos descriptiva
          y geográfica, con información en formato de capas las cuales señalan
          la ubicación de los árboles y una base de datos gráfica, donde existen
          capas de información que señalan la ubicación de los árboles.
        </p>

        <p>
          Este sistema virtual nos proporciona la localización de los árboles en
          el distrito, asimismo información para realizar una adecuada gestión a
          través del monitoreo y mantenimiento total de la zona en un periodo de
          tiempo aproximado de tres años para la detección de posibles cambios.
        </p>
      </div>
    ),
    link: 'https://sit.icl.gob.pe/proyecto_arbolado_urbano/',
  },
];

export default function Proyectos() {
  return (
    <Layout>
      <SectionBanner
        title="Proyectos"
        caption="Proyectos"
        description="Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades."
      />
      <div className="flex flex-wrap justify-start gap-8 px-8 py-12">
        {projects.map((project: any) => (
          <ProjectItem
            key={project.title}
            image={project.image}
            title={project.title}
            id={project.id}
          />
        ))}
      </div>
    </Layout>
  );
}
