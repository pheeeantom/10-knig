import React, { useEffect } from "react";
import {cn as bem} from '@bem-react/classname';
import './style.css';
import { Book } from "../../store/reducers/books";

function Item({item}: Readonly<{item: Book}>) {

  console.log("Item");

  const cn = bem('Item');
  console.log(item);

  return (
    <div className={cn()}>
      <div><img className={cn('pic')} src={'pics/' + item.picture}/></div>
      <div className={cn('name')}>{item.name}</div>
      <div className={cn('author')}>{item.author}</div>
      <div className={cn('pages')}>Страниц: {item.pages}</div>
      <div className={cn('year')}>Год: {item.year}</div>
      <div className={cn('theme')}>Тема: {item.theme}</div>
      {item.cites.length ? <br/> : ''}
      {item.cites.map((cite, i) => (<div key={i} className={cn('cite')}><q>{cite}</q></div>))}
    </div>
  );
}

export default React.memo(Item);