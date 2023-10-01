import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import MegaMenu from '../components/Megamenu';
import { Navbar } from '../components/Navbar';
import { useState } from 'react';
import { Banner } from '../components/Banner';
import { Card } from '../components/Card';
import { News } from '../components/News';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import FAQComponent from '../components/Faq';
import { RevealOnScroll } from '../components/Fade';

const inter = Inter({ subsets: ['latin'] });

const resources = [
  {
    title: 'Consulta Catastral en Línea',
    description:
      'Permite a los usuarios obtener detalles específicos sobre propiedades en Lima, como ubicación y dimensiones.',
    buttonText: 'Realizar Consulta',
    img: '/images/consultaCatastral.svg',
  },
  {
    title: 'Sistema de información territorial',
    description:
      'Provee información detallada sobre el uso del suelo, zonificación, y otros aspectos territoriales en Lima.',
    buttonText: 'Acceder al Sistema',
    img: '/images/sistemaInformacion.svg',
  },
  {
    title: 'Portafolio de Aplicaciones GIS',
    description:
      'Herramientas y aplicaciones que facilitan el análisis espacial y la visualización de datos georreferenciados.',
    buttonText: 'Explorar Aplicaciones',
    img: '/images/portafolioAplicaciones.svg',
  },
  {
    title: 'Mesa de Partes Virtual',
    description:
      'Facilita la presentación de documentos y la realización de trámites administrativos de manera virtual.',
    buttonText: 'Iniciar Trámite',
    img: '/images/mesaDePartes.svg',
  },
];

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  const getDriveFileId = (url: string) => {
    const match = url?.match(/file\/d\/([^/]+)/);
    console.log(match);
    return match ? match[0] : '';
  };

  const news = [
    {
      title: 'Noticia 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Donec euismod, nisl vitae aliquam ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nisl vitae eros. Sed vitae eros quis nisl aliquam aliquet. Donec euismod, nisl vitae aliquam ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nisl vitae eros.',
      img: 'https://drive.google.com/uc?export=view&id=1rYmnuCd0kfmFp9728Cp5DZpc4Q3K-K0R',
    },
    {
      title: 'Noticia 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Donec euismod, nisl vitae aliquam ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nisl vitae eros. Sed vitae eros quis nisl aliquam aliquet. Donec euismod, nisl vitae aliquam ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nisl vitae eros.',
      img: 'https://drive.google.com/uc?export=view&id=1rYmnuCd0kfmFp9728Cp5DZpc4Q3K-K0R',
    },
    {
      title: 'Noticia 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Donec euismod, nisl vitae aliquam ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nisl vitae eros. Sed vitae eros quis nisl aliquam aliquet. Donec euismod, nisl vitae aliquam ultricies, nisl nunc aliquam nunc, vitae aliquam nisl nisl vitae eros.',
      img: 'https://drive.google.com/uc?export=view&id=1rYmnuCd0kfmFp9728Cp5DZpc4Q3K-K0R',
    },
  ];

  const faqItems = [
    {
      question: 'Finalidad de Instituto Catastral de Lima',
      answer:
        'El Instituto Catastral de Lima es el pilar que sustenta el desarrollo sostenible y planificado de nuestra vibrante ciudad. Con una rica historia de dedicación y servicio, nos esforzamos por ser la fuente confiable y precisa de información catastral y territorial.',
    },
    {
      question: 'Misión',
      answer:
        'Ser la entidad pública, modelo de gestión catastral municipal del Perú, debido a la calidad de servicio al ciudadano, la promoción de las capacidades en los sistemas de información territorial y la eficiencia en nuestros procesos.',
    },
    {
      question: 'Visión',
      answer:
        'Ser una institución líder y modelo en gestión catastral a nivel nacional e internacional que brinde información territorial de calidad, actualizada y oportuna de Lima Metropolitana, que interopere con todas las entidades públicas y privadas que administran información georreferenciada, y que contribuya a una gestión transparente en el marco de un gobierno digital al servicio de la corporación municipal, de las entidades públicas y privadas y del ciudadano en general.',
    },
  ];
  return (
    <>
      <Head>
        <title>Instituto Catastral de Lima</title>
        <meta name="description" content="Instituto Catastral de Lima" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <MegaMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Banner
        slides={[
          {
            id: 0,
            titleFirst: 'Dando forma a la',
            titleSecond: 'Lima del mañana',
            description:
              'Tu aliado en la gestión catastral y territorial, facilitando un desarrollo urbano sostenible y planificado.',
            image: '/images/pagina-1/banner-1.jpg',
            buttonText: 'Accede a nuestros servicios',
            background: 'bg-primary',
            align: 'text-left',
          },
          {
            id: 1,
            titleFirst: 'Un equipo',
            titleSecond: 'comprometido',
            description:
              'Nuestro equipo: pasión y compromiso en cada paso hacia el futuro de Lima. ',
            image: '/images/pagina-1/banner-2.jpg',
            buttonText: 'Conoce a nuestro equipo',
            background: 'bg-primary',
            align: 'text-left',
          },
          {
            id: 2,
            titleFirst: 'Convenios',
            titleSecond: 'Institucionales:',
            description: 'Alianzas estratégicas para un desarrollo responsable',
            image: '/images/pagina-1/banner-3.jpg',
            buttonText: 'Ver Convenios',
            background: 'bg-primary',
            align: 'text-left',
          },
          {
            id: 3,
            titleFirst: 'Capacitaciones del',
            titleSecond: 'ICL',
            description:
              'Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades.',
            image: '/images/pagina-1/banner-4.jpg',
            buttonText: 'Ver Capacitaciones',
            background: 'bg-primary',
            align: 'text-left',
          },
          {
            id: 4,
            titleFirst: 'Juntos construimos',
            titleSecond: 'un mañana mejor',
            description:
              'Nuestra misión: Transformar el futuro a través de una gestión territorial sólida.',
            image: '/images/pagina-1/banner-5.jpg',
            buttonText: 'Ver Recursos',
            background: 'bg-primary',
            align: 'text-left',
          },
        ]}
      />
      <RevealOnScroll>
        <div className="text-center py-20 sm:w-10/12 mx-auto">
          <h2 className="font-acto text-primary text-4xl">Sobre Nosotros</h2>
          <p className="font-lato text-lg mt-2">
            El Instituto Catastral de Lima se dedica a proporcionar servicios
            catastrales precisos y actualizados, contribuyendo al desarrollo
            ordenado y sostenible de la región. Con un equipo de profesionales
            altamente calificados, nos esforzamos por mantener la integridad y
            la transparencia en todas nuestras operaciones.
          </p>
          <div className="sm:flex gap-4 sm:mt-8 mx-auto">
            <div className="sm:h-[200px]">
              <Image
                src="/images/aboutPresident.png"
                alt="Foto presidente"
                objectFit="cover"
                width={600}
                height={600}
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col w-full justify-center my-auto mt-8">
              <div className="flex gap-2">
                <Image
                  src="/images/shortArrow.svg"
                  width={10}
                  height={5}
                  alt="Flecha"
                />
                <h3 className="font-acto text-primary text-3xl">
                  Presidente Ejecutivo
                </h3>
              </div>
              <p className="font-lato mt-2 text-left text-lg mb-2 ml-4">
                Molina Arles, Luis Alfonso
              </p>
              {/* <FAQComponent items={faqItems} /> */}
              <div className="mt-4">
                <p className="font-lato italic text-left text-lg ml-4">
                  {`"¡Bienvenidos a la página web del Instituto Catastral de Lima!
                  Bajo mi liderazgo y compromiso, nos enorgullece brindarles una
                  ventana digital a nuestro trabajo y a la información catastral
                  de nuestra ciudad. Espero que encuentren en este espacio una
                  herramienta valiosa para explorar, aprender y colaborar en la
                  construcción de una Lima mejor y más informada."`}
                </p>
              </div>
              <div className="flex flex-col w-72 justify-center mx-auto sm:mt-8">
                <Button>Conoce más</Button>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="text-center py-20 sm:w-10/12 mx-auto">
          <h2 className="font-acto text-primary text-4xl">Nuestros Recursos</h2>
          <p className="font-lato mt-4">
            En el Instituto Catastral de Lima, estamos comprometidos a brindar
            servicios de alta calidad que faciliten una gestión territorial
            efectiva y sostenible. Descubre cómo podemos ayudarte a navegar por
            el paisaje urbano en constante cambio de Lima.
          </p>
          <div className="flex sm:flex-row flex-col gap-4 justify-center items-center mt-8 mx-auto">
            {resources.map((resource, index) => (
              <Card key={index} {...resource} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="text-center py-20 sm:w-10/12 mx-auto">
          <h2 className="font-acto text-primary text-4xl">
            Noticias y eventos
          </h2>
          <p className="font-lato mt-4">
            Mantente al día con las últimas noticias y eventos del Instituto
            Catastral de Lima.
          </p>
          <div className="flex flex-col gap-4 justify-center mt-8">
            {news.map((news, index) => (
              <News key={index} {...news} />
            ))}
          </div>
          <div className="mt-12 w-40 mx-auto">
            <Button>Ver más noticias</Button>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="py-20 sm:w-10/12 mx-auto sm:flex gap-20 text-left">
          <div className="sm:w-1/4 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center h-28">
              <Image
                src="/images/levantamientoCatastral.svg"
                width={127}
                height={120}
                alt="Mapa"
              />
            </div>
            <h3 className="font-acto text-primary text-xl h-20">
              Manual de Levantamiento Catastral
            </h3>
            <Button>Ir a Manual</Button>
          </div>
          <div className="sm:w-1/4 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center h-28">
              <Image
                src="/images/covid-19.svg"
                width={127}
                height={120}
                alt="Mapa"
              />
            </div>
            <h3 className="font-acto text-primary text-xl h-20">
              Plan para vigilancia, prevención y control de Covid-19
            </h3>
            <Button>Ir a Plan</Button>
          </div>
          <div className="sm:w-1/4 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center h-28">
              <Image
                src="/images/sistemaNacionalControl.svg"
                width={127}
                height={120}
                alt="Mapa"
              />
            </div>
            <h3 className="font-acto text-primary text-xl h-20">
              Atención de denuncias ciudadanas por el Sistema Nacional de
              Control
            </h3>
            <Button>Ir a Portal Denuncias</Button>
          </div>
          <div className="sm:w-1/4 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center h-28">
              <Image
                src="/images/libroReclamaciones.svg"
                width={220}
                height={120}
                alt="Mapa"
              />
            </div>
            <h3 className="font-acto text-primary text-xl h-20">
              Libro de Reclamaciones Digital
            </h3>
            <div className="w-full">
              <Button>Ir a Libro de Reclamaciones</Button>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <Footer />
    </>
  );
}
