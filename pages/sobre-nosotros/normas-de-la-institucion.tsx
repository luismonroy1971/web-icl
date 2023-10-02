import React from 'react';
import { Layout } from '../../components/Layout';
import { Banner } from '../../components/Banner';
import { SectionBanner } from '../../components/SectionBanner';
import { Table } from '../../components/Table';
import { useGetNormasQuery } from '../../redux/reduxQuery/normas';

const NormasDeLaInstitucion = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre de documento',
        accessor: 'denominacion_norma', // <-- This is the string accessor
        width: 400,
      },
      {
        Header: 'Tipo de documento',
        accessor: 'tipo_norma',
        width: 200,
      },
      {
        Header: 'Ver documento',
        width: 200,
        Cell: ({ row }: any) => (
          <a
            href="#"
            className="text-white bg-primary rounded-md px-2 py-2 w-full text-center font-lato"
            onClick={() => {
              window.open(row.original.url_norma, '_blank');
            }}
          >
            Ver documento
          </a>
        ),
      },
    ],
    []
  );
  const { data: normasData, error: normasError, isLoading: normasIsLoading } = useGetNormasQuery('');
  return (
    <Layout>
      <SectionBanner
        title="Normas de la institución"
        description="En el Instituto Catastral de Lima, nos regimos por estándares y regulaciones rigurosos para garantizar la integridad, la transparencia y la eficacia en nuestra labor. 
Estas normas son la base de nuestro compromiso con la excelencia y el servicio a la comunidad de Lima."
        caption="Sobre nosotros"
      />
      <h3></h3>
      <div className="mx-8 pb-12">
        <Table columns={columns} data={normasData} loading={normasIsLoading} />
      </div>
    </Layout>
  );
};

export default NormasDeLaInstitucion;
