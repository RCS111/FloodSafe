import { Container, FormControlLabel, Grid, makeStyles, Radio, RadioGroup, Typography } from "@material-ui/core";
import { useState } from "react";
import {LineGraph} from "../components/Graph"
import { serverUrl } from "../shared/serverUrl";
import useFetch from "../shared/useFetch";
import Loading from '../components/Loading';

function getFloodLevel(statistics, range) {
    if(range === 'Day')
        return statistics[statistics.length - 1].points.map(point => point.floodLevel);
    else
        var data = [];
        statistics.forEach(day => day.points.forEach(point => data.push(point.floodLevel)));
        return data;
}

function getFlowRate(statistics, range) {
    if(range === 'Day')
        return statistics[statistics.length - 1].points.map(point => point.flowRate);
    else
        var data = [];
        statistics.forEach(day => day.points.forEach(point => data.push(point.flowRate)));
        return data;
}

const useStyles = makeStyles(() => {
    return {
        heading: {
            marginBottom: '20px'
        }
    }
});

const StatisticsPage = () => {
    const classes = useStyles();
    const [range, setRange] = useState('Day');
    const { error, isPending, data: statistics } = useFetch(`${serverUrl}statistics`);
    return (
        <div>
            { error && <Typography>{ error }</Typography> }
            { isPending && <Loading/> }
            { statistics && 
                <Container align = 'center'>
                    <Grid container>
                        <Grid item xs={12} md={6} key = 'chart1'>
                            <Typography variant = 'h4' className = {classes.heading}>Flood Level</Typography>
                            <LineGraph points = {getFloodLevel(statistics, range)} maxY = {6}/>
                        </Grid>
                        <Grid item xs={12} md={6} key = 'chart2'>
                            <Typography variant = 'h4' className = {classes.heading}>Flow Rate</Typography>
                            <LineGraph points = {getFlowRate(statistics, range)} maxY = {6}/>
                        </Grid>
                        <Grid item xs={12} md={6} key = 'rangeSelection'>
                            <RadioGroup value = {range} onChange = {e => setRange(e.target.value)}>
                                <FormControlLabel value = 'Day' control = {<Radio />} label = 'Day'/>
                                <FormControlLabel value = 'Week' control = {<Radio />} label = 'Week'/>
                            </RadioGroup>
                        </Grid>
                    </Grid>
                </Container>
            }
        </div>
    );
}
 
export default StatisticsPage;