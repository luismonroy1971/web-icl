import React from 'react';
import { SectionBanner } from '../../components/SectionBanner';
import { Layout } from '../../components/Layout';
import NormasEmitidas from '../../components/NormasEmitidas';
import Convenios from '../../components/Convenios';

type DataItem = {
  id: string;
  title: string;
  description: string;
  caption: string;
  titleContent: string;
  content: () => JSX.Element;
};

export default function GestionAdministrativa({ slug }: any) {
  console.log(slug);
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
      id: 'ley-tributacion-municipal',
      title: 'Ley de Tributación Municipal',
      description:
        'La Ley de Tributación Municipal es un pilar fundamental en la gestión de recursos para el desarrollo de nuestras comunidades. En el Instituto Catastral de Lima, estamos comprometidos en facilitar la comprensión y el cumplimiento de esta importante legislación. ',
      caption: 'Marco Legal',
      titleContent: 'Entendiendo Nuestro Marco Normativo',
      content: () => (
        <div className="p-4 space-y-8">
          {/* First Item */}
          <div>
            <h2 className="text-xl font-bold text-blue-600">
              1.- Incremento de 39% del Presupuesto Institucional
            </h2>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold">→ Situación encontrada</span>
              <br />
              Transferencia de la MML por S/ 1´800,000. Dicha cantidad se
              mantiene desde hace diez (10) años aproximadamente.
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold">→ Gestión años 2011-2013</span>
              <br />A partir del año 2013 se logró incrementar el presupuesto
              Institucional en S/. 700,000. pasando de S/. 1´800,000 a S/.
              2´500,000.
            </p>
          </div>

          {/* Second Item */}
          <div>
            <h2 className="text-xl font-bold text-blue-600">
              2.- Recuperación de deudas pendientes de cobranza de gestiones
              anteriores 2003 - 2009
            </h2>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold">→ Situación encontrada</span>
              <br />
              Se encontró deuda de cobranza por S/. 89,948 que la Municipalidad
              Provincial de Ica mantenía con el ICL, desde el año 2005. Se
              encontró deuda pendiente de cobro por S/. 52,930 que la MML
              mantenía con el ICL por productos y servicios brindados entre los
              años 2003 y 2009.
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold">→ Gestión años 2011-2013</span>
              <br />
              Dentro de un proceso de conciliacion extra judicial se logro el
              reconociminto de la deuda y el compromiso de cobro de 50%
              ascendente a S/ 44,974 mas los intereses legales de S/. 10,165;
              haciendo un total de S/. 55,139, que sera cobrado en el año 2014.
              Se logro cobrar a la MML el 100% de la deuda de gestiones
              anteriores (S/. 52,930 ).
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
        <div className="my-4">
          <article>
            <h3>
              <strong>Artículo 46.-</strong> Contexto de las funciones
              específicas
            </h3>
            <p>
              Las funciones específicas que ejercen los Gobiernos Regionales se
              desarrollan en base a las políticas regionales, las cuales se
              formulan en concordancia con las políticas nacionales sobre la
              materia.
            </p>

            <h3>
              <strong>Artículo 50.-</strong> Funciones en materia de población
            </h3>
            <ul>
              <li>(…)</li>
              <li>
                c) Programar y desarrollar acciones que impulsen una
                distribución territorial de la población en función a las
                potencialidades del desarrollo regional y en base a los planes
                de ordenamiento territorial y de la capacidad de las ciudades
                para absorber flujos migratorios.
              </li>
            </ul>

            <h3>
              <strong>Artículo 53.-</strong> Funciones en matera ambiental y de
              ordenamiento territorial
            </h3>
            <ul>
              <li>(…)</li>
              <li>
                <strong>
                  f) Planificar y desarrollar acciones de ordenamiento y
                  delimitación en el ámbito del territorio regional, así como
                  organizar, evaluar y tramitar los expedientes técnicos de
                  demarcación territorial, en armonía con las políticas y normas
                  de la materia.
                </strong>
              </li>
            </ul>
          </article>
        </div>
      ),
    },
    {
      id: 'reglamento-de-acondicionamiento-territorial',
      title: 'Reglamento de Acondicionamiento Territorial',
      description:
        'El Reglamento de Acondicionamiento Territorial es un instrumento esencial en la planificación y desarrollo de nuestras áreas urbanas y rurales. En el Instituto Catastral de Lima, reconocemos su papel fundamental en la promoción del crecimiento sostenible y el uso adecuado de nuestros recursos territoriales',
      caption: 'Marco Legal',
      titleContent:
        'Reglamento de Acondicionamiento Territorial: Orientando el Desarrollo Responsable',
      content: () => (
        <div>
          <article>
            <h2>
              <strong>DISPOSICIÓN COMPLEMENTARIA FINAL</strong>
            </h2>
            <h3>
              Decreto Supremo Nº 004-2011-VIVIENDA – Aprobación Reglamento de
              Acondicionamiento Territorial y Desarrollo Urbano
            </h3>

            <p>
              Sexta.- Los catastros, inventarios técnicos-descriptivos de la
              propiedad y de las actividades económicas, como fuente de
              información para la planificación, la gestión urbana y tributación
              local.
            </p>

            <p>
              Los catastros urbano, rural y minero, como inventarios técnicos y
              descriptivos de la propiedad y de las actividades económicas,
              constituyen fuente de información para la planificación, la
              gestión urbana y la tributación local, teniendo carácter de
              servicio público.
            </p>

            <p>
              Corresponde a las Municipalidades el catastro de los predios
              urbanos, así como de los predios rústicos y eriazos que se ubican
              dentro del área de expansión urbana prevista en los planes
              urbanos, de acuerdo a la normativa vigente aplicable al catastro.
            </p>
          </article>
        </div>
      ),
    },
    {
      id: 'ley-que-crea-el-sncp',
      title: 'Ley que crea el Sistema Nacional de Catastro',
      description:
        'La Ley que crea el Sistema Nacional de Catastro Público (SNCP) es la piedra angular de nuestra labor en el Instituto Catastral de Lima. Esta legislación proporciona la base legal que respalda la organización y el funcionamiento del sistema catastral en todo el país.',
      caption: 'Marco Legal',
      titleContent: 'Fundamento de la Gestión Catastral',
      content: () => (
        <div>
          <article>
            <h2>
              Ley Nº 28294 – Ley que crea el Sistema Nacional Integrado de
              Catastro y su vinculación con el registro de predios
            </h2>

            <h3>Artículo 7°.- Integrantes del Consejo Nacional.</h3>

            <p>El Consejo Nacional de Catastro está integrado por:</p>

            <ol>
              <li>
                El Superintendente Nacional de los Registros Públicos – SUNARP,
                quien lo preside.
              </li>
              <li>Un representante de los Gobiernos Regionales.</li>
              <li>
                El presidente de la Asociación de Municipalidades o su
                representante.
              </li>
              <li>
                El jefe Institucional del Instituto Nacional de Concesiones y
                Catastro Minero- INACC o su representante.
              </li>
              <li>
                El jefe del Instituto Geográfico Nacional – IGN o su
                representante.
              </li>
              <li>
                El Director Ejecutivo del Instituto Catastral de Lima – ICL o su
                representante.
              </li>
            </ol>
          </article>
        </div>
      ),
    },
    {
      id: 'resolucion-de-gerencia',
      title: 'Resolución de Gerencia Municipal Metropolitana',
      description:
        'Realiza trámites administrativos en línea, enviando documentos y solicitudes de manera eficiente y segura desde cualquier lugar.',
      caption: 'Marco Legal',
      titleContent: 'Avanzando en Nuestra Misión',
      content: () => (
        <div>
          <article>
            <h3>Articulo N° 1:</h3>
            <p>
              Establecer como Unidad Ejecutora de Proyectos de Inversión Pública
              de la Municipalidad Metropolitana de Lima al Instituto Catastral
              de Lima – ICL (UE-IG)
            </p>

            <h3>Articulo N° 2:</h3>
            <p>
              Designar al Presidente Ejecutivo del Instituto Catastral de Lima –
              ICL como responsable de la Unidad Ejecutora (UE-GL) constituida
              mediante la presente Resolución.
            </p>
          </article>
        </div>
      ),
    },
    {
      id: 'codigo-de-etica-y-reglamento',
      title: 'Código de Ética y Reglamento',
      description:
        'En el Instituto Catastral de Lima, entendemos la importancia de mantener altos estándares éticos y operativos en todas nuestras actividades. Nuestro Código de Ética y Reglamento establece los principios fundamentales que guían nuestro comportamiento y nuestras relaciones con todas las partes interesadas. Estos principios reflejan nuestro compromiso con la integridad, la equidad y la excelencia en todo lo que hacemos.',
      caption: 'Marco Legal',
      titleContent: 'Código de Ética y Reglamento',
      content: () => (
        <div>
          <article>
            <h3>
              <strong>Fines de la Función Pública</strong>
            </h3>
            <p>
              Los fines de la función pública son el Servicio a la Nación, de
              conformidad con lo dispuesto en la Constitución Política y la
              obtención de mayores niveles de eficiencia del aparato estatal, de
              manera que se logre una mejor atención a la ciudadanía,
              priorizando y optimizando el uso de los recursos públicos.
            </p>

            <h3>
              <strong>Empleado Público</strong>
            </h3>
            <p>
              Es todo funcionario o servidor de las entidades de la
              Administración Pública, en cualquiera de los niveles jerárgicos
              sea éste nombrado, contratado, designado, de confianza o electo
              que desempeñe actividades o funciones en nombre o al servicio del
              Estado, no importando el régimen jurídico de la entidad en la que
              se preste servicios ni el régimen laboral o de contratación al que
              esté sujeto.
            </p>
          </article>
        </div>
      ),
    },
  ];
  const downloadLaw = (url: string) => {
    window.open(url, '_blank');
  };
  console.log(slug);
  const item = data.find((item) => item.id == slug);
  console.log(item);
  const renderContentConvenios = () => {
    return <Convenios />;
  };
  const renderContentNormas = () => {
    return <NormasEmitidas />;
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
          <div className="mx-8 py-12">
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
