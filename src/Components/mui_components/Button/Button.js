import React from 'react'
import './styles.css'

const Button = ({ text, onClick, className }) => {
  return (
    <div className={`${className}-wrapper`} onClick={onClick}>
        <p>{text}</p>
    </div>
  )
}

export default Button