import { api } from '../baseApi';
import { TestData, TestRequest } from '../../types/testTypes';

export const testApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getData: builder.query<TestData, TestRequest>({
            query: (params) => ({
                url: '/test',
                params,
            }),
        }),
        createData: builder.mutation<void, TestData>({
            query: (body) => ({
                url: `/test`,
                method: 'POST',
                body,
            }),
        }),
        updateData: builder.mutation<void, { id: string; body: TestData; }>({
            query: ({ id, body }) => ({
                url: `/test/${id}`,
                method: 'PATCH',
                body,
            }),
        }),
        deleteData: builder.mutation<void, { id: string }>({
            query: ({ id }) => ({
                url: `/test/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});
  
export const {
    useGetDataQuery,
    useCreateDataMutation,
    useUpdateDataMutation,
    useDeleteDataMutation,
} = testApi;
