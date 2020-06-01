import React from 'react'
import './styles.scss'
import Images from '../../../assets/images/images'
import Carousel from '../../../assets/components/Carousel'
import { ArrowRight, ArrowLeft } from 'react-feather' 

const SlideContent = [
    { img:Images.Gallery1 },
    { img:Images.Gallery3 },
    { img:Images.Gallery4 },
    { img:Images.Gallery5 },
    { img:Images.Gallery6 },
    { img:Images.Gallery7 },
    { img:Images.Gallery8 },
    { img:Images.Gallery9 },
    { img:Images.Gallery10 },
    { img:Images.Gallery11 },
    { img:Images.Gallery12 },
    { img:Images.Gallery13 },
    { img:Images.Gallery14 },
    // { img:Images.Gallery15 },
    { img:Images.Gallery16 },
    { img:Images.Gallery17 },
    { img:Images.Gallery18 },
    { img:Images.Gallery19 },
]

const Slide = () =>  SlideContent.map(item => <div className="slide-container"> <img src={item.img}/> </div>)

const Content = (props) => (
    <div className="content-container max-width-container">
       <p><span className="red">“A team that works together, stays together.”</span> We work together, across<br/> boundaries to meet the needs of our customers and to help the company win. In<br/> Reid Garrett Hoffman’s words, “No matter how brilliant your mind or strategy is, if<br/> you are playing a solo game, you’ll always lose out to a team.”</p>
       <Carousel 
            slides={Slide()} 
            loop prev_button={<ArrowLeft color='#837E6C'/>} 
            next_button={<ArrowRight color='#837E6C'/>} 
            customClassName="gallery"
            dotsClassName="gallery-dot"
            />
    </div>
)

export default Content