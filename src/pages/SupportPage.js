import { Container, Grid, Button, Typography, Avatar } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

export default function SupportPage() {
    return (
        <Container>
            <Grid container spacing = {3} align = 'center'>
                <Grid item xs = {12}>
                    <Typography variant = 'h4'>Our friendly support team will help you with anything.</Typography>
                </Grid>
                <Grid item xs = {12}>
                    <div>
                        <Typography variant = 'body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore quia quam quae facere vitae soluta rem nostrum laboriosam. Voluptas aspernatur dolorem quibusdam est delectus et ratione impedit possimus. Nobis?</Typography>
                    </div>
                </Grid>
                <Grid item xs = {3}>
                    <Button startIcon={<CheckCircleIcon />}>Speedy</Button>
                </Grid>
                <Grid item xs = {3}>
                    <Button startIcon={<CheckCircleIcon />}>Flexible</Button>
                </Grid>
                <Grid item xs = {3}>
                    <Button startIcon={<CheckCircleIcon />}>Enthusiast</Button>
                </Grid>
                <Grid item xs = {3}>
                    <Button startIcon={<CheckCircleIcon />}>Speedy</Button>
                </Grid>
                <Grid item xs = {3}>
                    <Avatar><AccountCircleOutlinedIcon color = 'primary'/></Avatar>
                </Grid>
                <Grid item xs = {3}>
                    <Avatar><AccountCircleOutlinedIcon color = 'primary'/></Avatar>
                </Grid>
                <Grid item xs = {3}>
                    <Avatar><AccountCircleOutlinedIcon color = 'primary'/></Avatar>
                </Grid>
                <Grid item xs = {3}>
                    <Avatar><AccountCircleOutlinedIcon color = 'primary'/></Avatar>
                </Grid>
            </Grid>
        </Container>
    )
}