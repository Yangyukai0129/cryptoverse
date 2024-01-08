import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';

const baseUrl = 'd'
// 'https://news67.p.rapidapi.com';

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            // 在這裡設置你的 headers
            headers.set('X-RapidAPI-Key', 'ba75c921aemsh3e3c4266f5200a1p14abadjsna2fd703994c8');
            headers.set('X-RapidAPI-Host', 'news67.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (count) => `/v2/topic-search?languages=en&search=crypto&batchSize=${count}`,
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;