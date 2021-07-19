import { Container, Grid, Typography, Card, CardMedia, makeStyles } from "@material-ui/core";
import MemberCard from "../components/MemberCard";
import {serverUrl} from '../shared/serverUrl'

const useStyles = makeStyles((theme) => {
    return {
        card: {
            height: 200,
            width: 200
        },
        header: {
            backgroundColor: 'yellow'
        }
    }
});

export default function MemberPage() {
    const classes = useStyles();

    return (
        <div style = {{margin: '50px 0px'}}>
            <Container>
                <Grid container spacing = {3}>
                    <Grid item xs = {12} align = 'center'>
                        <Card className = {classes.card}>
                            <CardMedia image = {`img/dane.png`} title = 'Product Owner' className = {classes.card}/>
                        </Card>
                        <Typography variant = 'h4'>Dane Agoyaoy</Typography>
                        <Typography variant = 'h6'>Product Owner</Typography>
                        <Typography variant = 'body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores illum adipisci repellat. Harum inventore id hic eveniet vero saepe omnis labore et nemo. Placeat, temporibus rem explicabo voluptates suscipit recusandae.</Typography>
                    </Grid>
                    <Grid item xs = {12}>
                        <MemberCard member = {{
                            uri: 'leo.jpg',
                            memberName: 'Leo Mark Castro',
                            position: 'Scrum Master',
                            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores illum adipisci repellat. Harum inventore id hic eveniet vero saepe omnis labore et nemo. Placeat, temporibus rem explicabo voluptates suscipit recusandae.'
                        }} />
                    </Grid>
                    <Grid item xs = {12}>
                        <MemberCard member = {{
                            uri: 'rahino.jpg',
                            memberName: 'Rahino Quijano',
                            position: 'Software Developer',
                            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores illum adipisci repellat. Harum inventore id hic eveniet vero saepe omnis labore et nemo. Placeat, temporibus rem explicabo voluptates suscipit recusandae.'
                        }} />
                    </Grid>
                    <Grid item xs = {12}>
                        <MemberCard member = {{
                            uri: 'john.png',
                            memberName: 'John Danielle Caragdag',
                            position: 'Software Developer',
                            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores illum adipisci repellat. Harum inventore id hic eveniet vero saepe omnis labore et nemo. Placeat, temporibus rem explicabo voluptates suscipit recusandae.'
                        }} />
                    </Grid>
                    <Grid item xs = {12}>
                        <MemberCard member = {{
                            uri: 'rhizz.jpg',
                            memberName: 'Rhizz David De Jesus',
                            position: 'Software Developer',
                            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores illum adipisci repellat. Harum inventore id hic eveniet vero saepe omnis labore et nemo. Placeat, temporibus rem explicabo voluptates suscipit recusandae.'
                        }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}