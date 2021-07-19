import { Container, Grid, makeStyles, useTheme, Typography,CardMedia, CardContent } from "@material-ui/core";
import useFetch from '../shared/useFetch'
import {serverUrl} from '../shared/serverUrl'
import Divider from '@material-ui/core/Divider';
import { Button, Card } from "@material-ui/core";
import Loading from '../components/Loading';
import { useHistory } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faSun, faCloudRain, faBolt, faSmog, faWater,  faTachometerAlt} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(() => {
    return {
        heading: {
            marginTop: '20px',
            marginBottom: '20px'
        },
        button: {
            marginRight: '10px'
        },
        media: {
            height: 200,
        }
    }
});

const icons = {
    "Rain": faCloudRain,
    "Sunny": faSun,
    "Haze": faSmog,
    "Cloudy": faCloud,
    "Thunderstorm": faBolt  
}

const HomePage = ({sensorLocation}) => {
    const { dashError, isDashPending, data: realtime } = useFetch(`${serverUrl}sensors?location=${sensorLocation}`);
    const { reportError, isReportPending, data: reports } = useFetch(`${serverUrl}reports`);
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div style = {{margin: '50px 0px'}}>
            { (dashError || reportError) && <Typography>{ dashError }</Typography> }
            { (isDashPending || isReportPending) && <Loading/> }
            { realtime && reports && 
                <Container>
                    <Grid container spacing = {3}>
                        <Grid item xs = {12} md = {6}>
                            <Typography variant = 'h2'>Welcome to Floodsafe</Typography>
                            <Typography variant = 'body1' style = {{padding: '20px 0px'}}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam fugiat corrupti, similique nostrum, facilis dolores suscipit nihil maiores repellat iste iure tempore eveniet. Dolores, praesentium eum vitae ex voluptatibus aliquid.
                            </Typography>
                            <Typography variant = 'h6' style = {{padding: '20px 0px'}}>
                                This webapp temporarily suspend http POST operations
                            </Typography>
                            <Button variant = 'contained' color = 'primary' onClick = {() => history.push('/maps')} className = {classes.button}>VIEW MAP</Button>
                            <Button variant = 'outlined' color = 'primary' onClick = {() => history.push('/about')} className = {classes.button}>ABOUT</Button>
                        </Grid>
                        <Grid item xs = {12} md = {6}>
                            <img src = 'img/headerPhoto.png' width = '100%'/>
                        </Grid>
                        <Grid item xs = {12}>
                            <Divider/>
                        </Grid>
                        <Grid item xs = {12}>
                            <Typography variant = 'h5' align = 'center'>Real-Time Flood Monitoring Updates</Typography>
                        </Grid>
                        <Grid item xs={12} md = {4}>
                            <Card align = 'center' style = {{height: '220px', padding: 10, backgroundColor: theme.palette.primary.light}}>
                                <Typography align = 'center' variant = 'h6'>Flow Rate</Typography>
                                <FontAwesomeIcon icon={faTachometerAlt} size="6x" color="#ffffff"/>
                                <Typography align = 'center' variant = 'h3'>{`${realtime[0].points[11].rate} m/s`}</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md = {4}>
                            <Card align = 'center' style = {{height: '220px', padding: 10, backgroundColor: theme.palette.primary.light}}>
                                <Typography align = 'center' variant = 'h6'>Water Level</Typography>
                                <FontAwesomeIcon icon={faWater} size="6x" color="#ffffff"/>
                                <Typography align = 'center' variant = 'h3'>{`${realtime[0].points[11].level} ft`}</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md = {4}>
                            <Card align = 'center' style = {{height: '220px', padding: 10, backgroundColor: theme.palette.primary.light}}>
                                <Typography align = 'center' variant = 'h6'>{realtime[0].points[11].weather}</Typography>
                                <FontAwesomeIcon icon={icons[realtime[0].points[11].weather]} size="6x" color="#ffffff"/>
                                <Typography align = 'center' variant = 'h3'>{`${realtime[0].points[11].temperature} \u00B0C`}</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs = {12}>
                            <Divider/>
                        </Grid>
                        <Grid item xs = {6}>
                            <Typography align = 'left' variant = 'h6'>Latest Reports</Typography>
                        </Grid>
                        <Grid item xs = {6}>
                            <Typography align = 'right' variant = 'body1'>{(new Date()).toLocaleString()}</Typography>
                        </Grid>
                        {
                            reports.slice(0, 4).map((report) => (
                                <Grid item xs = {3} id = {report.id}>
                                    <Card>
                                    <CardMedia
                                        image = {`img/${report.uri}`}
                                        title = {report.heading}
                                        className = {classes.media}
                                    />
                                    <CardContent>
                                        <Typography align = 'left' variant = 'h6'>{report.heading}</Typography>
                                        <Typography align = 'left' variant = 'body1'>{report.dateTime}</Typography>
                                    </CardContent>
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