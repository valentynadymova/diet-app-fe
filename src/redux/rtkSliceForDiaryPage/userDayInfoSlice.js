import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userDayInfoApi = createApi({
  reducerPath: 'userDayInfoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://diet-app-be.onrender.com/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['userDayInfo'],
  endpoints: builder => ({
    fetchUserDayInfo: builder.query({
      query: day => `/diary/${day}`,
      providesTags: ['userDayInfo'],
    }),
    addProduct: builder.mutation({
      query: prodObj => ({
        url: `/diary/add`,
        method: 'POST',
        body: prodObj,
      }),
      invalidatesTags: ['userDayInfo'],
    }),
    deleteProduct: builder.mutation({
      query: prodObj => ({
        url: `/diary/remove`,
        method: 'DELETE',
        body: prodObj,
      }),
      invalidatesTags: ['userDayInfo'],
    }),
  }),
});

export const {
  useFetchUserDayInfoQuery,
  useDeleteProductMutation,
  useAddProductMutation,
} = userDayInfoApi;
