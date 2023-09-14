import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Country, Countrys } from "../../types/types";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getCountriesAll: builder.query<Country[], string>({
      query: () => "/photos",
    }),
    getCountriesName: builder.query<Countrys, any>({
      query: (common) => `/photos/${common}`,
    }),
  }),
});

export const { useGetCountriesAllQuery, useGetCountriesNameQuery } =
  countriesApi;
