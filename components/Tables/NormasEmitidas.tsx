import React from 'react';
import {
  useGetResolucionesPeriodoQuery,
  useGetResolucionesQuery,
} from '../../redux/reduxQuery/resoluciones';
import { Table } from '../Table';
import { Button } from '../Button';
import { CustomSelect } from '../Select';
import { Controller, useForm } from 'react-hook-form';
import {
  useGetAreasQuery,
  useGetTiposDocumentoQuery,
} from '../../redux/reduxQuery/utils';

const NormasEmitidas = () => {
  const form = useForm();
  const {
    data: normasEmitidas,
    isLoading,
    isError,
  } = useGetResolucionesQuery('');
  const {
    data: dataPeriodosResoluciones,
    isLoading: isLoadingPeriodosResoluciones,
    isError: isErrorPeriodosResoluciones,
  } = useGetResolucionesPeriodoQuery('');

  const {
    data: dataTiposDocumento,
    isLoading: isLoadingTiposDocumento,
    isError: isErrorTiposDocumento,
  } = useGetTiposDocumentoQuery('');

  const {
    data: dataAreas,
    isLoading: isLoadingAreas,
    isError: isErrorAreas,
  } = useGetAreasQuery('');

  return normasEmitidas ? (
    <>
      <h3 className="text-4xl text-left mb-4 font-acto font-primary text-primary">
        Listado de normas:{' '}
      </h3>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de las RESOLUCIONES
        emitidas por nuestra entidad:
      </p>
      <div className="flex gap-4">
        <Controller
          name="id_tipo_documento"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="id_tipo_documento"
              options={dataTiposDocumento?.map((tipoDocumento: any) => ({
                value: tipoDocumento.id,
                label: tipoDocumento.descripcion_tipo_documento,
              }))}
              label="Tipo de documento"
              placeholder="Tipo de documento"
              className="w-full mb-4"
            />
          )}
        />
        <Controller
          name="periodo_resolucion"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="periodo_resolucion"
              options={dataPeriodosResoluciones?.map((periodo: any) => ({
                value: periodo,
                label: periodo,
              }))}
              label="Año"
              placeholder="Seleccione un año"
              className="w-full mb-4"
            />
          )}
        />
        <Controller
          name="id_area"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="id_area"
              options={dataAreas?.map((area: any) => ({
                value: area.id,
                label: area.descripcion_area,
              }))}
              label="Area"
              placeholder="Seleccione un area"
              className="w-full mb-4"
            />
          )}
        />
      </div>
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

export default NormasEmitidas;
