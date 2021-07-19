import { Card, CardContent, CardHeader, Grid, makeStyles, CardMedia } from "@material-ui/core";
import Typography from '@material-ui/core/Typography'
import {serverUrl} from '../shared/serverUrl'
import React from 'react';

const useStyles = makeStyles((theme) => {
    return {
        card: {
            height: 200
        }
    }
});

export default function NoteCard({report}) {
    const classes = useStyles();

    return (
        <Grid container spacing = {2}>
            <Grid item xs = {3}>
                <Card className = {classes.card}>
                    <CardMedia image = {`img/${report.uri}`} title = {report.heading} className = {classes.card}/>
                </Card>
            </Grid>
            <Grid item xs = {9}>
                <Card className = {classes.card}>
                    <CardHeader
                        align = 'left'
                        title = {report.heading}
                        subheader = {'Report Time: ' + report.dateTime}
                    />
                    <CardContent align = 'left'>
                        <Typography variant='body1' color="textSecondary">
                            {report.content.slice(0, 250) + '...'}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}