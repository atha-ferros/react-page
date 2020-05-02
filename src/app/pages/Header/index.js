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

    toggleMenu = (e) => {
        let className = e.target.className
        console.log("hello", e.target.className)
        if(className.includes('link') || className.includes('close') || className.includes('tile') || className.includes('hamburger-menu')){
            let el = document.getElementById("menu")
            el.classList.toggle('active')
        }
    }

    /* render is called to paint the dom */
    render = () => {
        return(
            <div className="header-container" onClick={this.toggleMenu}>
                <div className="logo-section">
                    <img src={Images.logo} className="logo"/>
                    <h5>ASTHA FERROTECH PVT. LTD.</h5>
                </div>
                <div className="navbar">
                    <Link  to="/">Home</Link>
                    <Link className={`${location.pathname.includes('initiative')? 'active': ''}`} to="/initiative">Our Initiatives</Link>
                    <Link className={`${location.pathname.includes('gallery')? 'active': ''}`} to="/gallery">Gallery</Link>
                    <Link className={`${location.pathname.includes('contact')? 'active': ''}`} to="/contact">Contact Us</Link>
                </div>
                <div className="hamburger-menu" >
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                </div>
                <div id="menu" className="menu">
                    <div className="close">
                        <div className="tile tile1"></div>
                        <div className="tile tile2"></div>
                    </div>
                    <Link className="link" to="/">Home</Link>
                    <Link className={`link ${location.pathname.includes('initiative')? 'active': ''}`} to="/initiative">Our Initiatives</Link>
                    <Link className={`link ${location.pathname.includes('gallery')? 'active': ''}`} to="/gallery">Gallery</Link>
                    <Link className={`link ${location.pathname.includes('contact')? 'active': ''}`} to="/contact">Contact Us</Link>
                </div>
            </div>
        )
    }


}