import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { OPEN_LIBRARY_API } from '../constants/api';
import { ResponseBookData, ResponseData } from '../types/responseData';

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
