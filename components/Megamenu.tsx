import Image from 'next/image';
import Link from 'next/link';
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
        },
        {
          id: 7,
          name: 'TUSNE',
          slug: 'tusne',
          description: 'Resumen del Texto Único de Servicios No Exclusivos',
          children: [],
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
          name: 'Misión y Visión',
          slug: 'mision-y-vision',
          children: [],
        },
        {
          id: 18,
          name: 'Organigrama',
          slug: 'organigrama',
          children: [],
        },
        {
          id: 19,
          name: 'Directorio',
          slug: 'directorio',
          children: [],
        },
        {
          id: 20,
          name: 'Marco Normativo',
          slug: 'marco-normativo',
          children: [],
        },
        {
          id: 21,
          name: 'Transparencia',
          slug: 'transparencia',
          children: [],
        },
        {
          id: 22,
          name: 'Convocatorias',
          slug: 'convocatorias',
          children: [],
        },
        {
          id: 23,
          name: 'Proyectos',
          slug: 'proyectos',
          children: [],
        },
        {
          id: 24,
          name: 'Publicaciones',
          slug: 'publicaciones',
          children: [],
        },
        {
          id: 25,
          name: 'Noticias',
          slug: 'noticias',
          children: [],
        },
        {
          id: 26,
          name: 'Galería',
          slug: 'galeria',
          children: [],
        },
        {
          id: 27,
          name: 'Contacto',
          slug: 'contacto',
          children: [],
        },
      ],
    },
  ];
  return (
    <div
      className={` absolute top-24 w-full z-0 h-[calc(100vh-6rem)] bg-lightBlue ${
        openMenu
          ? 'one-time-fade-in opacity-100 z-20 flex'
          : 'one-time-fade-out opacity-0 z-0 hidden'
      }`}
      style={{ transitionDelay: openMenu ? '0ms' : '1000ms' }}
    >
      <div
        id="first-column"
        className="flex flex-col w-1/3 border-r-8 border-white transition-all transform"
      >
        {categories.map((category) => (
          <div key={category.id} className="my-10 ml-4">
            <div
              className="cursor-pointer"
              onClick={() => {
                setFirstChildren(category.children);
                setSecondChildren([]);
                setSelectedCategory(category);
              }}
            >
              <span
                className={`font-acto text-primary text-4xl  ${
                  selectedCategory?.id === category.id
                    ? 'underline 0.5s ease-in-out infinite alternate'
                    : ''
                }`}
              >
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        id="second-column"
        className="flex flex-col w-1/3 px-12 overflow-scroll h-full mt-4"
      >
        {firstChildren.length > 0 &&
          firstChildren.map((category: any) => (
            <div key={category.id} className="my-4 ml-4">
              <div
                className="cursor-pointer flex flex-col gap-2"
                onClick={() => setSecondChildren(category.children)}
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
            </div>
          ))}
      </div>
      <div id="third-column" className="flex flex-col  w-1/3 px-8">
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
