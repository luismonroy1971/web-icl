import Head from 'next/head';
import { Layout } from '../../components/Layout';
import React from 'react';
import { useGetServicioQuery } from '../../redux/reduxQuery/servicios';
import { List } from '../../components/List';
import { SectionBanner } from '../../components/SectionBanner';
import FAQComponent from '../../components/Faq';
import { useRouter } from 'next/router';

export default function Servicios() {
  const router = useRouter();
  const { id } = router.query;
  const idUpperCased = (id as string)?.toUpperCase();
  const [loaded, setLoaded] = React.useState(false);
  const data = idUpperCased === 'TUPA' ? firstObj : secondObj;
  const {
    data: dataServicio,
    error: errorServicio,
    refetch: refetchServicio,
  } = useGetServicioQuery(idUpperCased);
  const dataServicioFiltered = dataServicio?.filter(
    (item: any) => item.flag_seleccion === '1'
  );
  const faqs = [
    {
      question: '¿Cómo puedo solicitar un procedimiento administrativo?',
      answer:
        'Puedes solicitar un procedimiento administrativo a través de nuestra plataforma web.',
    },
    {
      question: '¿Dónde puedo encontrar más información sobre las tasas?',
      answer: 'Puedes encontrar más información sobre las tasas en el TUPA.',
    },
  ];

  React.useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      <Head>
        <title>Servicios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SectionBanner
          caption="Servicios"
          {...data}
          image={`/images/servicios/${data.id}.svg`}
        />
        <div className="mx-20 py-12">
          <h3 className="font-acto text-4xl text-primary">
            Calculadora del servicio {data.id.toUpperCase()}
          </h3>
          <div>
            <List items={dataServicioFiltered} />
          </div>
        </div>
        <div className="mx-8 py-12">
          <FAQComponent items={faqs} />
        </div>
      </Layout>
    </>
  );
}

const firstObj = {
  id: 'tupa',
  title: 'Resumen del Texto Único de Procedimiento Administrativo (TUPA)',
  description:
    'Descubre y calcula fácilmente los procedimientos administrativos del Instituto Catastral de Lima con nuestro servicio TUPA.',
  image: 'https://picsum.photos/200/300',
};

const secondObj = {
  id: 'tusne',
  title: 'Resumen del Texto Único de Servicios No Exclusivos – TUSNE',
  description:
    'Explora la variedad de servicios no exclusivos ofrecidos por el Instituto Catastral de Lima a través de nuestro portal TUSNE.',
  image: 'https://picsum.photos/200/300',
};