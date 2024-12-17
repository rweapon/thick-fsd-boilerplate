import { RootState } from "@app/appStore";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export interface ICustomError {
  data: {
    error: string;
  };
  status: number;
}

const baseQuery = fetchBaseQuery({
  baseUrl: "example.com",
  // prepareHeaders: (headers, { getState }) => {
  //   const token = (<RootState>getState()).auth.token;
  //   if (token) {
  //     headers.set("Authorization", `Bearer ${token}`);
  //   }
  //   return headers;
  // },
}) as BaseQueryFn<string | FetchArgs, unknown, ICustomError, object>;

export const emptySplitApi = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
