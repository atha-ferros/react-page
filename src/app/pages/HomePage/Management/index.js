import React from 'react'
import './styles.scss'
import Button from '../../../assets/components/Button'

const DIRECTOR = {
    MANAGING_DIRECTOR: "1",
    BOARD_OF_DIRECTOR: "2"
}

export default class Management extends React.Component {

    state = {
        selectedButton: DIRECTOR.MANAGING_DIRECTOR
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

    getContent = () => {
        switch(this.state.selectedButton){
            case DIRECTOR.MANAGING_DIRECTOR:
                return(
                    <div className="single-div">
                        <p><p>Mr. Tarun Kanti Bhattacherjee, Managing Director:</p> With 42 years in the field of Manufacturing & Marketing of industrial products, Mr. Bhattacherjee was involved in import trading business with vast organizational management experience of more than four decades. At Astha Ferrotech Pvt Ltd, he is the key person to look after all the technical fields like Production, Marketing, Quality Control & Purchase of Raw Materials in addition to the overall management of the company. An awardee of the prestigious President’s  Scout Parchment Award received from the then President of India, Late V.V. Giri as well as the President’s Rover’s Parchment Award received from the then President of India, Late Fakiruddin Ali Ahmed, his entrepreneurial, practical and calculative risk-taking instincts should be duly credited to his adventurous upbringing.</p>
                    </div>
                )
            case DIRECTOR.BOARD_OF_DIRECTOR:
                    return(
                        <div className="double-div">
                            <p><p>Mr. Tarun Kumar Adak, Director:</p>  With over 45 years in the field of personnel, hotel management, food marketing and involvement in trading business, Mr. Adak at Astha Ferrotech Pvt Ltd has been handling personnel, labour welfare, procurement of selected raw materials, liasioning with suppliers, general administration and logistics. An active member of the Lion’s Club, he’s into various philanthropic activities.</p>
                            <p><p>Mr. Satish Kumar Chaudhary, Director:</p> With 60 years of Work Experience, out of which 30 years as an entrepreneur in manufacturing various industrial chemicals and allied products, Mr. Chaudhary at Astha Ferrotech Pvt Ltd has been exclusively looking after Finance & Accounts, including Banking. In addition to that, he is also looking after the company matters in connection with R.O.C, Factory Inspector, Provident Fund, E.S.I. and Pollution Control.</p>
                        </div>
                    )
        }
    }

    /* render is called to paint the dom */
    render = () => {
        return(
            <div className="management-container ">
                <div className="body max-width-container">
                    <h2>Our Management</h2>
                    <div className="button-container" onClick={(e) => {
                        console.log(e.target.id)
                        this.setState({
                            selectedButton: e.target.id
                        })
                    }}>
                        <Button id={DIRECTOR.MANAGING_DIRECTOR} active={this.state.selectedButton===DIRECTOR.MANAGING_DIRECTOR}>Managing Director</Button>
                        <Button id={DIRECTOR.BOARD_OF_DIRECTOR} active={this.state.selectedButton===DIRECTOR.BOARD_OF_DIRECTOR}>Board Of Directors</Button>
                    </div>
                    <div className="content">
                    {
                        this.getContent()
                    }
                    </div>
                </div>
            </div>
        )
    }


}