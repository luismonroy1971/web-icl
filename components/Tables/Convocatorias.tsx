import React from 'react';
import { Table } from '../Table';
import { Button } from '../Button';
import {
  useGetConvocatoriasPeriodoQuery,
  useGetConvocatoriasQuery,
} from '../../redux/reduxQuery/convocatorias';
import { Controller, useForm } from 'react-hook-form';
import { CustomSelect } from '../Select';
import { useGetTiposDocumentoQuery } from '../../redux/reduxQuery/utils';

const Convocatorias = () => {
  const form = useForm();
  const {
    data: normasEmitidas,
    isLoading,
    isError,
  } = useGetConvocatoriasQuery('');
  const {
    data: dataTiposDocumento,
    isLoading: isLoadingTiposDocumento,
    isError: isErrorTiposDocumento,
  } = useGetTiposDocumentoQuery('');
  const {
    data: dataPeriodosConvocatorias,
    isLoading: isLoadingPeriodosConvocatorias,
    isError: isErrorPeriodosConvocatorias,
  } = useGetConvocatoriasPeriodoQuery('');

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
  });
  return normasEmitidas ? (
    <>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de las convocatorias:
      </p>
      <div className="flex gap-4">
        <Controller
          name="Tipo de documento"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="tipo_documento"
              options={dataTiposDocumento?.map((tipoDocumento: any) => ({
                value: tipoDocumento.id,
                label: tipoDocumento.descripcion_tipo_documento,
              }))}
              label="Tipo de documento"
              placeholder="Filtrar por tipo de documento"
              className="w-full mb-4"
            />
          )}
        />

        <Controller
          name="Año"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="periodo"
              options={dataPeriodosConvocatorias?.map((periodo: any) => ({
                value: periodo,
                label: periodo,
              }))}
              label="Año"
              placeholder="Filtrar por periodo"
              className="w-full mb-4"
            />
          )}
        />
        <div className="flex w-fit gap-4 h-fit justify-end items-end my-auto">
          <Button onClick={handleSubmit}>Buscar</Button>
          <Button
            color="border border-primary text-primary"
            onClick={() => {
              form.reset();
            }}
          >
            Limpiar
          </Button>
        </div>
      </div>
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
                  onClick={() => window.open(row.original.url_aviso, '_blank')}
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
                    window.open(
                      row.original.url_resultado_evaluacion_curricular,
                      '_blank'
                    )
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
                    window.open(
                      row.original.url_resultado_examen_virtual,
                      '_blank'
                    )
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
                    window.open(
                      row.original.url_resultado_entrevista_virtual,
                      '_blank'
                    )
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

export default Convocatorias;
