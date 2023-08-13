import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '57efae10b9mshded4dacf36da577p1e07fejsnd7db06df18fc',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '57efae10b9mshded4dacf36da577p1e07fejsnd7db06df18fc');
            
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}`}),
        getArtistDetails: builder.query({ query: (artistid ) => `/artists/details?artistid=${artistid}`}),
        getSongsByCountry: builder.query({query: (countryCode) => `/charts/country?country_code=${countryCode}`}),
    }),
        
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
} = shazamCoreApi;