import React from 'react';
import { Table } from '../Table';
import { Button } from '../Button';
import { useGetMemoriasQuery } from '../../redux/reduxQuery/memoriasInstitucionales';

const MemoriasInstitucionales = () => {
  const {
    data: normasEmitidas,
    isLoading,
    isError,
  } = useGetMemoriasQuery('')
  return normasEmitidas ? (
    <>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de las rendiciones de
        cuentas:
      </p>
      <Table
        columns={[
          {
            Header: 'Año',
            accessor: 'periodo_memoria',
          },
          {
            Header: 'Descripción',
            accessor: 'descripcion_memoria',
            width: 400,
          },
          {
            Header: 'Ver documento',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <Button
                  onClick={() =>
                    window.open(row.original.url_memoria, '_blank')
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

export default MemoriasInstitucionales;
