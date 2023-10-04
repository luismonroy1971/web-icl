import React from 'react';
import { Layout } from '../../components/Layout';
import Link from 'next/link';
import { SectionBanner } from '../../components/SectionBanner';

const ManualDeLevatamientoCatastral = () => {
  return (
    <Layout>
      <SectionBanner
        title="Manual de Levantamiento Catastral"
        description=""
        caption="Recursos"
      />
      <div className="px-8 py-12">
        <h3 className="text-3xl text-primary font-acto">
          Manual de Levantamiento Catastral
        </h3>
        <div className="flex flex-col gap-2 py-4">
          <p className="font-lato-bold underline text-primary text-lg">
            <Link
              href="http://icl.gob.pe/wp-content/uploads/2022/01/zona-catastrada-acuerdo-486-1711863-1.pdf"
              target="_blank"
            >
              Declaran Cercado de Lima como Zona Catastrada
            </Link>
          </p>
          <p className="font-lato-bold text-black text-lg">
            <Link
              href="http://icl.gob.pe/wp-content/uploads/2022/01/Manual-de-levantamiento-catastral.pdf"
              target="_blank"
            >
              Acuerdo de Consejo Directivo N° 004-2018-CD-ICL/MML
            </Link>
          </p>
          <p className="font-lato-bold underline text-primary text-lg">
            <Link href="http://icl.gob.pe/wp-content/uploads/2022/01/manual_levantamiento_catastral_alfanumerico.pdf">
              Manual de Levantamiento Catastral Urbano Municipal
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ManualDeLevatamientoCatastral;
