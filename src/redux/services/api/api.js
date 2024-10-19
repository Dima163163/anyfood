import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
  tagTypes: ['Reviews'],
  endpoints: (builder) => ({
    getRestaurants: builder.query({ query: () => '/restaurants' }),
    getRestaurantById: builder.query({
      query: (restId) => `/restaurant/${restId}`
    }),
    getDishesByRestaurant: builder.query({
      query: (restId) => `/dishes?restaurantId=${restId}`
    }),
    getDishById: builder.query({ query: (dishId) => `/dish/${dishId}` }),
    getUsers: builder.query({ query: () => '/users/' }),
    getReviewsByRestaurantId: builder.query({
      query: (restId) => `/reviews?restaurantId=${restId}`,
      providesTags: (restId) => [{ type: 'Reviews', id: restId }]
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        method: 'POST',
        body: review,
        url: `/review/${restaurantId}`
      }),
      invalidatesTags: ({ restaurantId }) => [
        { type: 'Reviews', id: restaurantId }
      ]
    }),
    editReview: builder.mutation({
      query: ({ reviewId}) => ({
        method: 'PATCH',
        url: `/review/${reviewId}`,
      })
    })
  })
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetDishesByRestaurantQuery,
  useGetDishByIdQuery,
  useGetUsersQuery,
  useGetReviewsByRestaurantIdQuery,
  useAddReviewMutation,
  useEditReviewMutation
} = apiSlice;
