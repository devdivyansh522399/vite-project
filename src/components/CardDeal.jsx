import React from 'react'
import styles, { layout } from '../style';
import Button from './Button';
import { card } from '../assets';

const CartDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>Find a better card deal <br className={`sm:block hidden`}/> in few easy steps..</h2>
        <p className={`${styles.paragraph} mx-w-[470px] mt-5`}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam, ad ipsa eveniet et ea corporis at. Illum libero enim, a hic voluptatum ducimus! Saepe cum explicabo sunt laborum qui!
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="" className="w-[100%] h-[100%]"/>
      </div>
    </section>
  )
}

export default CartDeal