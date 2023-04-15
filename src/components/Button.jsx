import React from 'react'

const Button = ({styles}) => {
  return (
    <button className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none S${styles} rounded-xl my-2`} type='button'>Get Started</button>
  )
}

export default Button;