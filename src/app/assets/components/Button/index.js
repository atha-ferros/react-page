import React from 'react'
import './styles.scss'

const Button = (props) => (
    <div className={`${props.active ? 'active-': ''}button`}>{props.children}</div>
)

export default Button