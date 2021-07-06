import { Container, Divider, Grid, makeStyles, Typography } from "@material-ui/core"
import React from 'react'
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
            {reports && <Container>
                <img src = {`${serverUrl}images/${reports[0].uri}`} alt = 'picture' width = '100%' />
                <Typography variant = 'h4'>{reports[0].heading}</Typography>
                <Typography variant = 'h6'>{reports[0].datetime}</Typography>
                <Divider />
                <Typography variant = 'body1'>{reports[0].content}</Typography>
            </Container>
            }
        </div>
    )
}

export default ReportViewer
