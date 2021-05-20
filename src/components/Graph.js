import {format} from 'date-fns'

export function LineGraph({points, maxY}) {
    var xRange = points.length; 
    var width = 400;
    var height = 300;

    return (
        <svg width = {`${width}`} height = {`${height}`}>
            <rect width = {`${width}`} height = {`${height}`} fill = '#CCCCCC'/>
            {points.map((point, index) => (
                <circle cx={`${index / (xRange - 1) * width}`} cy={`${height - (point / maxY) * height}`} r="1" stroke="green" stroke-width="1" fill="yellow" />
            ))}
        </svg>
    );
}