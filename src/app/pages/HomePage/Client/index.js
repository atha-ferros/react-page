import React from 'react'
import './styles.scss'
import images from '../../../assets/images/images'

export default class Client extends React.Component {

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
            <div className="client-container">
                <img src={images.client} className="not-mobile"/>
                <img src={images.logos_mobile} className="mobile"/>
                <div className="right">
                    <h2>Clientele</h2>
                    <p>During its 16-year journey, the company catered to an impressive clientele with likes of Tata Steel Ltd, Usha Martin Ltd (now taken over by Tata Steel Long Products Ltd), Jindal Steel & Power Ltd, SAIL’s Bhilai Steel Plant, Bokaro Steel Plant, Alloy Steel Plant, Bhushan Power & Steel Ltd, Tata Steel BSL Ltd (Meramandli) and many more, all over India.</p>
                </div>
            </div>
        )
    }


}