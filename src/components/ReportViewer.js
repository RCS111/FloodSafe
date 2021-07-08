import { Container, Divider, Typography, Card, Grid } from "@material-ui/core"
import {serverUrl} from '../shared/serverUrl'
import useFetch from '../shared/useFetch'
import {useParams} from 'react-router-dom'
import Loading from '../components/Loading'

function ReportViewer() {
    const {id} = useParams();
    const { error, isPending, data: reports } = useFetch(`${serverUrl}reports?id=${id}`);

    return (
        <div>
            { error && <Typography>{ error }</Typography> }
            { isPending && <Loading/> }
            {reports && 
                <div style = {{margin: '50px 0px'}}>
                    <Container>
                        <Grid container spacing = {2}>
                            <Grid item xs = {12}>
                                <Card>
                                    <img src = {`${serverUrl}images/${reports[0].uri}`} width = '100%' height = '400px' style = {{objectFit: 'cover'}} background-position = 'center' alt = 'Banner'/>
                                </Card>
                            </Grid>
                            <Grid item xs = {12}>
                                <Typography variant = 'h4'>{reports[0].heading}</Typography>
                                <Typography variant = 'h6'>{reports[0].dateTime}</Typography>
                            </Grid>
                            <Grid item xs = {12}>
                                <Divider />
                            </Grid>
                            <Grid item xs = {12}>
                                <Typography variant = 'body1'>{reports[0].content}</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            }
        </div>
    )
}

export default ReportViewer
