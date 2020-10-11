import React, {Component} from "react";
import {Map, HeatMap, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";
import key from "./api_key"
import latlng from './density'

const testData = {
    gradient: [
        'rgba(0,255,255,0)',
        'rgb(0,255,255)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
    ],
    zip: [
        { lat: 25.782551, lng: -80.445368 },
        { lat: 25.782745, lng: -80.444586 },
        { lat: 25.782842, lng: -80.443688 },
        { lat: 25.782919, lng: -80.442815 },
        { lat: 25.782992, lng: -80.442112 },
        { lat: 25.7831, lng: -80.441461 },
        { lat: 25.783206, lng: -80.440829 },
        { lat: 25.783273, lng: -80.440324 },
        { lat: 25.783316, lng: -80.440023 },
        { lat: 25.783357, lng: -80.439794 },
        { lat: 25.783371, lng: -80.439687 },
        { lat: 25.783368, lng: -80.439666 },
        { lat: 25.783383, lng: -80.439594 },
        { lat: 25.783508, lng: -80.439525 },
        { lat: 25.783842, lng: -80.439591 },
        { lat: 25.784147, lng: -80.439668 }
    ]
}

const data = []

class DensityMap extends Component {

    constructor(props) {
        super(props)
        const done = false
        this.state = {
            heatmap_data: [

            ]
        }
    }

    convertZipToLatLng = () => {
        if (!this.done){
            const zip_data = this.retrieveData()
            for(let {zip, count} of zip_data){
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${key}`)
                    .then((response) => {
                        return response.json()
                    })
                    .then((json) => {
                        const latlng = json['results'][0]['geometry']['location']
                        for(let idx = 0; idx < count; idx++){
                            data.push(latlng)
                        }
                        this.setState({
                            heatmap_data: data
                        })
                    })
            }
        }
        this.done = true
    }

    retrieveData = () => {
        return [
            {'zip': 98102, count: 5},
            {'zip': 98103, count: 4}
        ]
    }

    display = () => {
        //this.convertZipToLatLng()
        //console.log(this.state.heatmap_data)
        return (
            <div>
                <h1 class={'jumbotron'}>Population Densities</h1>
                <Map google={this.props.google} zoom={10} initialCenter={{lat:40.758701, lng:-111.876183}}>
                    <HeatMap
                        opacity={.75}
                        positions={latlng}
                        radius={50}
                    />
                </Map>
            </div>
        )
    }

    render() {
        // this.convertZipToLatLng()
        return this.display()
    }
}

export default GoogleApiWrapper({
    apiKey: key,
    libraries: ['visualization']
})(DensityMap)