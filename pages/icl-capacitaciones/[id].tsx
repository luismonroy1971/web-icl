import { Layout } from '../../components/Layout';

export default function ICLCapacitacion({ proyecto }: any) {
  return (
    <Layout>
      <h1>ICL Capacitaciones</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      },
      {
        params: {
          id: '2',
        },
      },
      {
        params: {
          id: '3',
        },
      },
      {
        params: {
          id: '4',
        },
      },
      {
        params: {
          id: '5',
        },
      },
      {
        params: {
          id: '6',
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      proyecto: {
        id: params.id,
      },
    },
  };
}
