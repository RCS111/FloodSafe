import React from 'react'
import { Line } from 'react-chartjs-2';
import { Card } from "@material-ui/core";

function Graph({data}) {
    return (
        <Card>
            <Line data={data} />
        </Card>
    )
}

export default Graph
