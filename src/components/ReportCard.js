import { Card, CardContent, Grid, CardHeader } from "@material-ui/core";
import Typography from '@material-ui/core/Typography'
import {serverUrl} from '../shared/serverUrl'

export default function NoteCard({report}) {
    return (
        <Grid container spacing = {1}>
            <Grid item xs = {2}>
                <Card>
                    <img src = {`${serverUrl}images/${report.uri}`} width = '100%'/>
                </Card>
            </Grid>
            <Grid item xs = {10}>
                <Card elevation={1}>
                    <CardHeader
                        title={report.heading}
                        subheader={`Report Time: ${report.dateTime}`}
                    />
                    <CardContent>
                        <Typography variant='body2' color='textSecondary'>
                            {report.content}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}