import Image from 'next/image';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { SectionBanner } from '../../components/SectionBanner';

export const capacitaciones = [
  {
    id: 1,
    image: '/images/cursos/1.svg',
    title: 'Diseño y formulación de proyectos catastrales',
    content: () => (
      <div>
        <p className="font-lato">
          El objetivo de este curso es dar a conocer las herramientas
          metodológicas con ejemplos de casos prácticos de la formulación de
          proyectos en el sector público, en especial aquellos dirigidos a
          diseñar y formular proyectos catastrales.
        </p>
        <p>
          <strong className="font-acto text-primary">
            *Incluye Certificado
          </strong>
        </p>
      </div>
    ),
    link: 'https://wa.link/koj026',
  },
  {
    id: 2,
    image: '/images/cursos/2.svg',
    title: 'Levantamiento catastral en el marco de la Ley 28294',
    content: () => (
      <div>
        <p>
          Este curso tiene el objetivo de brindar las herramientas necesarias
          para que el participante adquiera los conocimientos del proceso de
          levantamiento catastral usando la normativa vigente y las metodologías
          adecuadas para su elaboración desde una visión eminentemente práctica.
        </p>
        <p>
          <strong className="font-acto text-primary">
            *Incluye Certificado
          </strong>
        </p>
      </div>
    ),
    link: 'https://wa.link/koj026',
  },
  {
    id: 3,
    image: '/images/cursos/3.svg',
    title: 'ArcGIS Pro Aplicado al Catastro',
    content: () => (
      <div>
        <p>
          Este curso tiene el objetivo de dar a conocer el entorno del software
          e identificar las herramientas necesarias para que el participante
          este en la capacidad de manejar el componente geométrico y la temática
          de la información catastral, a fin de generar nuevos elementos de
          información y establecer una simbología de acuerdo a una clasificación
          temática o espacial.
        </p>
        <p>
          <strong className="font-acto text-primary">
            *Incluye Certificado
          </strong>
        </p>
      </div>
    ),
    link: 'https://wa.link/koj026',
  },
];

export default function ICLCapacitaciones() {
  return (
    <Layout>
      <SectionBanner
        title="Capacitaciones"
        description="Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades."
        caption="ICL Capacitaciones"
      />
      <div className="px-8 py-12 flex flex-col gap-8">
        {capacitaciones?.map((capacitacion) => (
          <div
            key={capacitacion.id}
            className="border border-primary rounded-md p-4 flex"
          >
            <Image src={capacitacion.image} alt={capacitacion.title} width={200} height={200} />
            <div className="flex flex-col justify-center gap-2">
              <h2 className="font-acto text-2xl text-primary">
                {capacitacion.title}
              </h2>
              <capacitacion.content />
              <div className="w-80">
                <Button
                  onClick={() => window.open(capacitacion.link, '_blank')}
                >Inscribirme</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
