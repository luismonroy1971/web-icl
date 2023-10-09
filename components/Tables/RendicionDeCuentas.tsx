import React from 'react';
import { useGetResolucionesQuery } from '../../redux/reduxQuery/resoluciones';
import { Table } from '../Table';
import { Button } from '../Button';
import {
  useGetRendicionesPeriodoQuery,
  useGetRendicionesQuery,
} from '../../redux/reduxQuery/rendiciones';
import { Controller, useForm } from 'react-hook-form';
import { CustomSelect } from '../Select';
import { forEach } from 'lodash';

const RendicionDeCuentas = () => {
  const form = useForm();
  const [params, setParams] = React.useState('');
  const {
    data: normasEmitidas,
    isLoading,
    isError,
    refetch: refetchRendiciones,
  } = useGetRendicionesQuery(params);
  const {
    data: dataPeriodosRendiciones,
    isLoading: isLoadingPeriodosRendiciones,
    isError: isErrorPeriodosRendiciones,
  } = useGetRendicionesPeriodoQuery('');

  const handleSubmit = form.handleSubmit((data) => {
    data.periodo_rendicion = data.periodo_rendicion?.value || '';
    forEach(data, (value, key) => {
      if (value === '' || value === null || value === undefined) {
        delete data[key];
      }
    });
    const params = new URLSearchParams(data).toString();
    setParams(params);
    refetchRendiciones();
  });
  return normasEmitidas ? (
    <>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de las rendiciones de
        cuentas:
      </p>
      <div className="flex gap-4">
        <Controller
          name="periodo_rendicion"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="periodo_rendicion"
              options={dataPeriodosRendiciones?.map((periodo: any) => ({
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
              form.setValue('periodo_rendicion', '');
              setParams('');
              refetchRendiciones();
            }}
          >
            Limpiar
          </Button>
        </div>
      </div>
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
                {row.original.url_rendicion === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
                  <Button
                    onClick={() =>
                      window.open(row.original.url_rendicion, '_blank')
                    }
                  >
                    Ver documento
                  </Button>
                )}
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
