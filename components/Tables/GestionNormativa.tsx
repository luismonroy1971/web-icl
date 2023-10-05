import React from 'react';
import { useGetResolucionesQuery } from '../../redux/reduxQuery/resoluciones';
import { Table } from '../Table';
import { Button } from '../Button';
import { useGetDirectivasQuery } from '../../redux/reduxQuery/directivas';

const GestionNormativa = () => {
  const {
    data: gestionNormativaData,
    isLoading,
    isError,
  } = useGetDirectivasQuery('');
  return gestionNormativaData ? (
    <>
      <h3 className="text-4xl text-left mb-4 font-acto font-primary text-primary">
        Listado de normas:{' '}
      </h3>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de las directivas
        emitidas por nuestra entidad:
      </p>
      <Table
        columns={[
          {
            Header: 'N° de documento',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <span className="text-sm font-medium">
                  {row.original.numero_resolucion}-
                  {row.original.periodo_resolucion}-{row.original.id_area}
                  -ICL/MML
                </span>
              </div>
            ),
          },
          {
            Header: 'Sumilla',
            accessor: 'sumilla_resolucion',
            width: 800,
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <span className="text-sm font-medium">
                  {row.original.sumilla_resolucion}
                </span>
              </div>
            ),
          },
          {
            Header: 'Ver documento',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <Button
                  onClick={() =>
                    window.open(row.original.url_documento_resolucion, '_blank')
                  }
                >
                  Ver documento
                </Button>
              </div>
            ),
          },
        ]}
        data={gestionNormativaData}
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

export default GestionNormativa;
