import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery ({
            baseUrl: 'https://shazam-core7.p.rapidapi.com/',
            prepareHeaders: (headers) => {
                headers.set('x-rapidapi-key', "8ee9925c3emsh28988b89e58b2fep1af706jsn323dbb2c5931");

                return headers;
            }
        }),

        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/get-top-songs-in-world'}),
        })
    })

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;