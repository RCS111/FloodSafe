export function LineGraph({points, maxY}) {
    var xRange = points.length; 
    var width = 400;
    var height = 300;

    return (
        <svg width = {`${width}`} height = {`${height}`}>
            <rect width = {`${width}`} height = {`${height}`} fill = '#CCCCCC'/>
            {points.map((point, index) => (
                <circle cx={`${index / (xRange - 1) * width}`} cy={`${height - (point / maxY) * height}`} r="2" stroke="green" strokeWidth="1" fill="yellow" />
            ))}
        </svg>
    );
}