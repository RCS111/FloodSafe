import { Container, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import useFetch from '../shared/useFetch'
import {serverUrl} from '../shared/serverUrl'

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
            { isPending && <Typography>Loading...</Typography> }
            { realtime && 
                <Container>
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
                                <Typography align = 'center' variant = 'h3'>{`${realtime.temperature} C`}</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            }
        </div>
    );
}
 
export default HomePage;