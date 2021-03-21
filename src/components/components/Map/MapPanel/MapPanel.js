import "./MapPanel.css"

function MapPanel() {

    return (
        <div className = "component_map-context">
            <img class="component_map-contextlogo" src="logo_floodsafe.png" alt="FloodSafe"/>
            <h1>FloodSafe Monitoring System</h1>
            <p>Tempor occaecat officia ex eu velit est aliqua commodo. Minim reprehenderit ut sit esse exercitation incididunt qui ad eu qui.</p>

            <div className = "component_map-context-buttonbelt">
                <button class="button button1">View Map</button>
                <button class="button button2">About</button>
            </div>

        </div>
    );
}
 
export default MapPanel;