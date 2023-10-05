import React from 'react';
import { SectionBanner } from '../../components/SectionBanner';
import { Layout } from '../../components/Layout';
import NormasEmitidas from '../../components/Tables/NormasEmitidas';
import Convenios from '../../components/Tables/Convenios';

export default function LeyDeMarcoLegal({ slug }: any) {
  const data = [
    {
      id: 'ley-organica-de-municipalidades',
      title: 'Ley Orgánica de Municipalidades',
      description:
        'La Ley Nº 27972, conocida como la Ley Orgánica de Municipalidades, es la columna vertebral de la gestión y administración de los gobiernos locales en el Perú. En el Instituto Catastral de Lima, comprendemos la relevancia de esta legislación como la base de nuestra colaboración con las municipalidades y el soporte de nuestro compromiso con el desarrollo ordenado y sostenible de Lima',
      caption: 'Marco Legal',
      titleContent:
        'Ley Orgánica de Municipalidades: Fundamento de Nuestra Labor Municipal',
      buttonText: 'Descargar Ley Nº 27972',
      content: () => (
        <div className="font-acto-reg">
          <h2>
            <strong>Artículo 79</strong>.- Organización del espacio físico y uso
            del suelo.
          </h2>
          <p>
            Las municipalidades, en materia de organización del espacio físico y
            uso del suelo, ejercen las siguientes funciones:
          </p>

          <ol>
            <li>
              Funciones específicas exclusivas de las{' '}
              <strong>municipalidades provinciales:</strong>
              <ol>
                <li>
                  Aprobar el Plan de Acondicionamiento Territorial de nivel
                  provincial que identifique las áreas urbanas y de expansión
                  urbana, así como las áreas de protección o de seguridad por
                  riesgos naturales; las áreas agrícolas y las áreas de
                  conservación ambiental.
                </li>
                <li>(…)</li>
                <li>
                  Aprobar la regulación provincial respecto del otorgamiento de
                  licencias y las labores de control y fiscalización de las
                  municipalidades distritales en las materias reguladas por los
                  planes antes mencionados, de acuerdo con las normas técnicas
                  de la materia, sobre:
                  <ol>
                    <li>
                      <strong>
                        Elaboración y mantenimiento del catastro urbano y rural.
                      </strong>
                    </li>
                  </ol>
                </li>
                <li>(…)</li>
              </ol>
            </li>
            <li>
              Funciones específicas exclusivas de las{' '}
              <strong>municipalidades distritales:</strong>
              <ol>
                <li>(…)</li>
                <li>
                  <strong>Elaborar y mantener el catastro distrital.</strong>
                </li>
              </ol>
            </li>
          </ol>

          <h2>
            <strong>
              Artículo 161.- Competencias y Funciones de la Municipalidad
              Metropolitana de Lima
            </strong>
          </h2>
          <p>
            La Municipalidad Metropolitana de Lima tiene las siguientes
            competencias y funciones metropolitanas especiales:
          </p>
          <p>En materia de planificación, desarrollo urbano y vivienda</p>
          <ol>
            <li>(…)</li>
            <li>
              <strong>
                1.4. Administrar y mantener actualizado el catastro
                metropolitano;
              </strong>
            </li>
          </ol>
        </div>
      ),
      download:
        'https://icl.gob.pe/wp-content/uploads/2022/01/01.-ley-27972-ley-organica-de-municipalidades.pdf',
    },
    {
      id: 'ley-tributacion-municipal',
      title: 'Ley de Tributación Municipal',
      description:
        'La Ley de Tributación Municipal es un pilar fundamental en la gestión de recursos para el desarrollo de nuestras comunidades. En el Instituto Catastral de Lima, estamos comprometidos en facilitar la comprensión y el cumplimiento de esta importante legislación. ',
      caption: 'Marco Legal',
      titleContent: 'Entendiendo Nuestro Marco Normativo',
      content: () => (
        <div className="font-acto-reg">
          <article>
            <h2>
              <strong>
                Decreto Legislativo Nº 776 – Ley Tributación Municipal.
              </strong>
            </h2>

            <h3 className="my-4">
              <strong>CAPITULO I: DEL IMPUESTO PREDIAL</strong>
            </h3>

            <p>
              Artículo 20°.- El rendimiento del impuesto constituye renta de la
              Municipalidad Distrital respectiva en cuya jurisdicción se
              encuentren ubicados los predios materia del impuesto, estando a su
              cargo la administración del mismo.
            </p>

            <p>
              El 5% (cinco por ciento) del rendimiento del impuesto se destina
              exclusivamente a financiar el desarrollo y mantenimiento del
              catastro distrital, así como a las acciones que realice la
              administración tributaria, destinadas a reforzar su gestión y
              mejorar la recaudación.
            </p>
          </article>
        </div>
      ),
    },
    {
      id: 'ley-organica-de-gobiernos-regionales',
      title: 'Ley Nº 27867 – Ley Orgánica de Gobiernos Regionales',
      description:
        'En el Instituto Catastral de Lima, reconocemos la importancia de esta ley como un marco regulatorio que guía nuestra colaboración y coordinación con las regiones circundantes. En esta sección, proporcionamos una visión general completa de la Ley Nº 27867, sus disposiciones clave y su influencia en la toma de decisiones y la planificación estratégica.',
      caption: 'Marco Legal',
      titleContent: 'Fundamento de Nuestra Estructura Administrativa',
      buttonText: 'Descargar Ley N°27867',
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
      download:
        'http://icl.gob.pe/wp-content/uploads/2022/01/02.-ley-27867-ley-organica-de-gobiernos-regionales.pdf',
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
    {
      id: 'normas-emitidas-por-la-entidad',
      title: 'Normas Emitidas por la Entidad',
      description:
        'Las normas emitidas por el Instituto Catastral de Lima son fundamentales para asegurar un funcionamiento eficaz y transparente de nuestra institución. Estas normativas guían nuestras operaciones y establecen los estándares de calidad y legalidad que nos comprometemos a cumplir.',
      caption: 'Marco Legal',
      content: () => renderContentNormas(),
    },
    {
      id: 'convenios-institucionales',
      title: 'Convenios Institucionales',
      description:
        'En el Instituto Catastral de Lima, estamos comprometidos en fortalecer la cooperación y la transparencia en la gestión pública. A lo largo de los años, hemos establecido una serie de valiosos convenios y alianzas estratégicas con municipalidades distritales, provinciales y departamentales del país. Estos convenios representan un esfuerzo conjunto para mejorar la planificación territorial, el desarrollo urbano sostenible y la eficiencia en la administración de recursos. A través de esta sección, les invitamos a explorar estos acuerdos, conocer sus objetivos y detalles, y seguir de cerca nuestro compromiso continuo de contribuir al progreso y la ordenación territorial en Lima y sus alrededores.',
      caption: 'Marco Legal',
      content: () => renderContentConvenios(),
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
          <div className="mx-20 py-12">
            <div className="flex justify-between gap-12">
              <h3 className="font-acto text-4xl text-primary">
                {item.titleContent}
              </h3>
              {item.download && (
                <div
                  className=" bg-primary text-white rounded-sm font-acto flex gap-4 items-center justify-center font-acto h-[75px] w-[378px] text-lg cursor-pointer"
                  onClick={() => downloadLaw(item.download)}
                >
                  <img src="/images/download.svg" alt="download" />
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
      }
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
