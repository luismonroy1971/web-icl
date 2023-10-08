import React from 'react';
import { useGetResolucionesQuery } from '../../redux/reduxQuery/resoluciones';
import { Table } from '../Table';
import { Button } from '../Button';
import { useGetDirectivasPeriodoQuery, useGetDirectivasQuery } from '../../redux/reduxQuery/directivas';
import { Controller, useForm } from 'react-hook-form';
import { useGetTiposDocumentoQuery } from '../../redux/reduxQuery/utils';
import { CustomSelect } from '../Select';

const GestionNormativa = () => {
  const form = useForm();
  const {
    data: gestionNormativaData,
    isLoading,
    isError,
  } = useGetDirectivasQuery('');
  const {
    data: dataTiposDocumento,
    isLoading: isLoadingTiposDocumento,
    isError: isErrorTiposDocumento,
  } = useGetTiposDocumentoQuery('');
  const {
    data: dataPeriodosDirectivas,
    isLoading: isLoadingPeriodosDirectivas,
    isError: isErrorPeriodosDirectivas,
  } = useGetDirectivasPeriodoQuery('');
  return gestionNormativaData ? (
    <>
      <h3 className="text-4xl text-left mb-4 font-acto font-primary text-primary">
        Listado de normas:{' '}
      </h3>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de las directivas
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
              placeholder="Filtrar por tipo de documento"
              className="w-full mb-4"
            />
          )}
        />
        <Controller
          name="periodo"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="periodo"
              options={dataPeriodosDirectivas?.map((periodo: any) => ({
                value: periodo,
                label: periodo,
              }))}
              label="Periodo"
              placeholder="Filtrar por periodo"
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
              options={gestionNormativaData?.map((area: any) => ({
                value: area.id_area,
                label: area.area,
              }))}
              label="Área"
              placeholder="Filtrar por área"
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
