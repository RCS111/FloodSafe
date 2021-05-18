import "./MapPanel.css"

function MapPanel() {

    return (
        <div className = "component_map-context">
            <img className="component_map-contextlogo" src="logo_floodsafe.png" alt="FloodSafe"/>
            <h1>FloodSafe Monitoring System</h1>
            <p>Tempor occaecat officia ex eu velit est aliqua commodo. Minim reprehenderit ut sit esse exercitation incididunt qui ad eu qui.</p>

            <div className = "component_map-context-buttonbelt">
                <button className="button button1">View Map</button>
                <button className="button button2">About</button>
            </div>

        </div>
    );
}
 
export default MapPanel;