import { Container, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import useFetch from '../shared/useFetch'
import {serverUrl} from '../shared/serverUrl'
import Divider from '@material-ui/core/Divider';
import { Button, Card } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

const useStyles = makeStyles(() => {
    return {
        heading: {
            marginBottom: '20px'
        }
    }
});

const HomePage = () => {
    const { error, isPending, data: realtime } = useFetch(`${serverUrl}realtime`);
    const classes = useStyles();
    return (
        <div>
            { error && <Typography>{ error }</Typography> }
            { isPending && <Loading/> }
            { realtime && 
                <Container>
                    <Grid container spacing = {3}>
                        <Grid item xs = {12} md = {6}>
                            <Typography variant = 'h2'>Welcome to Floodsafe</Typography>
                            <Typography variant = 'body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam fugiat corrupti, similique nostrum, facilis dolores suscipit nihil maiores repellat iste iure tempore eveniet. Dolores, praesentium eum vitae ex voluptatibus aliquid.</Typography>
                            <Link to = {'/maps'}>
                                <Button variant = 'contained' color = 'primary'>VIEW MAP</Button>
                            </Link>
                            <Link to = {'/about'}>
                                <Button variant = 'outlined' color = 'primary'>ABOUT</Button>
                            </Link>
                        </Grid>
                        <Grid item xs = {12} md = {6}>
                            <img src = 'img/headerPhoto.png' width = '100%'/>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Typography variant = 'h5' align = 'center' className = {classes.heading}>Real-Time Flood Monitoring Updates</Typography>
                    <Grid container spacing = {3}>
                        <Grid item xs={12} md = {4}>
                            <Paper>
                                <Typography align = 'center' variant = 'h6'>Flow Rate</Typography>
                                <Typography align = 'center' variant = 'h3'>{`${realtime.flowRate} m/s`}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md = {4}>
                            <Paper>
                                <Typography align = 'center' variant = 'h6'>Water Level</Typography>
                                <Typography align = 'center' variant = 'h3'>{`${realtime.floodLevel} ft`}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md = {4}>
                            <Paper>
                                <Typography align = 'center' variant = 'h6'>Weather</Typography>
                                <Typography align = 'center' variant = 'h3'>{`${realtime.temperature} \u00B0C`}</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Grid container spacing = {3}>
                        <Grid item xs = {6}>
                            <Typography align = 'left' variant = 'h6'>Latest Reports</Typography>
                        </Grid>
                        <Grid item xs = {6}>
                            <Typography align = 'right' variant = 'body1'>Today, September 15, 2020 7:32 am</Typography>
                        </Grid>
                        <Grid item xs = {3}>
                            <Typography align = 'left' variant = 'h6'><Card>A</Card></Typography>
                        </Grid>
                        <Grid item xs = {3}>
                            <Typography align = 'left' variant = 'h6'><Card>A</Card></Typography>
                        </Grid>
                        <Grid item xs = {3}>
                            <Typography align = 'left' variant = 'h6'><Card>A</Card></Typography>
                        </Grid>
                        <Grid item xs = {3}>
                            <Typography align = 'left' variant = 'h6'><Card>A</Card></Typography>
                        </Grid>
                    </Grid>
                </Container>
            }
        </div>
    );
}
 
export default HomePage;