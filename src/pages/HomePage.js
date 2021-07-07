import { Container, Grid, makeStyles, Paper, useTheme, Typography } from "@material-ui/core";
import useFetch from '../shared/useFetch'
import {serverUrl} from '../shared/serverUrl'
import Divider from '@material-ui/core/Divider';
import { Button, Card } from "@material-ui/core";
import Loading from '../components/Loading';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import { useHistory } from 'react-router'

const useStyles = makeStyles(() => {
    return {
        heading: {
            marginBottom: '20px'
        }
    }
});

const HomePage = ({sensorLocation}) => {
    const { dashError, isDashPending, data: realtime } = useFetch(`${serverUrl}sensors?location=${sensorLocation}`);
    const { reportError, isReportPending, data: reports } = useFetch(`${serverUrl}reports`);
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div>
            { (dashError || reportError) && <Typography>{ dashError }</Typography> }
            { (isDashPending || isReportPending) && <Loading/> }
            { realtime && reports && 
                <Container>
                    <Grid container spacing = {3}>
                        <Grid item xs = {12} md = {6}>
                            <Typography variant = 'h2'>Welcome to Floodsafe</Typography>
                            <Typography variant = 'body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam fugiat corrupti, similique nostrum, facilis dolores suscipit nihil maiores repellat iste iure tempore eveniet. Dolores, praesentium eum vitae ex voluptatibus aliquid.</Typography>
                                <Button variant = 'contained' color = 'primary' onClick = {() => history.push('/maps')}>VIEW MAP</Button>
                                <Button variant = 'outlined' color = 'primary' onClick = {() => history.push('/about')}>ABOUT</Button>
                        </Grid>
                        <Grid item xs = {12} md = {6}>
                            <img src = 'img/headerPhoto.png' width = '100%'/>
                        </Grid>
                        <Grid item xs = {12}>
                            <Divider/>
                        </Grid>
                        <Grid item xs = {12}>
                            <Typography variant = 'h5' align = 'center' className = {classes.heading}>Real-Time Flood Monitoring Updates</Typography>
                        </Grid>
                        <Grid item xs={12} md = {4}>
                            <Paper align = 'center' style = {{height: '200px', backgroundColor: theme.palette.primary.light}}>
                                <Typography align = 'center' variant = 'h6'>Flow Rate</Typography>
                                <Typography align = 'center' variant = 'h3'>{`${realtime[0].points[167].rate} m/s`}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md = {4}>
                            <Paper align = 'center' style = {{height: '200px', backgroundColor: theme.palette.primary.light}}>
                                <Typography align = 'center' variant = 'h6'>Water Level</Typography>
                                <Typography align = 'center' variant = 'h3'>{`${realtime[0].points[167].level} ft`}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md = {4}>
                            <Paper align = 'center' style = {{height: '200px', backgroundColor: theme.palette.primary.light}}>
                                <Typography align = 'center' variant = 'h6'>Weather</Typography>
                                <FilterDramaIcon/>
                                <Typography align = 'center' variant = 'h5'>{`${realtime[0].points[167].temperature} \u00B0C`}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs = {12}>
                            <Divider/>
                        </Grid>
                        <Grid item xs = {6}>
                            <Typography align = 'left' variant = 'h6'>Latest Reports</Typography>
                        </Grid>
                        <Grid item xs = {6}>
                            <Typography align = 'right' variant = 'body1'>Today, September 15, 2020 7:32 am</Typography>
                        </Grid>
                        {
                            reports.map((report) => (
                                <Grid item xs = {3} id = {report.id}>
                                    <Card>
                                        <img src = {`${serverUrl}images/${reports[0].uri}`} height = '200px' style = {{objectFit: 'cover'}}/>
                                        <Typography align = 'left' variant = 'h6'>{report.heading}</Typography>
                                        <Typography align = 'left' variant = 'body1'>{report.dateTime}</Typography>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            }
        </div>
    );
}
 
export default HomePage;