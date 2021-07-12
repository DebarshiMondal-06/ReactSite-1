import React, { useEffect, useState } from 'react'
// import Dotenv from 'dotenv';
// Dotenv.config('./config.env');

const HeroSec = () => {
  const [value, setValue] = useState('');
  useEffect(() => {
    if (process.env.REACT_APP_NODE === 'Production') {
      setValue('Production');
    }
    else {
      setValue('Development');
    }
  }, []);

  return <section>
    <article className='hero-sec'>
      <div className='text-section'>
        <h1>{value}</h1>
        <p>&nbsp;Build from Heart&nbsp;</p>
      </div>
      <div className='img-section'>
        <div class="parallax-window" data-parallax="scroll" data-image-src="https://static.wixstatic.com/media/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg/v1/fill/w_980,h_731,al_c,q_85,usm_0.66_1.00_0.01/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.webp"></div>
      </div>
    </article>
  </section>
}

export default HeroSec;
