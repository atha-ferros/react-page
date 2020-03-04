import React from 'react'
import './styles.scss'

const Button = (props) => (
    <div className={`${props.active ? 'active-': ''}button`} id={props.id}>{props.children}</div>
)

export default Button