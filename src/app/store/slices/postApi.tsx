// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/users`,
    }),
    getPostsById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: `/users`,
        method: "POST",
        body: data,
      }),
    }),
    updatePost: builder.mutation({
      query: (data) => ({
        url: `/users/${data.id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostsByIdQuery, useCreatePostMutation, useUpdatePostMutation, useDeletePostMutation } =
  postApi;
