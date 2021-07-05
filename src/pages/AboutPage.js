import { Container, Grid, Typography } from "@material-ui/core";

export default function AboutPage() {
    return (
        <Container>
            <Grid container spacing = {3}>
                <Grid item xs = {12} align = 'center'>
                    <img src = 'img/logo.png' width = '20%' alt = 'Floodsafe Logo'/>
                    <Typography variant = 'h4'>FLOODSAFE</Typography>
                    <Typography variant = 'body1'>FLOOD SENSING AND FORECASTIGN SYSTEM</Typography>
                </Grid>
                <Grid item xs = {12}>
                    <div>
                        <Typography variant = 'h5'>About Floodsafe</Typography>
                    </div>
                </Grid>
                <Grid item xs = {12}>
                    <div>
                        <Typography variant = 'body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod velit odit molestiae, sint recusandae exercitationem cumque accusantium eligendi magni inventore laborum, quasi quos maxime et ipsam quisquam nostrum expedita.</Typography>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}