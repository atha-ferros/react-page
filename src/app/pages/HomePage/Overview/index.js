import React from 'react'
import './styles.scss'
import images from '../../../assets/images/images'
import Carousel from '../../../assets/components/Carousel'
import { ArrowLeft, ArrowRight } from 'react-feather'

const SLIDE_INFO = [
    {
        img: 'vision',
        label: 'Vision',
        description: 'Astha Ferrotech Pvt Ltd aspires to be a leading manufacturer of Ferro Alloys in India. We endeavour to deliver quality products which will help the company to withstand the test of competition. Good quality Ferro Alloys leads to making the Best Steel for a better future infrastructure. '
    }, {
        img: 'mission',
        label: 'Mission',
        description: 'Astha Ferrotech Pvt Ltd aspires to be a leading manufacturer of Ferro Alloys in India. We endeavour to deliver quality products which will help the company to withstand the test of competition. Good quality Ferro Alloys leads to making the Best Steel for a better future infrastructure. ' 
    }, {
        img: 'core',
        label: 'Core Values',
        description: 'Astha Ferrotech Pvt Ltd aspires to be a leading manufacturer of Ferro Alloys in India. We endeavour to deliver quality products which will help the company to withstand the test of competition. Good quality Ferro Alloys leads to making the Best Steel for a better future infrastructure. '
    }
]

const Slide = (props) => <div className="img">
    <img src={images[props.img]}/>
    <div className="content">
        <p className="header">{props.label}</p>
        <div className="hr"></div>
        <p className="body">{props.description}</p>
    </div>
</div>

export default class Overview extends React.Component {

    constructor(props){
        super(props)
    }

    /* This method is called just prior to component mounting on the DOM (or when the render method is called). Then our component gets mounted. */

    componentWillMount = () => {

    }

    /* This method is called after the component is mounted on the DOM. Like componentWillMount(), it is called only once in a lifecycle.
    Before its execution, the render method is called. We can make API calls and update the state with the API response */

    componentDidMount = () => {

    }

    /* This method determines whether the component should be updated or not.
    By default, it’ll return true. 
    If at some point, if you want to re-render the component on a condition, then shouldComponentUpdate() method would be the correct choice */

    shouldComponentUpdate = (nextProps, nextState) => {
        return true
    }

    /* We call this method after the re-rendering our component.
    After the updated component gets updated on the DOM, the componentDidUpdate() method executes. This method will receive arguments like prevProps and prevState */

    componentDidUpdate = (prevProps, prevState) => {
        return true
    }

    /* Before the removal of the component from the DOM, componentWillUnMount() will execute */

    componentWillUnmount = () => {

    }

    /* render is called to paint the dom */
    render = () => {
        let slides = SLIDE_INFO.map(slide => <Slide {...slide}/>)
        console.log(slides)
        return(
            <div className="overview-container">
                <h2>Overview</h2>
                <hr size="2"/>
                <div className=" not-mobile image-container">{ slides } </div>
                <div className="mobile"> 
                <Carousel slides={ slides} prev_button={<ArrowLeft color='#212121'/>} next_button={<ArrowRight color='#212121'/>} loop/> </div>
            </div>
        )
    }


}