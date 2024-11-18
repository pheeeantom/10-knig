import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Book = {
    id: number,
    name: string,
    author: string,
    cites: string[],
    pages: number,
    year: string,
    theme: string,
    picture: string,
}

type BooksState = {
    id: number,
}

const initialState: BooksState = {
    id: undefined,
};

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setId(state, action: PayloadAction<number>) {
            state.id = action.payload;
        },
    }
});

const { actions, reducer } = booksSlice;

// export individual action creator functions
export const { setId } = actions;

// often the reducer is a default export, but that doesn't matter
export default reducer;