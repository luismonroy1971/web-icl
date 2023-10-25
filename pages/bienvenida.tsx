import React from 'react';
import { Layout } from '../components/Layout';
import { SectionBanner } from '../components/SectionBanner';
import { RevealOnScroll } from '../components/Fade';
import Image from 'next/image';
import Accordion from '../components/Accordion';
import { faqItems } from '../utils/data';

const bienvenida = () => {
  return (
    <Layout>
      <RevealOnScroll>
        <div className="text-center py-12 sm:pt-16 sm:w-10/12 mx-auto w-11/12">
          <h2 className="font-acto text-primary sm:text-[3vw] text-3xl">
            ¡Bienvenidos a la página web del Instituto Catastral de Lima!{' '}
          </h2>
          <p className="font-lato sm:text-[1.2vw] text-md mt-4 sm:mb-0 mb-4">
            Bajo mi liderazgo y firme compromiso con la transparencia y gobierno
            electrónico, nos enorgullece brindarles una ventana digital a
            nuestro trabajo e información territorial y servicios catastrales.
            Espero que encuentren en este espacio web una herramienta valiosa
            para explorar, aprender y colaborar con el Sistema Nacional
            Integrado de Catastro para el desarrollo de la ciudad de Lima y de
            nuestro país.
          </p>
          <div className="sm:flex gap-20 sm:mt-8 mx-auto sm:px-20">
            <div className="sm:h-fit">
              <Image
                src="/images/aboutPresident.png"
                alt="Foto presidente"
                objectFit="cover"
                width={1080}
                height={1080}
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col w-full sm:mt-0 mt-4">
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
              <div className="w-full mx-auto sm:mt-0 mt-4">
                <Accordion items={faqItems} />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </Layout>
  );
};

export default bienvenida;
