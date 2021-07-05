import { Container, Grid, Typography, Avatar, Card } from "@material-ui/core";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

export default function MemberPage() {
    return (
        <Container>
            <Grid container spacing = {3}>
                <Grid item xs = {12} align = 'center'>
                    <Avatar><AccountCircleOutlinedIcon color = 'primary'/></Avatar>
                    <Typography variant = 'h4'>FOUNDER</Typography>
                    <Typography variant = 'h6'>Position</Typography>
                    <Typography variant = 'body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores illum adipisci repellat. Harum inventore id hic eveniet vero saepe omnis labore et nemo. Placeat, temporibus rem explicabo voluptates suscipit recusandae.</Typography>
                </Grid>
                <Grid item xs = {12}>
                    <Card>
                        <Typography variant = 'h4'>FOUNDER</Typography>
                        <Typography variant = 'h6'>Position</Typography>
                        <Typography variant = 'body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores illum adipisci repellat. Harum inventore id hic eveniet vero saepe omnis labore et nemo. Placeat, temporibus rem explicabo voluptates suscipit recusandae.</Typography>
                    </Card>
                </Grid>
                <Grid item xs = {12}>
                    <Card>
                        <Typography variant = 'h4'>FOUNDER</Typography>
                        <Typography variant = 'h6'>Position</Typography>
                        <Typography variant = 'body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores illum adipisci repellat. Harum inventore id hic eveniet vero saepe omnis labore et nemo. Placeat, temporibus rem explicabo voluptates suscipit recusandae.</Typography>
                    </Card>
                </Grid>
                <Grid item xs = {12}>
                    <Card>
                        <Typography variant = 'h4'>FOUNDER</Typography>
                        <Typography variant = 'h6'>Position</Typography>
                        <Typography variant = 'body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores illum adipisci repellat. Harum inventore id hic eveniet vero saepe omnis labore et nemo. Placeat, temporibus rem explicabo voluptates suscipit recusandae.</Typography>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}