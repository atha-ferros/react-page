import React from 'react'
import './styles.scss'
import images from '../../../assets/images/images'

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
        return(
            <div className="overview-container">
                <h2>Overview</h2>
                <hr size="2"/>
                <div className="image-container">
                    <div className="img">
                        <img src={images.vision}/>
                        <div className="content">
                            <p className="header">Vision</p>
                            <div className="hr"></div>
                            <p className="body">Astha Ferrotech Pvt Ltd aspires to be a leading manufacturer of Ferro Alloys in India. We endeavour to deliver quality products which will help the company to withstand the test of competition. Good quality Ferro Alloys leads to making the Best Steel for a better future infrastructure. </p>
                        </div>
                    </div>
                    <div className="img">
                        <img src={images.mission}/>               
                        
                        <div className="content">
                            <p className="header">Mision</p>
                            <div className="hr"></div>
                            <p className="body">Astha Ferrotech Pvt Ltd aspires to be a leading manufacturer of Ferro Alloys in India. We endeavour to deliver quality products which will help the company to withstand the test of competition. Good quality Ferro Alloys leads to making the Best Steel for a better future infrastructure. </p>
                        </div>
                        
                    </div>
                    <div className="img">
                        <img src={images.core}/>
                        
                        <div className="content">
                            <p className="header">Core Values</p>
                            <div className="hr"></div>
                            <p className="body">Astha Ferrotech Pvt Ltd aspires to be a leading manufacturer of Ferro Alloys in India. We endeavour to deliver quality products which will help the company to withstand the test of competition. Good quality Ferro Alloys leads to making the Best Steel for a better future infrastructure. </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }


}