import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, SetStateAction, useEffect, useState } from 'react';

interface MegaMenuProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MegaMenu: FC<MegaMenuProps> = ({ openMenu, setOpenMenu }) => {
  const [firstChildren, setFirstChildren] = useState<any>([]);
  const [secondChildren, setSecondChildren] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [classNameTransition, setClassNameTransition] = useState<any>('');
  const router = useRouter();
  const categories = [
    {
      id: 1,
      name: 'Servicios',
      slug: 'Servicios',
      children: [
        {
          id: 2,
          name: 'TUPA',
          slug: 'tupa',
          description:
            'Resumen del Texto Único de Procedimiento Administrativo',
          children: [],
          link: '/servicios/tupa',
        },
        {
          id: 7,
          name: 'TUSNE',
          slug: 'tusne',
          description: 'Resumen del Texto Único de Servicios No Exclusivos',
          children: [],
          link: '/servicios/tusne',
        },
      ],
    },
    {
      id: 9,
      name: 'Recursos',
      slug: 'Recursos',
      children: [
        {
          id: 10,
          name: 'Conoce Lima',
          slug: 'conoce-lima',
          children: [],
          description:
            'Explora Lima virtualmente, desde el Parque de la Reserva hasta monumentos históricos, a través de un mapa 3D interactivo que destaca su riqueza arquitectónica y cultural.',
        },
        {
          id: 11,
          name: 'Consulta Catastral en Línea',
          slug: 'consulta-catastral-en-linea',
          children: [],
          description:
            'Accede rápidamente a información catastral detallada y actualizada, facilitando la gestión y planificación urbana desde la comodidad de tu hogar u oficina.',
        },
        {
          id: 12,
          name: 'Portafolio de Aplicaciones GIS',
          slug: 'portafolio-de-aplicaciones-gis',
          children: [],
          description:
            'Accede rápidamente a información catastral detallada y actualizada, facilitando la gestión y planificación urbana desde la comodidad de tu hogar u oficina.',
        },
        {
          id: 14,
          name: 'Sistema de Información Territorial',
          slug: 'sistema-de-informacion-territorial',
          children: [],
          description:
            'Acceso integral a datos territoriales de Lima, proporcionando información valiosa para proyectos de desarrollo urbano y planificación estratégica.',
        },
        {
          id: 15,
          name: 'Mesa de Partes Virtual',
          slug: 'mesa-de-partes-virtual',
          children: [],
          description:
            'Realiza trámites administrativos en línea, enviando documentos y solicitudes de manera eficiente y segura desde cualquier lugar.',
        },
        {
          id: 16,
          name: 'Otros recursos y herramientas',
          slug: 'otros-recursos-y-herramientas',
          children: [],
        },
      ],
    },
    {
      id: 13,
      name: 'Sobre Nosotros',
      slug: 'about-us',
      children: [
        {
          id: 17,
          name: '¿Quiénes somos?',
          slug: 'quienes-somos',
          description:
            'Conozca la misión, visión y valores que guían nuestras operaciones en el Instituto Catastral de Lima.',
          children: [],
          link: '/sobre-nosotros/quienes-somos',
        },
        {
          id: 18,
          name: 'Objetivos',
          slug: 'objetivos',
          description:
            'Descubra los objetivos estratégicos que guían nuestras acciones y decisiones hacia el cumplimiento de nuestra misión en el Instituto Catastral de Lima.',
          children: [],
          link: '/sobre-nosotros/objetivos',
        },
        {
          id: 19,
          name: 'Funcionarios',
          slug: 'funcionarios',
          description:
            'Descubra el equipo de profesionales dedicados que trabajan para servir a la comunidad en nuestra institución.',
          children: [],
          link: '/sobre-nosotros/funcionarios',
        },
        {
          id: 20,
          name: 'Normas de la Institución',
          slug: 'normas-la-institucion',
          description:
            'Explore los instrumentos de gestión y planes que guían nuestras operaciones, junto con las políticas que aseguran la transparencia y la eficiencia en el Instituto Catastral de Lima.',
          children: [],
          link: '/sobre-nosotros/normas-de-la-institucion',
        },
      ],
    },
    {
      id: 21,
      name: 'Marco Legal',
      slug: 'marco-legal',
      children: [
        {
          id: 22,
          name: 'Ley Nº 27972 – Ley Orgánica de Municipalidades',
          slug: 'ley-organica-de-municipalidades',
          description:
            'Explore los instrumentos de gestión y planes que guían nuestras operaciones, junto con las políticas que aseguran la transparencia y la eficiencia en el Instituto Catastral de Lima.',
          children: [],
          link: '/marco-legal/ley-organica-de-municipalidades',
        },
        {
          id: 23,
          name: 'Ley Tributación Municipal',
          slug: 'ley-tributacion-municipal',
          description:
            'Explore los instrumentos de gestión y planes que guían nuestras operaciones, junto con las políticas que aseguran la transparencia y la eficiencia en el Instituto Catastral de Lima.',
          children: [],
          link: '/marco-legal/ley-tributacion-municipal',
        },
        {
          id: 24,
          name: 'Ley Nº 27867 – Ley Orgánica de Gobiernos Regionales',
          slug: 'ley-organica-de-gobiernos-regionales',
          description:
            'Explore los instrumentos de gestión y planes que guían nuestras operaciones, junto con las políticas que aseguran la transparencia y la eficiencia en el Instituto Catastral de Lima.',
          children: [],
          link: '/marco-legal/ley-organica-de-gobiernos-regionales',
        },
        {
          id: 25,
          name: 'Reglamento de Acondicionamiento Territorial',
          slug: 'reglamento-de-acondicionamiento-territorial',
          description:
            'Explore los instrumentos de gestión y planes que guían nuestras operaciones, junto con las políticas que aseguran la transparencia y la eficiencia en el Instituto Catastral de Lima.',
          children: [],
          link: '/marco-legal/reglamento-de-acondicionamiento-territorial',
        },
        {
          id: 26,
          name: 'Ley que crea el SNCP',
          slug: 'ley-que-crea-el-sncp',
          description:
            '¿Realiza trámites administrativos en línea, enviando documentos y solicitudes de manera eficiente y segura desde cualquier lugar.',
          children: [],
          link: '/marco-legal/ley-que-crea-el-sncp',
        },
        {
          id: 34,
          name: 'Resolución de Gerencia Municipal Metropolitana',
          slug: 'resolucion-de-gerencia',
          description:
            'Realiza trámites administrativos en línea, enviando documentos y solicitudes de manera eficiente y segura desde cualquier lugar.',
          children: [],
          link: '/marco-legal/resolucion-de-gerencia',
        },
        {
          id: 35,
          name: 'Código de Ética y Reglamento',
          slug: 'codigo-de-etica-y-reglamento',
          description:
            'En el Instituto Catastral de Lima, entendemos la importancia de mantener altos estándares éticos y operativos en todas nuestras actividades.',
          children: [],
          link: '/marco-legal/codigo-de-etica-y-reglamento',
        },
        {
          id: 36,
          name: 'Normas emitidas por la entidad',
          slug: 'normas-emitidas-por-la-entidad',
          description:
            'Las normas emitidas por el Instituto Catastral de Lima son fundamentales para asegurar un funcionamiento eficaz y transparente de nuestra institución.',
          children: [],
          link: '/marco-legal/normas-emitidas-por-la-entidad',
        },
        {
          id: 37,
          name: 'Convenios institucionales',
          slug: 'convenios-institucionales',
          description:
            'En el Instituto Catastral de Lima, estamos comprometidos en fortalecer la cooperación y la transparencia en la gestión pública.',
          children: [],
          link: '/marco-legal/convenios-institucionales',
        },
      ],
    },
    {
      id: 27,
      name: 'Gestión Administrativa',
      slug: 'gestion-administrativa',
      children: [
        {
          id: 28,
          name: 'Gestión Financiera y Presupuestal',
          slug: 'gestion-financiera-y-presupuestal',
          description:
            'Conozca cómo administramos y asignamos nuestros recursos financieros para garantizar la eficiencia y transparencia en nuestras operaciones.',
        },
        {
          id: 29,
          name: 'Gestión de Bienes e Infraestructura del ICL',
          slug: 'gestion-de-bienes-e-infraestructura-del-icl',
          description:
            'Descubra cómo gestionamos y mantenemos nuestras instalaciones, equipos y otros activos para ofrecer servicios de calidad.',
        },
        {
          id: 30,
          name: 'Gestión Normativa',
          slug: 'gestion-normativa',
          description:
            'Explore las normativas y regulaciones internas que guían nuestras operaciones y aseguran el cumplimiento de los estándares legales y éticos.',
        },
        {
          id: 31,
          name: 'Rendición de Cuentas de Titulares',
          slug: 'rendicion-de-cuentas-de-titulares',
          description:
            'Acceda a los informes y documentos que presentan un resumen detallado de nuestras actividades, logros y desafíos.',
        },
        {
          id: 32,
          name: 'Convocatorias',
          slug: 'convocatorias',
          description:
            'Manténgase informado sobre las últimas convocatorias y oportunidades para colaborar o trabajar con nosotros.',
        },
        {
          id: 33,
          name: 'Memorias Institucionales',
          slug: 'memorias-institucionales',
          description:
            'Revise nuestros informes anuales que destacan los logros, desafíos y planes futuros de la institución.',
        },
      ],
    },
    {
      id: 38,
      name: 'Proyectos',
      slug: 'proyectos',
      link: '/proyectos',
    },
    {
      id: 39,
      name: 'ICL Capacitaciones',
      slug: 'icl-capacitaciones',
      link: '/icl-capacitaciones',
    }
  ];
  return (
    <div
      className={`absolute sm:top-24 w-full z-0 h-unset min-h-full bg-lightBlue ${
        openMenu
          ? 'one-time-fade-in opacity-100 z-20 sm:flex'
          : 'one-time-fade-out opacity-0 z-0 hidden'
      }`}
      style={{ transitionDelay: openMenu ? '0ms' : '1000ms' }}
    >
      <div
        id="first-column"
        className="flex flex-col w-1/3 sm:border-r-8 border-white transition-all transform"
      >
        {categories.map((category) => {
          return (
            <div key={category.id} className="my-6 ml-4">
              <div
                className="cursor-pointer"
                onClick={() => {
                  if (category.link) {
                    setOpenMenu(false);
                    router.push(category.link);
                  } else {
                    JSON.stringify(category.children) ==
                    JSON.stringify(firstChildren)
                      ? setFirstChildren([])
                      : setFirstChildren(category.children);
                    setSecondChildren([]);
                    setSelectedCategory(category);
                  }
                }}
              >
                <span
                  className={`font-acto text-primary text-4xl  ${
                    selectedCategory?.id === category.id &&
                    firstChildren?.length > 0
                      ? 'underline 0.5s ease-in-out infinite alternate'
                      : ''
                  }`}
                >
                  {category.name}
                </span>
              </div>
              <div className="sm:hidden block">
                {JSON.stringify(category.children) ==
                  JSON.stringify(firstChildren) &&
                  firstChildren?.map((category: any) => (
                    <div key={category.id} className="my-4">
                      {category.link ? (
                        <Link href={category.link}>
                          <div
                            className="cursor-pointer flex flex-col gap-2"
                            onClick={() => {
                              setOpenMenu(false);
                            }}
                          >
                            <div className="flex gap-4">
                              <span className="text-primary font-acto text-2xl ">
                                {category.name}
                              </span>
                              <Image
                                src="/images/arrow.svg"
                                width={20}
                                height={20}
                                alt="flecha"
                              />
                            </div>
                            <div className="text-md font-lato font-light">
                              {category.description}
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div
                          className="cursor-pointer flex flex-col gap-2"
                          onClick={() => {
                            setSecondChildren(category.children);
                          }}
                        >
                          <div className="flex gap-4">
                            <span className="text-primary font-acto text-2xl ">
                              {category.name}
                            </span>
                            <Image
                              src="/images/arrow.svg"
                              width={20}
                              height={20}
                              alt="flecha"
                            />
                          </div>
                          <div className="text-md font-lato font-light">
                            {category.description}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
      <div
        id="second-column"
        className="flex-col w-1/3 px-12 overflow-scroll h-full mt-4 sm:flex hidden pb-8"
      >
        {firstChildren?.length > 0 &&
          firstChildren?.map((category: any) => (
            <div key={category.id} className="my-4 ml-4">
              {category.link ? (
                <Link href={category.link}>
                  <div
                    className="cursor-pointer flex flex-col gap-2"
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                  >
                    <div className="flex gap-4">
                      <span className="text-primary font-acto text-2xl ">
                        {category.name}
                      </span>
                      <Image
                        src="/images/arrow.svg"
                        width={20}
                        height={20}
                        alt="flecha"
                      />
                    </div>
                    <div className="text-md font-lato font-light">
                      {category.description}
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  className="cursor-pointer flex flex-col gap-2"
                  onClick={() => {
                    setSecondChildren(category.children);
                  }}
                >
                  <div className="flex gap-4">
                    <span className="text-primary font-acto text-2xl ">
                      {category.name}
                    </span>
                    <Image
                      src="/images/arrow.svg"
                      width={20}
                      height={20}
                      alt="flecha"
                    />
                  </div>
                  <div className="text-md font-lato font-light">
                    {category.description}
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
      <div id="third-column" className="sm:flex flex-col  w-1/3 px-8 hidden">
        {secondChildren.length > 0 &&
          secondChildren.map((category: any) => (
            <div key={category.id} className="my-10 ml-4">
              <div className="cursor-pointer">
                <span className="text-gray-700 text-4xl font-semibold hover:text-gray-900">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default MegaMenu;
