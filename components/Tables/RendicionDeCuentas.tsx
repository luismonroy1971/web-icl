import React from 'react';
import { useGetResolucionesQuery } from '../../redux/reduxQuery/resoluciones';
import { Table } from '../Table';
import { Button } from '../Button';
import { useGetRendicionesQuery } from '../../redux/reduxQuery/rendiciones';

const RendicionDeCuentas = () => {
  const {
    data: normasEmitidas,
    isLoading,
    isError,
  } = useGetRendicionesQuery('');
  return normasEmitidas ? (
    <>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de las rendiciones de
        cuentas:
      </p>
      <Table
        columns={[
          {
            Header: 'Nombre de la rendición',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <span className="text-sm font-medium">
                  {row.original.descripcion_rendicion}
                </span>
              </div>
            ),
            width: 800,
          },
          {
            Header: 'Ver documento',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <Button
                  onClick={() =>
                    window.open(row.original.url_rendicion, '_blank')
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

export default RendicionDeCuentas;
