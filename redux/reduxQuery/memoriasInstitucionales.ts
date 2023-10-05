import api, { API_URL } from './api';

const rendicionesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRendiciones: build.query({
      query: (params) => ({
        url: `${API_URL}/rendiciones`,
        params,
      }),
    }),
  }),
});

export const { useGetRendicionesQuery } = rendicionesApi;
