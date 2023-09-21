import { api } from '../baseApi';

export const brandPageStyle2Api = api.injectEndpoints({
    endpoints: (builder) => ({
        // TODO: fx any
        getBrandPageStyle2Data: builder.query<any, {scheme_id: number, vendor_id: string}>({
            query: ({scheme_id, vendor_id}) => ({
                url: `/BrandPageStyle${scheme_id + 1}/vendor_id=${vendor_id}`,
            }),
        }),
        // createData: builder.mutation<void, TestData>({
        //     query: (body) => ({
        //         url: `/test`,
        //         method: 'POST',
        //         body,
        //     }),
        // }),
        // updateData: builder.mutation<void, { id: string; body: TestData; }>({
        //     query: ({ id, body }) => ({
        //         url: `/test/${id}`,
        //         method: 'PATCH',
        //         body,
        //     }),
        // }),
        // deleteData: builder.mutation<void, { id: string }>({
        //     query: ({ id }) => ({
        //         url: `/test/${id}`,
        //         method: 'DELETE',
        //     }),
        // }),
    }),
});
  
export const {
    useGetBrandPageStyle2DataQuery,
    // useCreateDataMutation,
    // useUpdateDataMutation,
    // useDeleteDataMutation,
} = brandPageStyle2Api;
