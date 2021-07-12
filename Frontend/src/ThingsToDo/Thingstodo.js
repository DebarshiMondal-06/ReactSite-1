import React from 'react';
import data from './data';

const Thingstodo = () => {
  return <section className='our-service container'>
    <h2 className='service-title'> Things To Do </h2>
    <div className='service-content'>
      {
        data.map((items) => {
          return <article className='service-items' key={items.id}>
            <span className="s-title">{items.title}</span>
            <span className="s-paragraph">{items.para}</span>
          </article>
        })
      }
    </div>
  </section>
}

export default Thingstodo;
