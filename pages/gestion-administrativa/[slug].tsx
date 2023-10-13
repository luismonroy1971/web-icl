import React from 'react';
import { SectionBanner } from '../../components/SectionBanner';
import { Layout } from '../../components/Layout';
import { GestionNormativaData } from '../../utils/data';

export default function GestionAdministrativa({ slug }: any) {
  const item = GestionNormativaData.find((item) => item.id == slug);

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
          <div className="sm:px-20 py-12 px-8">
            <div className="flex justify-between gap-12">
              <h3 className="font-acto text-4xl text-primary">
                {item.titleContent}
              </h3>
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
          slug: 'gestion-financiera-y-presupuestal',
        },
      },
      {
        params: {
          slug: 'gestion-de-bienes-e-infraestructura-del-icl',
        },
      },
      {
        params: {
          slug: 'gestion-normativa',
        },
      },
      {
        params: {
          slug: 'rendicion-de-cuentas-de-titulares',
        },
      },
      {
        params: {
          slug: 'convocatorias',
        },
      },
      {
        params: {
          slug: 'memorias-institucionales',
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
