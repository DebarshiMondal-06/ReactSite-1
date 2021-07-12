import React, { useEffect, useState } from 'react'
import ReviewData from './data';


const Review = () => {
  const [index, setIndex] = useState(0);
  const { para } = ReviewData[index];


  useEffect(() => {
    if (index < ReviewData.length - 1) {
      setTimeout(() => {
        setIndex(index + 1);
      }, 3000);
    } else {
      setIndex(0);
    }
  }, [index]);

  return <section>
    <div className='review-section'>
      <div
        class="parallax-window"
        data-parallax="scroll"
        data-image-src="https://static.wixstatic.com/media/a9ff3b_75dfd28a431049f39b6f85be15a1820e~mv2_d_2500_1829_s_2.jpg/v1/fill/w_980,h_731,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_75dfd28a431049f39b6f85be15a1820e~mv2_d_2500_1829_s_2.webp">

        <article className='review card'>
          <h1>Guest Review</h1>
          <span className='text-center'>
            <img src='https://static.wixstatic.com/media/a9ff3b_e630dab1211b433ba1955369e2f15c16.png/v1/fill/w_26,h_22,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_e630dab1211b433ba1955369e2f15c16.webp' alt='icons' />
          </span>
          <main>
            {para}
          </main>
        </article>
      </div>
    </div>
  </section >
}

export default Review;