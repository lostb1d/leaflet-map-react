import React, { Component } from 'react'
import { MapContainer , GeoJSON} from "react-leaflet"
// import countries from "./../data/countries.json"
import district from "./../data/nepal.json"

import "leaflet/dist/leaflet.css"
import "./MyMap.css"

export class MyMap extends Component {

    state = {
        districtNamee : "Dang"
    };
    
    componentDidMount(){
        console.log(district);
    }


    countryStyle={
        fillColor:"Red",
        fillOpacity:0.5,
        color: "black",
        wight: 2,
        // dashArray : 10

    }

    
    onEachDistrict = (district, layer) =>{
        const districtName = district.properties.DIST_EN;
        console.log(districtName);
        layer.bindPopup(districtName);

        layer.on({
            mouseover : (event) =>{
                this.setState({
                    districtNamee: districtName
                })
                event.target.setStyle({
                    color:"green",
                    fillColor:"yellow"
                })
            }
        })
    }
    render() {
        return (
            <div className="row">
                <h1>My Map goes here....</h1>
                <div className="mapArea column">
                    <MapContainer 
                        style={{ height: "70vh" }} 
                        zoom={6}
                        center={[27.700,85.300]}
                    >
                        <GeoJSON 
                            data={district.features}
                            style= { this.countryStyle}
                            onEachFeature = {this.onEachDistrict}
                            
                            ></GeoJSON>
                    </MapContainer>
                </div>
                <div className="infoArea  column">

                    <h1>District Information: {this.state.districtNamee} </h1>
                </div>
            </div>
        )
    }
}

export default MyMap
// everything fine upto here 