import React from 'react';
import { SectionBanner } from '../../components/SectionBanner';
import { Layout } from '../../components/Layout';
import NormasEmitidas from '../../components/Tables/NormasEmitidas';
import Convenios from '../../components/Tables/Convenios';
import GestionNormativa from '../../components/Tables/GestionNormativa';
import RendicionDeCuentas from '../../components/Tables/RendicionDeCuentas';
import Convocatorias from '../../components/Tables/Convocatorias';
import MemoriasInstitucionales from '../../components/Tables/MemoriasInstitucionales';

type DataItem = {
  id: string;
  title: string;
  description: string;
  caption: string;
  titleContent: string;
  content: () => JSX.Element;
};

export default function GestionAdministrativa({ slug }: any) {
  const data: DataItem[] = [
    {
      id: 'gestion-financiera-y-presupuestal',
      title: 'Gestión Financiera y Presupuestal',
      description:
        'Nuestra gestión financiera y presupuestal se destaca por su eficiencia y transparencia. Garantizamos una asignación efectiva de recursos para cumplir con nuestra misión y objetivos institucionales, manteniendo una sólida estabilidad económica.',
      caption: 'Gestión Administrativa',
      titleContent: 'Gestión Financiera y Presupuestal',
      content: () => (
        <div className="p-4 space-y-8">
          {/* First Item */}
          <div>
            <h2 className="text-xl font-bold text-blue-600 font-acto text-primary">
              1.- Incremento de 39% del Presupuesto Institucional
            </h2>
            <div className="mt-2 text-gray-700 font-lato">
              <p className="font-lato text-blue text-xl my-2">
                → Situación encontrada
              </p>
              <p>
                Transferencia de la MML por S/ 1´800,000. Dicha cantidad se
                mantiene desde hace diez (10) años aproximadamente.
              </p>
            </div>
            <p className="mt-2 text-gray-700">
              <p className="font-lato text-blue text-xl my-2">
                → Gestión años 2011-2013
              </p>
              <p>
                A partir del año 2013 se logró incrementar el presupuesto
                Institucional en S/. 700,000. pasando de S/. 1´800,000 a S/.
                2´500,000.
              </p>
            </p>
          </div>

          {/* Second Item */}
          <div>
            <h2 className="text-xl font-bold text-blue-600 font-acto text-primary">
              2.- Recuperación de deudas pendientes de cobranza de gestiones
              anteriores 2003 - 2009
            </h2>
            <p className="mt-2 text-gray-700">
              <p className="font-lato text-blue text-xl my-2">
                → Situación encontrada
              </p>
              <p>
                Se encontró deuda de cobranza por S/. 89,948 que la
                Municipalidad Provincial de Ica mantenía con el ICL, desde el
                año 2005. Se encontró deuda pendiente de cobro por S/. 52,930
                que la MML mantenía con el ICL por productos y servicios
                brindados entre los años 2003 y 2009.
              </p>
            </p>
            <p className="mt-2 text-gray-700">
              <p className="font-lato text-blue text-xl my-2">
                → Gestión años 2011-2013
              </p>
              <p>
                Dentro de un proceso de conciliacion extra judicial se logro el
                reconociminto de la deuda y el compromiso de cobro de 50%
                ascendente a S/ 44,974 mas los intereses legales de S/. 10,165;
                haciendo un total de S/. 55,139, que sera cobrado en el año
                2014. Se logro cobrar a la MML el 100% de la deuda de gestiones
                anteriores (S/. 52,930 ).
              </p>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'gestion-de-bienes-e-infraestructura-del-icl',
      title: 'Gestión de Bienes e Infraestructura del ICL',
      description:
        'En el Instituto Catastral de Lima, gestionamos nuestros recursos de manera eficiente para mantener un entorno de trabajo óptimo. Nuestra inversión en infraestructura refleja nuestro compromiso con la calidad en la gestión catastral y el servicio a la comunidad de Lima.',
      caption: 'Gestión Administrativa',
      titleContent: 'Gestión de Bienes e Infraestructura del ICL',
      content: () => (
        <>
          <div>
            <h2 className="text-xl font-bold text-blue-600 font-acto text-primary">
              1.- Renovación de unidad de transporte
            </h2>
            <div className="mt-2 text-gray-700 font-lato">
              <p className="font-lato text-blue text-xl my-2">
                → Situación encontrada
              </p>
              <p>
                Se encontraron dos (02) vehículos (Nissan Sunny y Toyota Hilux)
                con mas de diez (10) años de antigüedad y en estado inoperativo.
              </p>
            </div>
            <div className="mt-2 text-gray-700 font-lato">
              <p className="font-lato text-blue text-xl my-2">
                → Gestión años 2011-2013
              </p>
              <p>
                Se aprobó la Baja de Bienes de los dos (02) vehículos por la
                causal de mantenimiento o reparación onerosa. – Se vendió por
                subasta pública los dos vehículos y se obtuvo un total de S/
                19,600 – Se adquirió una camioneta minivan Hyundai 0 Km. para
                doce (12) pasajeros.
              </p>
            </div>
          </div>

          {/* Fourth Item */}
          <div>
            <h2 className="text-xl font-bold text-blue-600 font-acto text-primary mt-4">
              2.- Registro de Bienes en Software – SIMI de la Superintendencia
              de Bienes Nacionales
            </h2>
            <div className="mt-2 text-gray-700 font-lato">
              <p className="font-lato text-blue text-xl my-2">
                → Situación encontrada
              </p>
              <p>
                No se encontraron registrados los bienes del activo Fijo en el
                sistema de la Superintendencia de Bienes Nacionales, acto de
                cumplimiento obligatorio de acuerdo a ley.
              </p>
            </div>
            <div className="mt-2 text-gray-700 font-lato">
              <p className="font-lato text-blue text-xl my-2">
                → Gestión años 2011-2013
              </p>
              <p>
                Se realizó el registro de más de 1,500 bienes del Activo Fijo
                del ICL en el Software SIMI de la Superintendencia de Bienes
                Nacionales.
              </p>
            </div>
          </div>

          {/* Fifth Item */}
          <div>
            <h2 className="text-xl font-bold text-blue-600 font-acto text-primary mt-4">
              3.- Modernización de la Gestión de los bienes e infraestructura
              del ICL y equipamiento tecnológico.
            </h2>
            <div className="mt-2 text-gray-700 font-lato">
              <p className="font-lato text-blue text-xl my-2">
                → Situación encontrada
              </p>
              <p>
                Se encontraron equipos de computo con ciclo de vida vencido, sin
                ambiente adecuado para los servidores y sin equipos adecuados
                para levantamiento de información en trabajo de campo.
              </p>
            </div>
            <div className="mt-2 text-gray-700 font-lato">
              <p className="font-lato text-blue text-xl my-2">
                → Gestión años 2011-2013
              </p>
              <p>
                Se gestionó la adquisición de bienes y acondicionamiento de la
                infraestructura de ICL. – Quince (15) computadoras nuevas –
                Cuatro (04) impresoras – Sala y acondicionamiento de servidores
                – Equipo Tape Backup – Equipo UPS – Implementación de comedor
                para trabajadores.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'gestion-normativa',
      title: 'Gestión Normativa',
      description:
        'Las normas emitidas por el Instituto Catastral de Lima son fundamentales para asegurar un funcionamiento eficaz y transparente de nuestra institución. Estas normativas guían nuestras operaciones y establecen los estándares de calidad y legalidad que nos comprometemos a cumplir.',
      caption: 'Gestión Administrativa',
      titleContent: 'Mejora de los sistemas administrativos',
      content: () => (
        <div>
          <div className="mt-2 text-gray-700 font-lato">
            <p className="font-lato text-blue text-xl my-2">
              → Situación encontrada
            </p>
            <p>
              Se encontraron cinco (05) directivas emitidas relacionadas con
              formulación del Plan Estratégico, Plan Operativo, Normas de
              Ecoeficiencia y para el Cierre de Estados Financieros y
              presupuestales del ICL.
            </p>
          </div>
          <div className="mt-2 text-gray-700 font-lato">
            <p className="font-lato text-blue text-xl my-2 mt-4">
              → Gestión años 2011-2013
            </p>
            <p>
              Se formularon DIECISEIS (16) DIRECTIVAS con la finalidad de
              mejorar los controles internos en los Sistemas Administrativos de
              Personal, Tesorería, Contabilidad, Logística, Informática, así
              como directivas relacionadas al cumplimiento de transparencia y
              acceso a la información pública, seguridad y vigilancia, entre
              otros.
            </p>
          </div>
          <div className="mt-8">{renderTableGestionNormativa()}</div>
        </div>
      ),
    },
    {
      id: 'rendicion-de-cuentas-de-titulares',
      title: 'Rendición de Cuentas de Titulares',
      description:
        'La rendición de cuentas es un pilar fundamental en nuestra gestión. Los titulares en el Instituto Catastral de Lima están comprometidos con la transparencia y la responsabilidad en todas nuestras acciones',
      caption: 'Gestión Administrativa',
      titleContent: 'Listado de rendiciones de cuentas:',
      content: () => <div>{renderTableRendicionCuentas()}</div>,
    },
    {
      id: 'convocatorias',
      title: 'Convocatorias',
      description:
        'Las convocatorias son una parte esencial de nuestra interacción con la comunidad y profesionales interesados. En el Instituto Catastral de Lima, estamos comprometidos en mantener un proceso de convocatoria abierto y transparente, donde se promueve la participación de talento diverso.',
      caption: 'Gestión Administrativa',
      titleContent: 'Listado de convocatorias',
      content: () => <div>{renderTableConvocatorias()}</div>,
    },
    {
      id: 'memorias-institucionales',
      title: 'Memorias Institucionales',
      description:
        'Nuestras Memorias Institucionales son un reflejo de nuestro compromiso con la transparencia y la rendición de cuentas. A través de ellas, compartimos nuestros logros, desafíos y avances a lo largo de nuestro recorrido.',
      caption: 'Gestión Administrativa',
      titleContent: 'Listado de memorias institucionales',
      content: () => <div>{renderTableMemoriasInstitucionales()}</div>,
    },
  ];
  const item = data.find((item) => item.id == slug);
  const renderTableGestionNormativa = () => {
    return <GestionNormativa />;
  };
  const renderTableRendicionCuentas = () => {
    return <RendicionDeCuentas />
  };
  const renderTableConvocatorias = () => {
    return <Convocatorias />;
  };
  const renderTableMemoriasInstitucionales = () => {
    return <MemoriasInstitucionales />;
  };
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
          <div className="px-20 py-12">
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
