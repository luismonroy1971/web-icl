import React from 'react';
import { Layout } from '../../components/Layout';
import { SectionBanner } from '../../components/SectionBanner';
import { ProjectItem } from '../../components/ProjectItem';
export const projects = [
  {
    id: '1',
    image: '/images/proyectos/1.jpg',
    title: 'Sistema Proyecto Arbolado',
    content: () => (
      <div>
        <p>
          <strong>OBJETIVO:</strong> Georreferenciar y contabilizar las
          diferentes especies arbóreas ubicadas en Cercado de Lima; la creación
          de un sistema para la visualización todos los árboles
          Georreferenciados y sus principales características.
        </p>

        <p>
          El Proyecto de inventario de árboles se realizó por encargo de la
          Gerencia de Servicios a la Ciudad y Gestión Ambiental de la
          Municipalidad Metropolitana de Lima y en coordinación con el Instituto
          Catastral de Lima con la finalidad de georreferenciar y contabilizar
          la mayor cantidad de especies arbóreas del Cercado de Lima, a través
          de la creación de un sistema que genera una base de datos descriptiva
          y geográfica, con información en formato de capas las cuales señalan
          la ubicación de los árboles y una base de datos gráfica, donde existen
          capas de información que señalan la ubicación de los árboles.
        </p>

        <p>
          Este sistema virtual nos proporciona la localización de los árboles en
          el distrito, asimismo información para realizar una adecuada gestión a
          través del monitoreo y mantenimiento total de la zona en un periodo de
          tiempo aproximado de tres años para la detección de posibles cambios.
        </p>
      </div>
    ),
    link: 'https://sit.icl.gob.pe/proyecto_arbolado_urbano/',
  },
  {
    id: '2',
    image: '/images/proyectos/2.jpg',
    title:
      'Actualización Y Adecuación De La Cartografía Y Ortofotografía De Lima Cercado',
    content: () => (
      <div>
        <h1>
          ACTUALIZACIÓN Y ADECUACIÓN DE LA CARTOGRAFÍA Y ORTOFOTOGRAFÍA DE LIMA
          CERCADO
        </h1>
        <p>
          Cartografía y Ortofotografía de Lima Cercado vuelo 2011 Elaborado por
          IGN en Sistema de Proyección Cartográfica UTM y en el Sistema
          Geodésico Mundial
        </p>
        <p>
          <strong>
            CARTOGRAFÍA Y ORTOFOTOGRAFÍA DE LIMA CERCADO VUELO 2011 / ELABORADO
            POR IGN EN SISTEMA WGS84
          </strong>
        </p>
        <p>
          <strong>OBJETIVO:&nbsp;</strong>Contar con una Base Cartográfica del
          Cercado de Lima en el Sistema de Proyección Cartográfica UTM y en el
          Sistema Geodésico Mundial 1984 – Datum WGS84.
        </p>
        <p>
          <strong>PORQUE SE HIZO:&nbsp;</strong>En cumplimiento a:
          <strong>Reglamento de la Ley N° 28294,</strong>&nbsp;(10-02-2006) que
          crea el Sistema Nacional Integrado de Catastro y su vinculación con el
          Registro de Predios, Titulo III “De la Información Catastral”,
          Capítulo IV “Cartografía Catastral”, Artículo 30 “Actividades y
          Procesos que comprende la Cartografía Catastral” .
        </p>
        <p>
          <strong>Resolución Jefatural N° 112-2006-IGN/OAJ/DGC,</strong>
          &nbsp;(16-05-2006) Establece como Sistema de Proyección Cartográfica,
          al Sistema “Universal Transversal Mercator” (UTM).
        </p>
        <p>
          <strong>Resolución Jefatural N° 086-2011-IGN/OAJ/DGC,</strong>
          &nbsp;(03-05-2011) donde se da por concluido el periodo de conversión,
          vigencia y uso del Sistema Geodésico Provisional Sudamericano 1956 –
          PSAD56. “Constitúyase como Red Geodésica Horizontal Oficial a la Red
          Geodésica Geocéntrica Nacional (REGGEN), la misma que tiene como base
          el Sistema de Referencia Geocéntrica para las Américas (SIRGAS)
          sustentado en el Marco Internacional de Referencia Terrestre 2000 y el
          elipsoide de referencia es el World Geodetic System 1984 (WGS84)”.
        </p>
        <p>
          <a>Resumen WG S84</a>
        </p>
        <p>
          <strong>Cartografia WGS84.</strong>
        </p>
        <p>
          <strong>Objetivo General del Proyecto:</strong>
          Desarrollar un Sistema de Información Catastral que facilite
          información confiable, íntegra y oportuna para la toma de decisiones
          de las diferentes áreas de la corporación, basada en las mejores
          prácticas y normas vigentes.
        </p>
        <p>
          <strong>Financiamiento:</strong>
          <strong>Tiempo de Ejecución:</strong>&nbsp;10 meses
          <strong>Fecha Inicio de Actividades:&nbsp;</strong>31 de mayo de 2012
          <strong>Fecha Término de Actividades:</strong>&nbsp;29 de marzo de
          2013
        </p>
      </div>
    ),
    link: 'http://icl.gob.pe/wp-content/uploads/2022/02/15_cartografia_wgs84.pdf',
  },

  {
    id: '3',
    image: '/images/proyectos/3.jpg',
    title: 'Sistema de Gestión de Contratos',
    content: () => (
      <div>
        <p>
          <strong>
            Convenio Específico de Cooperación Interinstitucional No 001-2017
            entre el Instituto Catastral de Lima y el Fondo Metropolitano de
            Inversiones
          </strong>
        </p>
        <p>Convenio Suscrito: 03 de julio de 2017.</p>
        <p>
          INVERMET, en su condición de entidad responsable de supervisar el
          cumplimiento de los Contratos de Participación de la Inversión Privada
          que celebra la Municipalidad Metropolitana de Lima, respecto a de
          todas las materias vinculadas a la etapa posterior a la suscripción
          del contrato, necesitaba monitorear y evaluar las operaciones de
          fiscalización control, aplicación de penalidades y sanciones, así
          como, administrar, controlar, monitorear y fiscalizar las obligaciones
          de carácter administrativo, comercial, económico de inversión, de
          infraestructura, equipamiento, como los plazos y demás requisitos
          establecidos en ellas para lo cual necesita contar con un sistema
          informático que le permita automatizar dichos proceso como monitorear
          dichas obligaciones, mediante el desarrollo e implementación de un
          Sistema de Gestión de contratos.
        </p>
        <p>
          El ICL dentro de los términos de referencia del Convenio Específico
          firmado entre ambas instituciones, ha desarrollado un sistema
          denominado Sistema de Gestión de Contratos, sistema desarrollado a
          medida de las necesidades y requerimientos del personal de la Gerencia
          de Supervisión de Contratos. Beneficios del Sistema de Gestión de
          Contratos
        </p>
      </div>
    ),
    link: 'http://icl.gob.pe/wp-content/uploads/2022/01/sistema_de_gestion_de_contratos.pdf',
  },
  {
    id: '4',
    image: '/images/proyectos/4.jpg',
    title: 'Sistema de Información Territorial',
    content: () => (
      <div>
        <p>
          <strong>
            SISTEMA DE INFORMACIÓN TERRITORIAL (MODELAMIENTO-PRUEBA)
          </strong>
        </p>
        <p>
          Actualmente, el concepto de la ordenación y gestión del territorio, es
          esencial en la toma de decisiones, para una mejor distribución de los
          recursos de un espacio territorial.La Gestión Municipal, es la Gestión
          del Territorio. Y son los Sistemas de Información Territorial, los
          instrumentos de gestión que facilitan la adopción de decisiones.
        </p>
      </div>
    ),
    link: 'https://sit.icl.gob.pe/Sit/',
  },
  {
    id: '5',
    image: '/images/proyectos/5.jpg',
    title: 'Rellenos Sanitarios. Disposición final de residuos urbanos',
    content: () => (
      <div>
        <h1>Rellenos Sanitarios. Disposición final de residuos urbanos</h1>
        <p>PRIMER TRABAJO: RELLENO SANITARIO DE ANCÓN(15 DE AGOSTO 2011)</p>
        <p>
          <strong>
            REQUERIMIENTO DE LA GERENCIA DE SERVICIOS A LA CIUDAD:
          </strong>
        </p>
        <p>
          LEVANTAMIENTO PERIMÉTRICO DE LAS ÁREAS DE OPERACIÓN DE LOS RELLENOS
          SANITARIOS
        </p>
        <p>
          <strong>DE:</strong>
        </p>
        <p>ANCÓN 2011 ZAPALLAL 2012 PORTILLO GRANDE 2013</p>
      </div>
    ),
    link: 'http://icl.gob.pe/wp-content/uploads/2022/01/rellenos_sanitarios_residuos_urbanos_cercado_lima.pdf',
  },
  {
    id: '6',
    image: '/images/proyectos/6.jpg',
    title: 'Levantamiento y georeferenciación de escaleras',
    content: () => (
      <div>
        <p>
          <strong>
            PROYECTO: “VERIFICACIÓN Y UBICACIÓN GEOGRÁFICA DE ESCALERAS EN
            LADERAS DE LIMA METROPOLITANA CON IDENTIFICACIÓN DE ESPACIOS
            COLINDANTES PARA INSTALACIÓN&nbsp;DE SEÑALÉTICA” – VUGE – EMAPE /
            ICL
          </strong>
        </p>
        <p>
          <strong>Convenio Suscrito:</strong>&nbsp;07 de diciembre de 2012
          &nbsp;
        </p>
        <p>
          <strong>Objetivos del Proyecto:</strong>{' '}
        </p>
        <p>
          Brindar apoyo en la elaboración de las especificaciones técnicas y en
          la contratación destinada a la compra de imágenes satelitales,
          cartografía y orto imagen de Lima Metropolitana. Realizar la ubicación
          geográfica de 2,500 escaleras en las laderas de Lima con
          identificación de los espacios colindantes destinados a la ejecución
          de obras complementarias y servicios de mantenimiento. &nbsp;{' '}
        </p>
        <p>
          <strong>Fases del Proyecto:</strong> &nbsp;{' '}
        </p>
        <ul>
          <li>Fase I: Cartografía Base de Lima Metropolitana</li>
          <li>
            Fase II: Levantamiento, Registro y Procesamiento de Información
          </li>
        </ul>
      </div>
    ),
    link: 'http://icl.gob.pe/wp-content/uploads/2022/01/proyecto_emape_referencia_escalera_cercado_lima.pdf',
  },
  {
    id: '7',
    image: '/images/proyectos/7.jpg',
    title: 'Inventario de Parques de Lima Cercado',
    content: () => (
      <div>
        <p>
          La Municipalidad Metropolitana de Lima entre fines del año 2011 y
          principios del año 2012 ha realizado el “Levantamiento y Procesamiento
          del Inventario Forestal de Lima Cercado”, obteniéndose una valiosa
          información para la Gestión Municipal.
        </p>
        <p>
          Producto del referido levantamiento de información, se ha identificado
          174 entre Parques, Plazas, Plazoletas y 361 Vías con presencia de
          Bermas, asimismo, se han cuantificado los árboles de todos estos
          parques, plazoletas, plazas y bermas, los cuales ascienden a 33,604.
        </p>
        <p>
          Para la visualización y administración de la información del
          Inventario Forestal de Lima Cercado, se elaboró un Sistema de
          Consulta, el cual permite la vinculación de imágenes de los planos
          topográficos, ortofotos y fotografías urbanas de cada uno de los
          Parques, Plazas, Plazoletas y vías con presencia de bermas registrados
          en campo.
        </p>
        <p>
          El Sistema permite la actualización de la información de cada uno de
          los elementos registrados en campo, así como también, permite la
          visualización del Catálogo del Inventario Forestal con la
          Clasificación de Arboles identificados a nivel de todo Lima Cercado.
        </p>
        <p>
          Adicionalmente a ello, para efectos de poder contar con información a
          nivel Gerencial para la toma de decisiones, se ha publicado vía
          intranet en el Sistema de Información Territorial del ICL, la
          información básica del Inventario Forestal de Lima Cercado,
          permitiendo consultas en línea de manera interactiva con la
          información del territorio.
        </p>
        <p>
          <strong>Convenio Suscrito: 08 de setiembre de 2011.</strong>
        </p>
        <p>
          Objetivo General del Proyecto: Contar con el Inventario Forestal de
          Lima Cercado e información cuantificada de lo físico contenido en
          unidades de información territorial que se encuentran en la superficie
          (parques, plazas, plazoletas) y de Mobiliario Urbano (árbol), con la
          finalidad de que el Servicio de Parques de Lima – SERPAR Lima, pueda
          diseñar estrategias y planes de acción para la preservación del medio
          ambiente.
        </p>
        <p>
          Tiempo de Ejecución: 6 meses Fecha Inicio de Actividades: 17 de
          octubre de 2011 Fecha Término de Actividades: 30 de abril 2012
        </p>
      </div>
    ),
    link: 'http://icl.gob.pe/wp-content/uploads/2021/12/resumen_inventario_de_arboles_cercado_lima.pdf',
  },
];

export default function Proyectos() {
  return (
    <Layout>
      <SectionBanner
        title="Proyectos"
        caption="Proyectos"
        description="Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades."
      />
      <div className="flex flex-wrap justify-start px-8 py-12">
        {projects.map((project: any) => (
          <ProjectItem
            key={project.title}
            image={project.image}
            title={project.title}
            id={project.id}
          />
        ))}
      </div>
    </Layout>
  );
}
