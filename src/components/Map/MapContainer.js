import "./MapContainer.css"

import MapPanel from "./MapPanel/MapPanel"
import Map from "./Map/Map"
import MapNavBar from "./MapNavBar/MapNavBar";

function MapContainerx() {

    return (
        <div className = "component_map-base">
            
            <MapNavBar />

            <Map />

        </div>
    );
}
 
export default MapContainerx;