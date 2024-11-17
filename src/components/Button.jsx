import React from 'react'

const Button = ({btnSrc, className}) => {
  return (
    <button className={`${className}`}>{btnSrc}</button>
  )
}

export default Button