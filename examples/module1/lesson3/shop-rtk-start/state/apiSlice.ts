import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/Product';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Product[], string>({
            query: () => 'products',
        })
    })
});

export const { useGetAllProductsQuery } = productsApi;