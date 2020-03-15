import React from 'react'
import './styles.scss'

export default class Carousel extends React.Component {

    state = {
        slideIndex: 1
    }

    constructor(props){
        super(props)
        this.slides = []
        this.dots = []
    }

    plusSlides(n) {
        if((this.state.slideIndex === 0 || this.state.slideIndex === this.slides.length) && this.props.loop){
            console.log("1")
            this.setState({
                slideIndex: ( this.state.slideIndex === 0  && n < 0 ) ? this.slides.length - 1 : 1
            }, this.showSlides())
        } else if(this.state.slideIndex > 0 && this.state.slideIndex < this.slides.length ){
            console.log("2")
            this.setState({
                slideIndex: this.state.slideIndex + n
            }, this.showSlides())
        }
        console.log("3")
    }


    currentSlide(n) {
        showSlides(slideIndex = n);
    }

    showSlides(n) {
        try{
            let slideIndex = this.state.slideIndex
            for ( let i = 0; i < this.slides.length; i++ ) {
                this.slides[i].style.display = "none";  
            }
            for ( let i = 0; i < this.dots.length; i++ ) {
                this.dots[i].className = this.dots[i].className.replace(" active", "");
            }
            this.slides[slideIndex-1].style.display = "block";  
            // this.dots[slideIndex-1].className += " active";
        } catch(e) {
            console.log(e)
        }
        
    }

    /* This method is called just prior to component mounting on the DOM (or when the render method is called). Then our component gets mounted. */

    componentWillMount = () => {

    }

    /* This method is called after the component is mounted on the DOM. Like componentWillMount(), it is called only once in a lifecycle.
    Before its execution, the render method is called. We can make API calls and update the state with the API response */

    componentDidMount = () => {
        this.slides = document.getElementsByClassName("mySlides");
        this.dots = document.getElementsByClassName("dot");
        this.showSlides();

    }

    /* This method determines whether the component should be updated or not.
    By default, it’ll return true. 
    If at some point, if you want to re-render the component on a condition, then shouldComponentUpdate() method would be the correct choice */

    shouldComponentUpdate = (nextProps, nextState) => {
        this.slides = document.getElementsByClassName("mySlides");
        this.dots = document.getElementsByClassName("dot");
        return true
    }

    /* We call this method after the re-rendering our component.
    After the updated component gets updated on the DOM, the componentDidUpdate() method executes. This method will receive arguments like prevProps and prevState */

    componentDidUpdate = (prevProps, prevState) => {
        this.slides = document.getElementsByClassName("mySlides");
        this.dots = document.getElementsByClassName("dot");
        return true
    }

    /* Before the removal of the component from the DOM, componentWillUnMount() will execute */

    componentWillUnmount = () => {

    }

    /* render is called to paint the dom */
    render = () => {
        return(
            <div className="carousel-container">
                <div class="slideshow-container">
                    {
                        this.props.slides.map((slide,index)=> <div class="mySlides fade">{ slide }</div>)
                    }
                    <a class="prev" onClick={() => this.plusSlides(-1)}>{ this.props.prev_button ? this.props.prev_button : '&#10094;'}</a>
                    <a class="next" onClick={() => this.plusSlides(1)}>{ this.props.next_button ? this.props.next_button : '&#10095;'}</a>

                </div>
                <br/>
                {
                    this.props.dots && <div style="text-align:center">
                        {
                            this.props.slide.map((slide,index)=> <span class="dot" onClick={() => this.currentSlide(index)}></span> )
                        }
                    </div>
                }
                
            </div>
        )
    }


}