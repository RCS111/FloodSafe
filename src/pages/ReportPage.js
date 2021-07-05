import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import useFetch from '../shared/useFetch'
import ReportCard from '../components/ReportCard'
import {serverUrl} from '../shared/serverUrl'
import Loading from '../components/Loading';

const useStyles = makeStyles(() => {
    return {
        heading: {
            marginBottom: '20px'
        }
    }
});

const ReportPage = () => {
    const { error, isPending, data: reports } = useFetch(`${serverUrl}reports`);
    return (
        <div>
            { error && <Typography>{ error }</Typography> }
            { isPending && <Loading/> }
            { reports && 
                <Container>
                    <Grid container spacing = {2}>
                        {reports.map((report) => (
                            <Grid item xs={12} key = {report.id}>
                                <ReportCard report = {report}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            }
        </div>
    );
}
 
export default ReportPage;