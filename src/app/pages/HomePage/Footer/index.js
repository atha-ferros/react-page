import React from 'react'
import './styles.scss'

export default class Footer extends React.Component {

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
            <div className="footer">
                <div className="left">
                    <h2>Contact US</h2>
                    <p className="inline">Address: </p>
                    <p className="inline">Astha Ferrotech Pvt Ltd, <br/>
                        B-2, near industrial estate,<br/>
                        Adityapur Industrial Area,<br/>
                        Adityapur, Jamshedpur - 832109</p>
                    <p>PHONE NO.: 0657-2200141/2200731<br/>
                        FAX: 06572200106<br/>
                        OFFICE CELL: +91 9304021627</p>
                </div>
                <div className="right">
                    <div className="menu-left">
                        <p>home</p>
                        <p>our initiatives</p>
                        <p>gallery</p>
                        <p>conatct us</p>
                    </div>
                    <div className="menu-right">
                        <p>Careers</p>
                        <p>Press</p>
                        <p>Privacy Policy</p>
                    </div>
                    <p className="footer">2020 Astha Ferrotech Pvt. Ltd.<br/>
All Rights Reserved.</p>
                </div>
            </div>
        )
    }


}