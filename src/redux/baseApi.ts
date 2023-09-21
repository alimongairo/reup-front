import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.VITE_PUBLIC_DB_PATH }), // TODO: change path
  endpoints: () => ({}),
});
