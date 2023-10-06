import React, { useEffect } from 'react';
import { Table } from '../Table';
import { Button } from '../Button';
import { useGetConveniosQuery } from '../../redux/reduxQuery/convenios';
import {
  useGetDepartamentosQuery,
  useGetDistritosQuery,
  useGetProviciasQuery,
} from '../../redux/reduxQuery/departamentos';
import { Controller, useForm } from 'react-hook-form';
import { CustomSelect } from '../Select';

const Convenios = () => {
  const form = useForm();
  const { data: normasEmitidas, isLoading, isError } = useGetConveniosQuery('');
  const {
    data: departamentos,
    isLoading: isLoadingDepartamentos,
    isError: isErrorDepartamentos,
  } = useGetDepartamentosQuery('');
  const {
    data: provincias,
    isLoading: isLoadingProvincias,
    isError: isErrorProvincias,
    refetch: refetchProvincias,
  } = useGetProviciasQuery({
    id_departamento: form.watch('departamento') || '',
  });
  const {
    data: distritos,
    isLoading: isLoadingDistritos,
    isError: isErrorDistritos,
    refetch: refetchDistritos,
  } = useGetDistritosQuery('');

  useEffect(() => {
    console.log('departamentos', departamentos);
    form.setValue('provincia', '');
    form.setValue('distrito', '');
    refetchProvincias();
  }, [form.watch('departamento')]);

  useEffect(() => {
    form.setValue('distrito', '');
    refetchDistritos();
  }, [form.watch('provincia')]);

  return normasEmitidas ? (
    <>
      <h3 className="text-4xl text-left mb-4 font-acto font-primary text-primary">
        Listado de convenios:{' '}
      </h3>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de los convenios
        suscritos:
      </p>
      <div className="flex gap-4">
        <Controller
          name="departamento"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              options={departamentos?.map((departamento: any) => ({
                value: departamento.id,
                label: departamento.departamento,
              }))}
              label="Departamento"
              placeholder="Filtrar por departamento"
              className="w-full mb-4"
              {...field}
            />
          )}
        />
        <Controller
          name="provincia"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              options={provincias?.map((provincia: any) => ({
                value: provincia.id,
                label: provincia.provincia,
              }))}
              label="Provincia"
              placeholder="Filtrar por provincia"
              className="w-full mb-4"
              {...field}
            />
          )}
        />
        <Controller
          name="distrito"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              options={distritos?.map((distrito: any) => ({
                value: distrito.id,
                label: distrito.distrito,
              }))}
              label="Distrito"
              placeholder="Filtrar por distrito"
              className="w-full mb-4"
              {...field}
            />
          )}
        />
      </div>
      <div className="flex gap-4">
        <Controller
          name="año"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              options={[
                { value: 2021, label: 2021 },
                { value: 2020, label: 2020 },
                { value: 2019, label: 2019 },
              ]}
              label="Año"
              placeholder="Filtrar por año"
              className="w-full mb-4"
              onChange={(option: any) => field.onChange(option.value)}
              value={field.value}
            />
          )}
        />
        <Controller
          name="mes"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              options={[
                { value: 1, label: 'Enero' },
                { value: 2, label: 'Febrero' },
                { value: 3, label: 'Marzo' },
                { value: 4, label: 'Abril' },
                { value: 5, label: 'Mayo' },
                { value: 6, label: 'Junio' },
                { value: 7, label: 'Julio' },
                { value: 8, label: 'Agosto' },
                { value: 9, label: 'Septiembre' },
                { value: 10, label: 'Octubre' },
                { value: 11, label: 'Noviembre' },
                { value: 12, label: 'Diciembre' },
              ]}
              label="Mes"
              placeholder="Filtrar por mes"
              className="w-full mb-4"
              onChange={(option: any) => field.onChange(option.value)}
              value={field.value}
            />
          )}
        />
        <div className="flex items-center w-96">
          <Button>Buscar</Button>
        </div>
      </div>
      <Table
        columns={[
          {
            Header: 'Descripción',
            accessor: 'descripcion_convenio',
            width: 600,
            canFilter: false,
          },
          {
            Header: 'Ver documento',
            canFilter: false,
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
