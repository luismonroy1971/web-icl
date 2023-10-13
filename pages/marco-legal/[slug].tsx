import React from 'react';
import { SectionBanner } from '../../components/SectionBanner';
import { Layout } from '../../components/Layout';
import Image from 'next/image';
import { LeyMarcoLegalData } from '../../utils/data';

export default function LeyDeMarcoLegal({ slug }: any) {
  const downloadLaw = (url: string) => {
    window.open(url, '_blank');
  };
  const item = LeyMarcoLegalData.find((item) => item.id == slug);

  return (
    <Layout>
      {item && (
        <>
          <SectionBanner
            key={item.id}
            caption={item.caption}
            title={item.title}
            description={item.description}
          />
          <div className="sm:px-20 px-8 py-12">
            <div className="flex justify-between gap-12">
              <h3 className="font-acto text-4xl text-primary">
                {item.titleContent}
              </h3>
              {item.download && (
                <div
                  className=" bg-primary text-white rounded-sm font-acto flex gap-4 items-center justify-center font-acto h-[75px] w-[378px] text-lg cursor-pointer"
                  onClick={() => downloadLaw(item.download)}
                >
                  {/* <img src="/images/download.svg" alt="download" /> */}
                  <Image
                    src="/images/download.svg"
                    alt="download"
                    width={20}
                    height={20}
                  />
                  <span>{item.buttonText}</span>
                </div>
              )}
            </div>
            <div className="mt-4">{item.content()}</div>
          </div>
        </>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: 'ley-organica-de-municipalidades',
        },
      },
      {
        params: {
          slug: 'ley-tributacion-municipal',
        },
      },
      {
        params: {
          slug: 'ley-organica-de-gobiernos-regionales',
        },
      },
      {
        params: {
          slug: 'reglamento-de-acondicionamiento-territorial',
        },
      },
      {
        params: {
          slug: 'ley-que-crea-el-sncp',
        },
      },
      {
        params: {
          slug: 'resolucion-de-gerencia',
        },
      },
      {
        params: {
          slug: 'codigo-de-etica-y-reglamento',
        },
      },
      {
        params: {
          slug: 'normas-emitidas-por-la-entidad',
        },
      },
      {
        params: {
          slug: 'convenios-institucionales',
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  return {
    props: {
      slug,
    },
  };
}
