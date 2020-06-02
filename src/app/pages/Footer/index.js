import React from 'react'
import './styles.scss'
import Images from '../../assets/images/images'
import {Link} from 'react-router-dom'

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
                <h2>Contact US</h2>
                <div className="left">
                    <p className="inline">Address: </p>
                    <p className="inline">Astha Ferrotech Pvt Ltd, <br/>
                        B-2, near industrial estate,<br/>
                        Adityapur Industrial Area,<br/>
                        Adityapur, Jamshedpur - 832109</p>
                    <p>Phone No..: 0657-2951551<br/>
                        {/* Fax: 06572200106<br/> */}
                        Office Cell: +91 9304021627<br/></p>
                        {/* FAX: 06572200106<br/>
                        OFFICE CELL: +91 9304021627</p> */}
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <p className="company-detail">
                            
                    <img src={Images.logo}/><br/>
                    2020 Astha Ferrotech Pvt. Ltd.<br/>
All Rights Reserved.</p>    
                </div>
                <div className="right">
                    <div className="menu-left">
                        <Link to="/">home</Link>
                        <Link to="/initiative">our initiatives</Link>
                        <Link to="/gallery">gallery</Link>
                        <Link to="/contact">contact us</Link>
                    </div>
                    <img src={Images.logo}/>
                </div>
            </div>
        )
    }


}