import api, { API_URL } from './api';

const convocatoriasApi = api.injectEndpoints({
  endpoints: (build) => ({
    getConvocatorias: build.query({
      query: (params) => ({
        url: `${API_URL}/convocatorias`,
        params,
      }),
    }),
  }),
});

export const { useGetConvocatoriasQuery } = convocatoriasApi;
