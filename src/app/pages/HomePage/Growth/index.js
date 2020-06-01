import React from 'react'
import './styles.scss'
import Button from '../../../assets/components/Button'
import Images from '../../../assets/images/images'


const content = [
    {
        label: 'History',
        content: 'Inspired by Tata Steel, the project had been initiated on the 1st of January, 2003 to set up a small-scale industry at Adityapur Industrial Area, Jamshedpur for manufacturing a wide range of Ferro Alloys through Alumino-Thermit route to cater the needs of steel plants in general. The constitution of Astha Ferrotech was a partnership, which has been functioning as a Private Limited Company since 1st April 2005 under the leadership of the Managing Director, Mr Tarun K Bhattacherjee. The well-organized team of technically qualified and experienced personnel, as well as a competent batch of non-technical enthusiasts, are sweating every day to keep the graph moving towards the peak.  '
    }, {
        label: 'future plans',
        content: ''
    }
]

export default class Section3 extends React.Component {

    state = {
        selected: 0
    }

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

    selectOption = (index) => {
        this.setState({
            selected: index
        })
    }

    /* render is called to paint the dom */
    render = () => {
        return(
            <div className="growth-container">
                <img src={Images.growth} className="banner"/>
                <div className="max-width-container">

                <h2>GROWTH STORY</h2>
                <p>
                {
                    content[this.state.selected].content
                }
                </p>
                </div>
            </div>
        )
    }


}