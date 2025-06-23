import { apiSlice } from "../api/apiSlice";




export const bmiApi = apiSlice.injectEndpoints({

     endpoints: (builder) => ({
    postBmi: builder.mutation({
      query: (body) => ({
        url: '/public/api/bmistore',
        method: "POST",
        body,
      }),
    }),
  }),




    // endpoints:(builder) => ({
    //     getBmi:builder.query({
    //         query:(id) => `/public/api/bmiu/${id}`
  
    //     })
    // })
});

export const {useGetBmiQuery ,usePostBmiMutation  } = bmiApi;


