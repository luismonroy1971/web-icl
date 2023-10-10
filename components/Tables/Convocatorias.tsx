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
import { forEach } from 'lodash';

const Convocatorias = () => {
  const form = useForm();
  const [params, setParams] = React.useState('');
  const {
    data: normasEmitidas,
    isLoading,
    isError,
    refetch: refetchConvocatorias,
  } = useGetConvocatoriasQuery(params);
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
    data.id_tipo_documento = data.id_tipo_documento?.value || '';
    data.periodo_convocatoria = data.periodo_convocatoria?.value || '';
    forEach(data, (value, key) => {
      if (value === '' || value === null || value === undefined) {
        delete data[key];
      }
    });
    const params = new URLSearchParams(data).toString();

    setParams(params);
    refetchConvocatorias();
  });
  return normasEmitidas ? (
    <>
      <p className="text-lg text-left mb-4 font-lato">
        A continuación, se presenta un listado detallado de las convocatorias:
      </p>
      <div className="flex sm:flex-row flex-col gap-4">
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
          name="periodo_convocatoria"
          control={form.control}
          render={({ field }) => (
            <CustomSelect
              {...field}
              id="periodo_convocatoria"
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
              form.setValue('id_tipo_documento', '');
              form.setValue('periodo_convocatoria', '');
              setParams('');
              refetchConvocatorias();
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
            width: window.innerWidth > 768 ? window.innerWidth * 0.1 : 120,
          },
          {
            Header: 'Descripción de convocatoria',
            accessor: 'descripcion_convocatoria',
            width: window.innerWidth > 768 ? window.innerWidth * 0.2 : 360,
          },
          {
            Header: 'Aviso',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                {row.original.url_aviso === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
                  <Button
                    onClick={() =>
                      window.open(row.original.url_aviso, '_blank')
                    }
                  >
                    Ver aviso
                  </Button>
                )}
              </div>
            ),
            width: window.innerWidth > 768 ? window.innerWidth * 0.1 : 120,
          },
          {
            Header: 'Resultado de Evaluación Curricular',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                {row.original.url_resultado_evaluacion_curricular === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
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
                )}
              </div>
            ),
            width: window.innerWidth > 768 ? window.innerWidth * 0.1 : 120,
          },
          {
            Header: 'Resultado de Examen Virtual',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                {row.original.url_resultado_examen_virtual === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
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
                )}
              </div>
            ),
            width: window.innerWidth > 768 ? window.innerWidth * 0.1 : 120,
          },
          {
            Header: 'Resultado de Entrevista Virtual',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                {row.original.url_resultado_entrevista_virtual === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
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
                )}
              </div>
            ),
            width: window.innerWidth > 768 ? window.innerWidth * 0.1 : 120,
          },
          {
            Header: 'Resultado final',
            Cell: ({ row }: any) => (
              <div className="flex items-center">
                {row.original.url_puntaje_final === '' ? (
                  <span className="text-sm font-medium ">No hay documento</span>
                ) : (
                  <Button
                    onClick={() =>
                      window.open(row.original.url_puntaje_final, '_blank')
                    }
                  >
                    Ver resultado
                  </Button>
                )}
              </div>
            ),
            width: window.innerWidth > 768 ? window.innerWidth * 0.1 : 120,
          },
          {
            Header: 'Estado de convocatoria',
            Cell: ({ row }: any) => (
              <div className="flex items-center w-full my-auto h-full">
                <span className="text-sm font-lato-bold my-auto h-full">
                  {row.original.estado_convocatoria}
                </span>
              </div>
            ),
            width: window.innerWidth > 768 ? window.innerWidth * 0.1 : 120,
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
