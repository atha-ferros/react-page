import React from 'react'
import './styles.scss'
import Button from '../../../assets/components/Button'

const content = [
    {
        label: 'History',
        content: 'The project was initiated on January 1, 2003 to set up a small-scale industry at Adityapur Industrial Area, Jamshedpur for manufacturing a wide range of Ferro alloys to cater to the needs of steel plants all over the country. Jamshedpur for manufacturing a wide range of Ferro alloys to cater to the needs of steel plants.'
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
            <div className="section3-container">
                {/* <img src={} className="banner"/> */}
                <h2>GROWTH STORY</h2>
                <div className="button-container">
                    {
                        content.map((item, index) => (
                            <div className={index%2===0?'left':'right'}>
                                <Button active={this.state.selected===index} onClick={() => this.selectOption(index)}>{item.label}</Button>
                            </div>
                        ))
                    }
                </div>
                <p>
                {
                    content[this.state.selected].content
                }
                </p>
            </div>
        )
    }


}