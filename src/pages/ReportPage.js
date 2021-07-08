import { Container, Grid, Typography, Button } from "@material-ui/core";
import { useHistory } from 'react-router'
import useFetch from '../shared/useFetch'
import ReportCard from '../components/ReportCard'
import {serverUrl} from '../shared/serverUrl'
import Loading from '../components/Loading';

const ReportPage = () => {
    const { error, isPending, data: reports } = useFetch(`${serverUrl}reports`);
    const history = useHistory();

    return (
        <div style = {{margin: '50px 0px'}}>
            { error && <Typography>{ error }</Typography> }
            { isPending && <Loading/> }
            { reports && 
                <Container>
                    <Grid container spacing = {1}>
                        {reports.map((report) => (
                            <Grid item xs={12} key = {report.id}>
                                <Button onClick = {() => history.push(`/reports/${report.id}`)} fullWidth>
                                    <ReportCard report = {report}/>
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            }
        </div>
    );
}
 
export default ReportPage;