import React from 'react';
import { Layout } from '../../components/Layout';
import { Banner } from '../../components/Banner';
import { SectionBanner } from '../../components/SectionBanner';
import { Table } from '../../components/Table';
import { useGetNormasQuery } from '../../redux/reduxQuery/normas';
import MiComponenteDeFiltro from '../../components/Filter';
import { Button } from '../../components/Button';

const NormasDeLaInstitucion = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre de documento',
        accessor: 'denominacion_norma', // <-- This is the string accessor
        width: window.innerWidth > 768 ? window.innerWidth * 0.53 : 200,
      },
      {
        Header: 'Tipo de documento',
        accessor: 'tipo_norma',
        canFilter: true,
        width: window.innerWidth > 768 ? window.innerWidth * 0.2 : window.innerWidth > 1800 ? window.innerWidth * 0.4 : 200,
      },
      {
        Header: 'Ver documento',
        canFilter: false,
        width: window.innerWidth > 768 ? window.innerWidth * 0.2 : window.innerWidth > 1800 ? window.innerWidth * 0.4 : 200,
        Cell: ({ row }: any) =>
          row.original.url_norma === '' ? (
            <span className="text-sm font-medium ">No hay documento</span>
          ) : (
            <Button
              onClick={() => window.open(row.original.url_norma, '_blank')}
            >
              Ver documento
            </Button>
          ),
      },
    ],
    []
  );
  const {
    data: normasData,
    error: normasError,
    isLoading: normasIsLoading,
  } = useGetNormasQuery('');
  return (
    <Layout>
      <SectionBanner
        title="Normas de la institución"
        description="En el Instituto Catastral de Lima, nos regimos por estándares y regulaciones rigurosos para garantizar la integridad, la transparencia y la eficacia en nuestra labor. 
Estas normas son la base de nuestro compromiso con la excelencia y el servicio a la comunidad de Lima."
        caption="Sobre nosotros"
      />
      <h3></h3>
      <div className="mx-8 pb-12 mt-12">
        {normasData?.length > 0 && (
          <Table columns={columns} data={normasData} />
        )}
      </div>
    </Layout>
  );
};

export default NormasDeLaInstitucion;
