import React from 'react'
import './styles.scss'
import Images from '../../../assets/images/images'

export default class MDSpeaks extends React.Component {

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
            <div className="md-speaks-container">
                <div className="img">
                    <img src={Images.md} className=""/>
                </div>
                <div className="content">
                    <h2>MD SPEAKS</h2>
                    <p className="designation"><b>Tarun Kanti Bhattacherjee<br/>(Managing Director)</b></p>
                    <p className="message">
                        Entrepreneurship can be felt like you are sailing a ship all by yourself; you are not entirely sure where you are going or how you are navigating to reach there and you are responsible for anything and everything from steering to making sure that the ship doesn’t sink.
                        <br/>
                        <br/>
                        The vision was to create employment and lead to make it a success in an environmentally sustainable way. To us, it is very important to gather the insight of every member of the organization. Astha Ferrotech Pvt. Ltd owes its resilience to three fundamental characteristics, which are part of its core philosophy: Dedication & Commitment; Quality & Performance driven approach and ability to provide the highest level of customer satisfaction.
                        <br/>
                        <br/>
                        When I say quality, it not only means product quality, it also means quality in our people and quality in our relationship that has delighted all our associates for years. Therefore, I look forward to many more further goals with the diversely talented team of our company. Thank you all, on behalf of Astha Ferrotech Pvt.Ltd,
                    </p>
                </div>
            </div>
        )
    }


}