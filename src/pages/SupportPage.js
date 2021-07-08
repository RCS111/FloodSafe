import { Container, Grid, Button, Typography, Divider, useTheme } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function SupportPage() {
    const theme = useTheme();

    return (
        <div style = {{margin: '50px 0px'}}>
            <Container>
                <Grid container spacing = {3} align = 'center'>
                    <Grid item xs = {12} align = 'center'>
                        <img src = 'img/logo.png' width = '15%' alt = 'Floodsafe Logo'/>
                        <Typography variant = 'h4'>FLOODSAFE</Typography>
                        <Typography variant = 'body1'>FLOOD SENSING AND FORECASTING SYSTEM</Typography>
                    </Grid>
                    <Grid item xs = {12}>
                        <Divider/>
                    </Grid>
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
                        <FontAwesomeIcon icon={faUserCircle} size="8x" color = {theme.palette.primary.light}/>
                    </Grid>
                    <Grid item xs = {3}>
                        <FontAwesomeIcon icon={faUserCircle} size="8x" color = {theme.palette.primary.light}/>
                    </Grid>
                    <Grid item xs = {3}>
                        <FontAwesomeIcon icon={faUserCircle} size="8x" color = {theme.palette.primary.light}/>
                    </Grid>
                    <Grid item xs = {3}>
                        <FontAwesomeIcon icon={faUserCircle} size="8x" color = {theme.palette.primary.light}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}