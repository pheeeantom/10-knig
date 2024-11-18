import React, { useState } from "react";
import {cn as bem} from '@bem-react/classname';
import './style.css';

function Carousel({active, onChange, list, render}: {active: number, onChange: Function, list: any[], render: Function}) {

  console.log("Carousel");

  const cn = bem('Carousel');

  //const [toLeft, setToLeft] = useState(true);
  //console.log(active);

  return (
    <div className={cn()}>
      <button onClick={() => {
        document.querySelector('.Carousel-content').classList.remove('to-left-come');
        document.querySelector('.Carousel-content').classList.remove('to-right-come');
        document.querySelector('.Carousel-content').classList.add('to-right-gone');
        setTimeout(() => {
          console.log('onRight');
          document.querySelector('.Carousel-content').classList.remove('to-right-gone');
          document.querySelector('.Carousel-content').classList.add('to-right-come');
          onChange(active- 1 < 1 ? list.length : active - 1);
        }, 1000);
      }}>{"<"}</button>
      <div className={cn('content')}>
        {render(Object.assign([], list).find(item => item.id === active))}
      </div>
      <button onClick={() => {
        document.querySelector('.Carousel-content').classList.remove('to-left-come');
        document.querySelector('.Carousel-content').classList.remove('to-right-come');
        document.querySelector('.Carousel-content').classList.add('to-left-gone');
        setTimeout(() => {
          console.log('onLeft');
          document.querySelector('.Carousel-content').classList.remove('to-left-gone');
          document.querySelector('.Carousel-content').classList.add('to-left-come');
          onChange(active + 1 > list.length ? 1 : active + 1);
        }, 1000);
      }}>{">"}</button>
    </div>
  );
}

export default React.memo(Carousel);