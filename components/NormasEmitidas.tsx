import React from 'react';
import { useGetResolucionesQuery } from '../redux/reduxQuery/resoluciones';
import { Table } from './Table';

const NormasEmitidas = () => {
  const {
    data: normasEmitidas,
    isLoading,
    isError,
  } = useGetResolucionesQuery('');
  return (
    <Table
      columns={[
        {
          Header: 'N° de documento',
          Cell: ({ row }: any) => (
            <div className="flex items-center">
              <span className="text-sm font-medium">
                {row.original.numero_resolucion}
              </span>
              <span className="text-xs font-light ml-2">
                {row.original.periodo_resolucion}
                </span>
            </div>
          ),
        },
        {
            Header: 'Sumilla',
            accessor: 'sumilla_resolucion',
            width: 800
        },
        {
            Header: 'Ver documento',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <a
                  href={row.original.url_documento_resolucion}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Ver documento
                </a>
              </div>
            ),
        }
      ]}
      data={normasEmitidas}
      loading={isLoading}
    />
  );
};

export default NormasEmitidas;
