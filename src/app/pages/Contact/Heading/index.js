import React from 'react'
import './styles.scss'
import images from '../../../assets/images/images'

const Heading = ( props ) => (
    <div className="heading-container">
        <img src={images.contact} />
        <h1>Contact Us</h1>
    </div>
)

export default Heading