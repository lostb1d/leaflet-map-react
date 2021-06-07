import React, { Component } from 'react'
import { MapContainer , GeoJSON} from "react-leaflet"
import countries from "./../data/countries.json"
import "leaflet/dist/leaflet.css"
import { geoJSON } from 'leaflet';


export class MyMap extends Component {

    state = {};
    
    componentDidMount(){
        console.log(countries);
    }
    render() {
        return (
            <div>
                <h1>My Map goes here....</h1>
                <MapContainer 
                    style={{ height: "80vh" }} 
                    zoom={2}
                    center={[20,100]}
                >
                    <GeoJSON data={countries.features}></GeoJSON>



                </MapContainer>
            </div>
        )
    }
}

export default MyMap
