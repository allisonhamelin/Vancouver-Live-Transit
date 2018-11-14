import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBus, faCircle} from '@fortawesome/free-solid-svg-icons';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import axios from './Axios';

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

    async componentDidMount() {
        const response = await axios.get('https://whispering-harbor-35429.herokuapp.com/api/buses');
        const json = await response.json();
        this.setState({ buses: json });
    }

    renderMarkers() {
        const {buses} = this.state;
        // const buses = [
        //     {
        //         "VehicleNo": "2161",
        //         "TripId": 9970117,
        //         "RouteNo": "016",
        //         "Direction": "WEST",
        //         "Destination": "ARBUTUS",
        //         "Pattern": "WB1",
        //         "Latitude": 49.28115,
        //         "Longitude": -123.0478,
        //         "RecordedTime": "11:46:39 am",
        //         "RouteMap": {
        //             "Href": "http://nb.translink.ca/geodata/016.kmz"
        //         }
        //     },
        //     {
        //         "VehicleNo": "2162",
        //         "TripId": 10022402,
        //         "RouteNo": "009",
        //         "Direction": "WEST",
        //         "Destination": "ALMA",
        //         "Pattern": "WB1A",
        //         "Latitude": 49.2619,
        //         "Longitude": -123.039517,
        //         "RecordedTime": "11:46:25 am",
        //         "RouteMap": {
        //             "Href": "http://nb.translink.ca/geodata/009.kmz"
        //         }
        //     },
        //     {
        //         "VehicleNo": "2163",
        //         "TripId": 9966175,
        //         "RouteNo": "007",
        //         "Direction": "EAST",
        //         "Destination": "NANAIMO STN",
        //         "Pattern": "EB1",
        //         "Latitude": 49.241817,
        //         "Longitude": -123.185233,
        //         "RecordedTime": "11:47:16 am",
        //         "RouteMap": {
        //             "Href": "http://nb.translink.ca/geodata/007.kmz"
        //         }
        //     },
        //     {
        //         "VehicleNo": "2164",
        //         "TripId": 9971100,
        //         "RouteNo": "019",
        //         "Direction": "EAST",
        //         "Destination": "METROTOWN STN",
        //         "Pattern": "EB1",
        //         "Latitude": 49.281667,
        //         "Longitude": -123.110233,
        //         "RecordedTime": "11:46:15 am",
        //         "RouteMap": {
        //             "Href": "http://nb.translink.ca/geodata/019.kmz"
        //         }
        //     },
        //     {
        //         "VehicleNo": "2168",
        //         "TripId": 9965578,
        //         "RouteNo": "006",
        //         "Direction": "WEST",
        //         "Destination": "DAVIE",
        //         "Pattern": "WB1",
        //         "Latitude": 49.281183,
        //         "Longitude": -123.110533,
        //         "RecordedTime": "11:45:39 am",
        //         "RouteMap": {
        //             "Href": "http://nb.translink.ca/geodata/006.kmz"
        //         }
        //     },
        //     {
        //         "VehicleNo": "2171",
        //         "TripId": 9969966,
        //         "RouteNo": "016",
        //         "Direction": "EAST",
        //         "Destination": "29TH AVE STN",
        //         "Pattern": "EB1",
        //         "Latitude": 49.21375,
        //         "Longitude": -123.140783,
        //         "RecordedTime": "11:46:48 am",
        //         "RouteMap": {
        //             "Href": "http://nb.translink.ca/geodata/016.kmz"
        //         }
        //     },
        //     {
        //         "VehicleNo": "2172",
        //         "TripId": 10022294,
        //         "RouteNo": "009",
        //         "Direction": "EAST",
        //         "Destination": "COMM'L-BDWAY STN",
        //         "Pattern": "EB1COM",
        //         "Latitude": 49.26235,
        //         "Longitude": -123.0728,
        //         "RecordedTime": "11:46:06 am",
        //         "RouteMap": {
        //             "Href": "http://nb.translink.ca/geodata/009.kmz"
        //         }
        //     },
        //     {
        //         "VehicleNo": "2174",
        //         "TripId": 9970043,
        //         "RouteNo": "016",
        //         "Direction": "EAST",
        //         "Destination": "29TH AVE STN",
        //         "Pattern": "EB1",
        //         "Latitude": 49.26545,
        //         "Longitude": -123.0443,
        //         "RecordedTime": "11:45:39 am",
        //         "RouteMap": {
        //             "Href": "http://nb.translink.ca/geodata/016.kmz"
        //         }
        //     },
        //     {
        //         "VehicleNo": "2175",
        //         "TripId": 9970119,
        //         "RouteNo": "016",
        //         "Direction": "WEST",
        //         "Destination": "ARBUTUS",
        //         "Pattern": "WB1",
        //         "Latitude": 49.24425,
        //         "Longitude": -123.04485,
        //         "RecordedTime": "11:42:04 am",
        //         "RouteMap": {
        //             "Href": "http://nb.translink.ca/geodata/016.kmz"
        //         }
        //     },
        //     {
        //         "VehicleNo": "2176",
        //         "TripId": 9964641,
        //         "RouteNo": "005",
        //         "Direction": "EAST",
        //         "Destination": "DOWNTOWN",
        //         "Pattern": "EB1",
        //         "Latitude": 49.286767,
        //         "Longitude": -123.128167,
        //         "RecordedTime": "11:47:11 am",
        //         "RouteMap": {
        //             "Href": "http://nb.translink.ca/geodata/005.kmz"
        //         }
        //     },
        //     {
        //         "VehicleNo": "2178",
        //         "TripId": 10022273,
        //         "RouteNo": "009",
        //         "Direction": "EAST",
        //         "Destination": "BOUNDARY",
        //         "Pattern": "EB1BDY",
        //         "Latitude": 49.263467,
        //         "Longitude": -123.13075,
        //         "RecordedTime": "11:46:05 am",
        //         "RouteMap": {
        //             "Href": "http://nb.translink.ca/geodata/009.kmz"
        //         }
        //     },
        //     {
        //         "VehicleNo": "2179",
        //         "TripId": 9971206,
        //         "RouteNo": "019",
        //         "Direction": "WEST",
        //         "Destination": "STANLEY PARK",
        //         "Pattern": "WB1",
        //         "Latitude": 49.24355,
        //         "Longitude": -123.061767,
        //         "RecordedTime": "11:46:45 am",
        //         "RouteMap": {
        //             "Href": "http://nb.translink.ca/geodata/019.kmz"
        //         }
        //     },
        // ];

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
