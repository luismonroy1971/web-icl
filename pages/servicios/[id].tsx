import Head from 'next/head';
import { Layout } from '../../components/Layout';
import { Banner } from '../../components/Banner';
import React from 'react';

export default function Servicios({ data }: any) {
  const [loaded, setLoaded] = React.useState(false);

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
        <div
          className={`sm:h-[calc(100vh-6rem)] w-full bg-lightBlue flex z-50 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } duration-2000 ease-in-out`}
        >
          <div className="flex flex-col justify-center items-start px-4 gap-4 sm:w-1/2">
            <p
              className={`text-xl text-primary font-acto font-extralight -mb-4 ${
                loaded ? 'opacity-100' : 'opacity-0'
              } duration-2000 ease-in-out`}
            >
              Servicios
            </p>
            <h1 className="text-6xl text-primary font-bold font-acto">
              {data.title}
            </h1>
            <p className="text-black text-xl text-left font-lato">
              {data.description}
            </p>
          </div>
        </div>
        <div className="mx-4 py-12">
          <h3 className="font-acto text-4xl text-primary">
            Calculadora del servicio {data.id.toUpperCase()}
          </h3>
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

//if url is /servicios/1 then show firstObj else show secondObj

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: 'tupa',
        },
      },
      {
        params: {
          id: 'tusne',
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { id } = params;
  const data = id === 'tupa' ? firstObj : secondObj;
  return {
    props: {
      data,
    },
  };
}
