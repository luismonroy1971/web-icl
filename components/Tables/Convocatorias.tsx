import React from 'react';
import { Table } from '../Table';
import { Button } from '../Button';
import { useGetConvocatoriasQuery } from '../../redux/reduxQuery/convocatorias';

const Convocatorias = () => {
  const {
    data: normasEmitidas,
    isLoading,
    isError,
  } = useGetConvocatoriasQuery('');
  return normasEmitidas ? (
    <>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de las convocatorias:
      </p>
      <Table
        columns={[
          {
            Header: 'N° de convocatoria',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <span className="text-sm font-medium">
                  {row.original.numero_convocatoria}-
                  {row.original.tipo_convocatoria}-
                  {row.original.periodo_convocatoria}
                </span>
              </div>
            ),
          },
          {
            Header: 'Descripción de convocatoria',
            accessor: 'descripcion_convocatoria',
            width: 400,
          },
          {
            Header: 'Aviso',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <Button
                  onClick={() =>
                    window.open(row.original.url_aviso, '_blank')
                  }
                >
                  Ver aviso
                </Button>
              </div>
            ),
          },
          {
            Header: 'Resultado de Evaluación Curricular',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <Button
                  onClick={() =>
                    window.open(row.original.url_resultado_evaluacion_curricular, '_blank')
                  }
                >
                  Ver resultado
                </Button>
              </div>
            ),
          },
          {
            Header: 'Resultado de Examen Virtual',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <Button
                  onClick={() =>
                    window.open(row.original.url_resultado_examen_virtual, '_blank')
                  }
                >
                  Ver resultado
                </Button>
              </div>
            ),
          },
          {
            Header: 'Resultado de Entrevista Virtual',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <Button
                  onClick={() =>
                    window.open(row.original.url_resultado_entrevista_virtual, '_blank')
                  }
                >
                  Ver resultado
                </Button>
              </div>
            ),
          },
          {
            Header: 'Resultado final',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <Button
                  onClick={() =>
                    window.open(row.original.url_puntaje_final, '_blank')
                  }
                >
                  Ver resultado
                </Button>
              </div>
            ),
          },
          {
            Header: 'Estado de convocatoria',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                <span className="text-sm font-lato-bold">
                  {row.original.estado_convocatoria}
                </span>
              </div>
            ),
          }
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

export default Convocatorias;
