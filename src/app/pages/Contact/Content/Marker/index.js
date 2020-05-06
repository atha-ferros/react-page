import React from 'react'
import './styles.scss'

const Marker = (props) => <div className="marker"
    style={{ backgroundColor: props.color, cursor: 'pointer'}}
    ><div className="mark"></div><p>{props.name}</p></div>

export default Marker 