import api, { API_URL } from './api';

const resolucionesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getResoluciones: build.query({
      query: (params) => ({
        url: `${API_URL}/resoluciones`,
        params,
      }),
    }),
    getResolucionesByParams: build.query({
      query: (params) => ({
        url: `${API_URL}/resoluciones`,
        params,
      }),
    }),
  }),
});

export const { useGetResolucionesQuery } = resolucionesApi;
