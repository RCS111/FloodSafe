import { Container, Grid, makeStyles, Typography, Card, CardHeader, CardContent, Button, ButtonGroup, useTheme } from "@material-ui/core";
import { useState } from "react";
import Graph from "../components/Graph";
import { serverUrl } from "../shared/serverUrl";
import useFetch from "../shared/useFetch";
import Loading from '../components/Loading';

function getLevel(sensor, range) {
    var levels = [];
    var datetime = [];

    if(range === 'Day')
        sensor.points.slice(144, 168).forEach(point => {levels.push(point.level); datetime.push((new Date(point.datetime)).toLocaleString ());});
    else
        sensor.points.slice(0, 168).forEach(point => {levels.push(point.level); datetime.push((new Date(point.datetime)).toLocaleString ());});
    
    return {levels, datetime};
}

function getRate(sensor, range) {
    var rate = [];
    var datetime = [];

    if(range === 'Day')
        sensor.points.slice(144, 168).forEach(point => {rate.push(point.rate); datetime.push((new Date(point.datetime)).toLocaleString ());});
    else
        sensor.points.slice(0, 168).forEach(point => {rate.push(point.rate); datetime.push((new Date(point.datetime)).toLocaleString ());});
    
    return {rate, datetime};
}

const useStyles = makeStyles((theme) => {
    return {
        cardHeader: {
            backgroundColor: theme.palette.primary.light
        }
    }
});

const StatisticsPage = ({sensorLocation}) => {
    const theme = useTheme();
    const classes = useStyles();
    const [levelRange, setLevelRange] = useState('Day');
    const [rateRange, setRateRange] = useState('Day');
    const { error, isPending, data: sensor } = useFetch(`${serverUrl}sensors?location=${sensorLocation}`);

    if(error) {
        return (<Typography>{ error }</Typography>)
    } else if (isPending) {
        return (<Loading/>)
    } else if (sensor) {
        var level = getLevel(sensor[0], levelRange);
        var rate = getRate(sensor[0], rateRange);
        return (
            <Container>
                <Grid container spacing = {3}>
                    <Grid item xs={12} md = {12}>
                        <Card>
                            <CardHeader
                                className = {classes.cardHeader} 
                                title = {<Typography variant = 'h4'>Flood Level</Typography>}
                                subheader = {levelRange}
                                action={
                                    <ButtonGroup variant="contained" color="primary">
                                        <Button onClick = {() => setLevelRange('Day')} variant = {levelRange === 'Day' ? 'contained' : 'outlined'}>DAY</Button>
                                        <Button onClick = {() => setLevelRange('Week')} variant = {levelRange === 'Week' ? 'contained' : 'outlined'}>WEEK</Button>
                                    </ButtonGroup>
                                }
                            />
                            <CardContent>
                                <Graph data = {
                                    {
                                        labels: level.datetime,
                                        datasets: [
                                            {
                                                label: 'Flood Level in ft',
                                                data: level.levels,
                                                fill: false,
                                                backgroundColor: theme.palette.secondary.main,
                                                borderColor: theme.palette.secondary.dark,
                                                yAxisID: 'y-axis-1',
                                            }
                                        ],
                                    }
                                }/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md = {12}>
                        <Card>
                            <CardHeader 
                                className = {classes.cardHeader} 
                                title = {<Typography variant = 'h4'>Flow Rate</Typography>}
                                subheader = {rateRange}
                                action={
                                    <ButtonGroup variant="contained" color={"primary"}>
                                        <Button onClick = {() => setRateRange('Day')} variant = {rateRange === 'Day' ? 'contained' : 'outlined'}>DAY</Button>
                                        <Button onClick = {() => setRateRange('Week')} variant = {rateRange === 'Week' ? 'contained' : 'outlined'}>WEEK</Button>
                                    </ButtonGroup>
                                }
                            />
                            <CardContent>
                                <Graph data = {
                                    {
                                        labels: rate.datetime,
                                        datasets: [
                                            {
                                                label: 'Flood Rate in m/s',
                                                data: rate.rate,
                                                fill: false,
                                                backgroundColor: theme.palette.secondary.main,
                                                borderColor: theme.palette.secondary.dark,
                                                yAxisID: 'y-axis-1',
                                            }
                                        ],
                                    }
                                }/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        )
    } else {
        return (<Typography>{ error }</Typography>)
    }
}
 
export default StatisticsPage;