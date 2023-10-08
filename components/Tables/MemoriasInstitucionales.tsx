import React from 'react';
import { Table } from '../Table';
import { Button } from '../Button';
import {
  useGetMemoriasPeriodoQuery,
  useGetMemoriasQuery,
} from '../../redux/reduxQuery/memoriasInstitucionales';
import { Controller, useForm } from 'react-hook-form';
import { CustomSelect } from '../Select';

const MemoriasInstitucionales = () => {
  const form = useForm();
  const { data: normasEmitidas, isLoading, isError } = useGetMemoriasQuery('');
  const {
    data: dataPeriodosMemorias,
    isLoading: isLoadingPeriodosMemorias,
    isError: isErrorPeriodosMemorias,
  } = useGetMemoriasPeriodoQuery('');
  return normasEmitidas ? (
    <>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de las rendiciones de
        cuentas:
      </p>
      <div className="flex gap-4">
        <Controller
          name="Año"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="periodo"
              options={dataPeriodosMemorias?.map((periodo: any) => ({
                value: periodo,
                label: periodo,
              }))}
              label="Año"
              placeholder="Filtrar por año"
              className="w-full mb-4"
            />
          )}
        />
      </div>
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
