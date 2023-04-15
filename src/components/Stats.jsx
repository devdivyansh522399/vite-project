import React from 'react'
import styles from '../style'
import { stats } from '../constant'
const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[31px] xs:leading-[53px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[16px] xs:leading-[27px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
  )
}

export default Stats