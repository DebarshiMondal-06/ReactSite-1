import React from 'react';
import data from './data';

const Service = () => {
  return <section className='our-service container'>
    <h2 className='service-title'> Our Services </h2>
    <div className='service-content'>
      {
        data.map((items) => {
          return <article className='service-items' key={items.id}>
            <span className="s-icon"></span>
            <span><i className={`icons ${items.icon}`}></i></span>
            <span className="s-title">{items.title}</span>
            <span className="s-paragraph">{items.para}</span>
          </article>
        })
      }
    </div>
  </section>
}

export default Service;
