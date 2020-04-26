import React from 'react'
import './styles.scss'
import Images from '../../../assets/images/images'
import Carousel from '../../../assets/components/Carousel'
import { ArrowRight, ArrowLeft } from 'react-feather' 

const SlideContent = [
    {
        heading: 'PROMISING. OVERWHELMING.',
        description: 'Imagined to suit all, onyx mall is a one-stop choice when it comes to space, functionality & purpose.',
        img: Images.Gallery1
    },
    {
        heading: 'MAGNIFICIENT ENTRANCE',
        description: 'Eqipped with automatic sensor gates, air-conditioned (HVAC), Hi-end interiors, escalators, automatic lifts.',
        img: Images.Gallery2
    },
    {
        heading: 'ANCHOR SHOWROOMS, SMALL & MEDIUM RETAIL SPACES',
        description: 'An option to customize your space accompanied by an exclusive designer lobby.',
        img: Images.Gallery3
    },
    {
        heading: 'SPACES TO REDEFINE YOUR ENTERPRISE',
        description: 'With optimum floor-to-ceiling height, your brand gets maximum visibility.',
        img: Images.Gallery4
    },
    {
        heading: 'WELL-PLANNED FOOD COURT',
        description: 'There’s an integrated dining area with a well designed shop periphery and a children’s arcade for their entertainment.',
        img: Images.Gallery5
    },
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