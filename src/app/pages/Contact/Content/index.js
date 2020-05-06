import React from 'react'
import './styles.scss'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Content extends React.Component {

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

    constructor(props){
        super(props)
    }

    /* This method is called just prior to component mounting on the DOM (or when the render method is called). Then our component gets mounted. */

    componentWillMount = () => {

    }

    /* This method is called after the component is mounted on the DOM. Like componentWillMount(), it is called only once in a lifecycle.
    Before its execution, the render method is called. We can make API calls and update the state with the API response */

    componentDidMount = () => {
        // let uluru = {
        //     lat: -25.344, 
        //     lng: 131.036
        // };
        // // The map, centered at Uluru
        // let map = new google.maps.Map( document.getElementById('map'), {zoom: 4, center: uluru} );
        // // The marker, positioned at Uluru
        // let marker = new google.maps.Marker({position: uluru, map: map});
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
            <div className="content-container max-width-container">
                <div className="flex">
                    <div className="map">
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDMiyBdrQRinSOcQdmi3N2HeIFacM5laDU'}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        >
                        <AnyReactComponent
                            lat={86.1400489}
                            lng={22.7890688}
                            text="Astha Ferrotech"
                            />
                        </GoogleMapReact>
                    </div>
                    <div className="address">
                        <h5>ASTHA FERROTECH PVT LTD,</h5>
                        <p>B-2, NEAR INDUSTRIAL ESTATE,
                            ADITYAPUR INDUSTRIAL AREA,
                            ADITYAPUR-832109.</p>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="hr"/>
                <br/>
                <br/>
                <div className="flex lower-contact">
                    <div>
                        <h5>FAX</h5><br/>
                        <h5 className="black">0657-2200106</h5>
                    </div>
                    <div>
                        <h5>PHONE NO.</h5><br/>
                        <h5 className="black">0657-2200141<br/>
                        0657-2200731</h5>
                    </div>
                    <div>
                        <h5>OFFICE CELL</h5><br/>
                        <h5 className="black">+91 93040 21 627</h5>
                    </div>
                </div>
            </div>
        )
    }


}