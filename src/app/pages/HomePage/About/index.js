import React from 'react'
import './styles.scss'
import Images from '../../../assets/images/images'

export default class Section2 extends React.Component {

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
            <div className="section2-container">
                <div className="left-section">
                    <h2>ABOUT US</h2>
                    <p>Astha Ferrotech Pvt Ltd is a professionally managed organization that has been recognized as a leading manufacturer of Low Carbon & Medium Carbon Ferro Alloys including Noble Alloys.</p>
                </div>
                <div className="right-section">
                    <img src={Images.about}/>

                </div>
            </div>
        )
    }


}