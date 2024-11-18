import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLayout from './components/page-layout';
import Head from './components/head';
import { useFetchBooksQuery } from './store/services/books';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './components/spinner';
import { Book, setId } from './store/reducers/books';
import Carousel from './components/carousel';
import Item from './components/item';

function App() {

    console.log("App");

    const dispatch = useDispatch();

    const select = useSelector(state => ({
        id: (state as any).booksReducer.id,
    }));

    const callbacks = {
        changeId: useCallback((id: number) => {
            dispatch(setId(id));
        }, [dispatch]),
    };

    const renders = {
        book: useCallback((item: Book) => (
          <Item key={item.id} item={item}/>
        ), []),
    };

    const {data, error, isLoading} = useFetchBooksQuery();
    console.log(data, error, isLoading);

    const first = useRef(true);

    useEffect(() => {
        console.log(first.current, data);
        if (data && first.current) {
            first.current = false;
            dispatch(setId(data[0].id));
        }
    }, [data]);
    
    return (
        <Routes>
            <Route path={"/"} element={
                <PageLayout>
                    <Head title="Топ 10 книг, изменивших мир"/>
                    <Spinner active={isLoading || !select.id}>
                        {
                            <>
                                {error ? <div>{error.message}</div> :
                                    <Carousel active={select.id} list={data} render={renders.book} onChange={callbacks.changeId}/>}
                            </>
                        }
                    </Spinner>
                </PageLayout>
            }/>
        </Routes>
    );
}

export default React.memo(App);