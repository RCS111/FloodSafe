import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import useFetch from '../shared/useFetch'
import ReportCard from '../components/ReportCard'
import {serverUrl} from '../shared/serverUrl'
import Loading from '../components/Loading';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(() => {
    return {
        mainGrid: {
            width: '100vw',
            height: '100vh',
            spacing: 0,
            justify: 'space-around'
        }
    }
});

const ReportPage = () => {
    const { error, isPending, data: reports } = useFetch(`${serverUrl}reports`);
    const classes = useStyles();

    return (
        <div>
            { error && <Typography>{ error }</Typography> }
            { isPending && <Loading/> }
            { reports && 
                <Container>
                    <Grid container spacing = {2}>
                        {reports.map((report) => (
                            <Grid item xs={12} key = {report.id}>
                                <Link to = {`/reports/${report.id}`}>
                                    <ReportCard report = {report}/>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            }
        </div>
    );
}
 
export default ReportPage;