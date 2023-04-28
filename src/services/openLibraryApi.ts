import * as rtkQuery from '@reduxjs/toolkit/dist/query/react';

import { OPEN_LIBRARY_API } from '../constants/api';
import { ResponseBookData, ResponseData } from '../types/responseData';

export type TypeRTKQuery = typeof rtkQuery & { default?: unknown };
const { createApi, fetchBaseQuery } = ((rtkQuery as TypeRTKQuery).default ??
  rtkQuery) as typeof rtkQuery;

export const openLibraryApi = createApi({
  reducerPath: 'openLibraryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: OPEN_LIBRARY_API.baseQuery,
  }),
  endpoints: (builder) => ({
    searchBooks: builder.query<{ docs: ResponseData[] }, string>({
      query: (searchValue) =>
        `${OPEN_LIBRARY_API.searchEndpoint}${searchValue}${OPEN_LIBRARY_API.searchLimit}`,
    }),
    getBookByKey: builder.query<ResponseBookData, string>({
      query: (bookKey) => `${OPEN_LIBRARY_API.bookEndpoint}${bookKey}.json`,
    }),
  }),
});

export const { useSearchBooksQuery, useLazyGetBookByKeyQuery } = openLibraryApi;
