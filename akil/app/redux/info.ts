'use client';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const opportunitiesApi = createApi({
    reducerPath:'oppurtunities',
    baseQuery:fetchBaseQuery({baseUrl:"https://akil-backend.onrender.com/"}),
    endpoints:(builder) => ({
        getAllOpportunity:builder.query({
            query:() => 'opportunities/search',
        }),

        getOpportunityById:builder.query({
            query:(id) => `opportunities/${id}`,
        }), 


    })
})



export const {useGetAllOpportunityQuery, useGetOpportunityByIdQuery} = opportunitiesApi;