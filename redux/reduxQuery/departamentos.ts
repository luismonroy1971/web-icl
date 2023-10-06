import api, { API_URL } from './api';

const departamentosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDepartamentos: build.query({
      query: (params) => ({
        url: `${API_URL}/departamentosconvenio`,
        params,
      }),
    }),
    getProvicias: build.query({
      query: (params) => ({
        url: `${API_URL}/provinciasconvenio?id_departamento=${params.id_departamento}`,
        params,
      }),
    }),
    getDistritos: build.query({
      query: (params) => ({
        url: `${API_URL}/distritosconvenio?id_departamento=${params.id_departamento}&id_provincia=${params.id_provincia}`,
        params,
      }),
    }),
  }),
});

export const {
  useGetDepartamentosQuery,
  useGetProviciasQuery,
  useGetDistritosQuery,
} = departamentosApi;
