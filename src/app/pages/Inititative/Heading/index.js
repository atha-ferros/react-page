import React from 'react'
import './styles.scss'
import images from '../../../assets/images/images'

const Heading = ( props ) => (
    <div className="heading-container" style={{background:images.initiative}}>
        <img src={images.initiative}/>
        <h1>Our Initiatives</h1>
    </div>
)

export default Heading