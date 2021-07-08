import { Container, Grid, Typography, Card, Divider } from "@material-ui/core";

export default function AboutPage() {
    return (
        <div style = {{margin: '50px 0px'}}>
            <Container>
                <Grid container spacing = {3}>
                    <Grid item xs = {12} align = 'center'>
                        <img src = 'img/logo.png' width = '15%' alt = 'Floodsafe Logo'/>
                        <Typography variant = 'h4'>FLOODSAFE</Typography>
                        <Typography variant = 'body1'>FLOOD SENSING AND FORECASTING SYSTEM</Typography>
                    </Grid>
                    <Grid item xs = {12}>
                        <Divider/>
                    </Grid>
                    <Grid item xs = {12}>
                        <div>
                            <Card style = {{width: '500px', float: 'left', margin: '0px 20px 20px 0px'}}>
                                <img src = 'img/about.jpg' height = '400px' style = {{objectFit: 'cover', float: 'left'}} background-position = 'center' alt = 'Banner'/>
                            </Card>
                            <Typography variant = 'body1' style = {{textIndent: 60}}>
                            Floodsafe Flood alarm and monitoring system for community are application that will 
                            help people specifically who lived in flood prone areas that are not aware on possible
                            hightides or flashfloods. FloodSAFE application will tell you information like the current 
                            level of flood water and can even tell you the nearest evacuation area or the highest 
                            possible place in your area. Floodsafe uses network of flood alarm sensors
                            to let the residence be aware of the flood situation in their area. This 
                            project is designed for those residents who experience flashflood, especially those 
                            who live in low-lying areas and for the residents to have the capability of monitoring 
                            the flood situation using the application. 
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}