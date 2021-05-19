import React, { useRef, useEffect } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import { addressPoints } from './realworld.10000.js';

import "./Map.css"

let defaults = {
    location: [14.96,121.36],
    zoom : 7
}

function MapContainer() {

    const mapRef = useRef()

    useEffect(() => {
        const { current = {} } = mapRef
        const { leafletElement : map } = current
    
        map.locate()
    
        map.on('locationfound', onLocationFound)

    }, []
    )
 
    function onLocationFound(event){

        setTimeout(() => {
            const { current = {} } = mapRef
            const { leafletElement : map } = current

            const latlng = event.latlng

            //const radius = event.accuracy
            //const circle = L.circle(latlng, radius)
            //circle.addTo(map)

            map.flyTo(latlng, 15)
        }, 1000)
        

        
    }

    return (
        <Map ref={mapRef} className="component_map-map" center={defaults.location} zoom={defaults.zoom} zoomControl={false} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <HeatmapLayer
                points={addressPoints}
                longitudeExtractor={m => m[1]}
                latitudeExtractor={m => m[0]}
                intensityExtractor={m => parseFloat(m[2])} 
                max = {100.0}
                />
        </Map>
    );
}
 
export default MapContainer;