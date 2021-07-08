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

export default function MemberCard({member}) {
    const classes = useStyles();

    return (
        <Grid container spacing = {2}>
        {console.log(member)}
            <Grid item xs = {2}>
                <Card className = {classes.card}>
                    <CardMedia image = {`${serverUrl}images/${member.uri}`} title = {member.heading} className = {classes.card}/>
                </Card>
            </Grid>
            <Grid item xs = {10}>
                <Card className = {classes.card}>
                    <CardHeader
                        align = 'left'
                        title = {member.memberName}
                        subheader = {member.position}
                    />
                    <CardContent align = 'left'>
                        <Typography variant='body1' color="textSecondary">
                            {member.content.slice(0, 250) + '...'}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}