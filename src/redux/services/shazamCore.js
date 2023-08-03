import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '57efae10b9mshded4dacf36da577p1e07fejsnd7db06df18fc',
//       'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '57efae10b9mshded4dacf36da577p1e07fejsnd7db06df18fc');
            
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/get-top-songs-in-world'})
    })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;