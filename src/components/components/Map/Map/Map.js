import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'

import "./Map.css"

let defaults = {
    location: [14.96,121.36],
    zoom : 7
}

function locateBrowserPosition(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                defaults.location = [position.coords.latitude, position.coords.longitude]
                defaults.zoom = 15
            }
        )
    }
}   

locateBrowserPosition()

function CenterMap() {

    const map = useMap()
    map.flyTo({lat: defaults.location[0], lng: defaults.location[1]}, defaults.zoom)

    
    return (
        <Marker           
            position={defaults.location}
            interactive={false} 
        />
    )
}

function Map() {

    return (
        <MapContainer className="component_map-map" center={defaults.location} zoom={defaults.zoom} zoomControl={false} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CenterMap />
        </MapContainer>
    );
}
 
export default Map;