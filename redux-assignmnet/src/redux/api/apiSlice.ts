import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["users", "books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({ url: "/books" }),
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (id) => ({ url: `/book/${id}` }),
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: "book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const { useGetBooksQuery, useGetSingleBookQuery, usePostBookMutation } =
  api;
