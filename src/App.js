import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBus, faCircle} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

library.add(faBus, faCircle);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 49.260958,
            longitude: -123.147176,
            zoom: 12,
            buses: [],
        };
    }

    componentWillMount() {
        this.loadBuses();
    }

    componentDidMount() {
        setInterval(this.loadBuses.bind(this), 10000);
    }

    async loadBuses() {
        const response = await axios.get('https://whispering-harbor-35429.herokuapp.com/api/buses');
        this.setState({ buses: response.data });
    }

    renderMarkers() {
        const {buses} = this.state;

        return buses.map(function (bus) {
            return (
                <Marker key={bus.VehicleNo} latitude={bus.Latitude} longitude={bus.Longitude}>
                    <span className="fa-layers fa-fw">
                        <FontAwesomeIcon icon="circle" color="#1A63A3"/>
                        <FontAwesomeIcon icon="bus" inverse transform="shrink-6"/>
                    </span>
                </Marker>
            )
        });
    }

    render() {
        const {latitude, longitude, zoom} = this.state;

        return (
            <ReactMapGL
                width={"100vw"}
                height={"100vh"}
                latitude={latitude}
                longitude={longitude}
                zoom={zoom}
                mapboxApiAccessToken={"pk.eyJ1IjoiYWxsaXNvbjM5NCIsImEiOiJjam9lMDM2dGExOXBsM3Byd2Jib2NvdDBxIn0.gx690ZvLPLNBPlufk0zqzg"}
                mapStyle='mapbox://styles/mapbox/streets-v9'
                onViewportChange={(viewport) => {
                    const {latitude, longitude, zoom} = viewport;
                    this.setState({
                        latitude: latitude,
                        longitude: longitude,
                        zoom: zoom,
                    })
                }}>
                {this.renderMarkers()}
            </ReactMapGL>
        );
    }
}

export default App;
