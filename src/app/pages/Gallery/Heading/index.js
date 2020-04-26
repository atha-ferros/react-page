import React from 'react'
import './styles.scss'
import images from '../../../assets/images/images'

const Heading = ( props ) => (
    <div className="heading-container">
        <img src={images.Gallery}/>
        <h1>Gallery</h1>
    </div>
)

export default Heading