import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            // 在這裡設置你的 headers
            headers.set('X-RapidAPI-Key', 'ba75c921aemsh3e3c4266f5200a1p14abadjsna2fd703994c8');
            headers.set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => `/coins?limit=${count}`,
        }),
    }),
});

export const { useGetCryptosQuery } = cryptoApi