import api, { API_URL } from './api';

const memoriasApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMemorias: build.query({
      query: (params) => ({
        url: `${API_URL}/memorias`,
        params,
      }),
    }),
  }),
});

export const { useGetMemoriasQuery } = memoriasApi;
