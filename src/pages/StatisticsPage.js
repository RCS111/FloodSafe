import { Container, FormControlLabel, Grid, makeStyles, Radio, RadioGroup, Typography } from "@material-ui/core";
import { useState } from "react";
import Graph from "../components/Graph";
import { serverUrl } from "../shared/serverUrl";
import useFetch from "../shared/useFetch";
import Loading from '../components/Loading';

function getData(sensor, range) {
    var levels = [];
    var rate = [];
    var datetime = [];

    if(range === 'Day')
        sensor.points.slice(0, 24).forEach(point => {levels.push(point.level); rate.push(point.rate); datetime.push((new Date(point.datetime)).toLocaleString ());});
    else
        sensor.points.slice(0, 168).forEach(point => {levels.push(point.level); rate.push(point.rate); datetime.push((new Date(point.datetime)).toLocaleString ());});
    
    return {levels, rate, datetime};
}

const useStyles = makeStyles(() => {
    return {
        heading: {
            marginBottom: '20px'
        }
    }
});

const StatisticsPage = ({sensorLocation}) => {
    const classes = useStyles();
    const [range, setRange] = useState('Day');
    const { error, isPending, data: sensor } = useFetch(`${serverUrl}sensors?location=${sensorLocation}`);

    if(error) {
        return (<Typography>{ error }</Typography>)
    } else if (isPending) {
        return (<Loading/>)
    } else if (sensor) {
        var data = getData(sensor[0], range);
        return (
            <Container align = 'center'>
                <Grid container>
                    <Grid item xs={12}>
                        <RadioGroup value = {range} onChange = {e => setRange(e.target.value)}>
                            <FormControlLabel value = 'Day' control = {<Radio />} label = 'Day'/>
                            <FormControlLabel value = 'Week' control = {<Radio />} label = 'Week'/>
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant = 'h4' className = {classes.heading}>Flood Level</Typography>
                        <Graph data = {
                            {
                                labels: data.datetime,
                                datasets: [
                                    {
                                        label: 'Time',
                                        data: data.levels,
                                        fill: false,
                                        backgroundColor: 'rgb(255, 99, 132)',
                                        borderColor: 'rgba(255, 99, 132, 0.2)',
                                        yAxisID: 'y-axis-1',
                                    }
                                ],
                            }
                        }/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant = 'h4' className = {classes.heading}>Flow Rate</Typography>
                        <Graph data = {
                            {
                                labels: data.datetime,
                                datasets: [
                                    {
                                        label: 'Time',
                                        data: data.rate,
                                        fill: false,
                                        backgroundColor: 'rgb(255, 99, 132)',
                                        borderColor: 'rgba(255, 99, 132, 0.2)',
                                        yAxisID: 'y-axis-1',
                                    }
                                ],
                            }
                        }/>
                    </Grid>
                </Grid>
            </Container>
        )
    } else {
        return (<Typography>{ error }</Typography>)
    }
}
 
export default StatisticsPage;