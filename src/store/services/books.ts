import { fetchBaseQuery, TypedUseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { Book } from "../reducers/books";

export const booksAPI = createApi({
    reducerPath: 'booksAPI',
    baseQuery: fetchBaseQuery({baseUrl: '/api/items'}),
    endpoints: (build) => ({
        fetchBooks: build.query<Book[], void>({
            query: () => ``
        })
    })
});

export const { useFetchBooksQuery }: {
    useFetchBooksQuery: TypedUseQuery<Book[], void, any>
} = booksAPI;