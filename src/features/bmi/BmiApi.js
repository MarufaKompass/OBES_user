import { apiSlice } from "../api/apiSlice";

export const bmiApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postBmi: builder.mutation({
      query: ({data, role}) => ({
        url: `/public/api/${role}/bmistore`,
        method: "POST",
        body: data,
      }),
    }),

    getBmi: builder.query({
      query: ({id}) => `/public/api/bmiu/${id}`,
    }),
  }),
});

export const { useGetBmiQuery, usePostBmiMutation } = bmiApi;
