import React from 'react';
import { Table } from '../Table';
import { Button } from '../Button';
import { useGetConveniosQuery } from '../../redux/reduxQuery/convenios';

const Convenios = () => {
  const { data: normasEmitidas, isLoading, isError } = useGetConveniosQuery('');
  return normasEmitidas ? (
    <>
      <h3 className="text-4xl text-left mb-4 font-acto font-primary text-primary">
        Listado de convenios:{' '}
      </h3>
      <p className="text-lg text-left mb-4 font-lato">
      A continuación, se presenta un listado detallado de los convenios suscritos:
      </p>
      <Table
        columns={[
          {
            Header: 'Descripción',
            accessor: 'descripcion_convenio',
            width: 600,
          },
          {
            Header: 'Ver documento',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <Button
                  onClick={() =>
                    window.open(row.original.url_resolucion, '_blank')
                  }
                >
                  Ver documento
                </Button>
              </div>
            ),
          },
        ]}
        data={normasEmitidas}
        loading={isLoading}
      />
    </>
  ) : (
    <div className="flex justify-center items-center h-64">
      {isError ? (
        <span className="text-red-500">
          Ocurrió un error al cargar las normas emitidas
        </span>
      ) : (
        <span className="text-blue-500">Cargando normas emitidas...</span>
      )}
    </div>
  );
};

export default Convenios;
