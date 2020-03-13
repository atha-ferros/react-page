import React from 'react'
import './styles.scss'
import Images from '../../assets/images/images'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {

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
            <div className="header-container">
                <div className="logo-section">
                    <img src={Images.logo} className="logo"/>
                    <h5>ASTHA FERROTECH</h5>
                </div>
                <div className="navbar">
                    <Link  to="/">Home</Link>
                    <Link className={`${location.pathname.includes('initiative')? 'active': ''}`} to="/initiative">Our Initiative</Link>
                    <Link className={`${location.pathname.includes('gallery')? 'active': ''}`} to="/gallery">Gallery</Link>
                    <Link className={`${location.pathname.includes('contact')? 'active': ''}`} to="/contact">Contact Us</Link>
                </div>
            </div>
        )
    }


}