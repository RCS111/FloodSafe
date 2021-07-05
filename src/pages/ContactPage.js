import { Container, Grid, Card, Typography, TextField, Button } from "@material-ui/core";

export default function ContactPage() {
    return (
        <Container>
            <Grid container spacing = {3}>
                <Grid item xs = {12}>
                    <Typography variant = 'h5'>Contact Floodsafe</Typography>
                    <Typography variant = 'body1'>FLOOD SENSING AND FORECASTING SYSTEM</Typography>
                </Grid>
                <Grid item xs = {12} align = 'center'>
                    <Card>
                        <Typography variant = 'h3'>Contact Us</Typography>
                        <form>
                            <Grid container spacing = {3}>
                                <Grid item xs = {2}>
                                    <Typography variant = 'body1'>NAME:</Typography>
                                </Grid>
                                <Grid item xs = {10}>
                                    <TextField
                                        label = 'Name'
                                        variant = 'outlined'
                                        color = 'secondary'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs = {2}>
                                    <Typography variant = 'body1'>NAME:</Typography>
                                </Grid>
                                <Grid item xs = {10}>
                                    <TextField
                                        label = 'Email'
                                        variant = 'outlined'
                                        color = 'secondary'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs = {2}>
                                    <Typography variant = 'body1'>NAME:</Typography>
                                </Grid>
                                <Grid item xs = {10}>
                                    <TextField
                                        label = 'Phone'
                                        variant = 'outlined'
                                        color = 'secondary'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs = {2}>
                                    <Typography variant = 'body1'>NAME:</Typography>
                                </Grid>
                                <Grid item xs = {10}>
                                    <TextField
                                        label = 'Subject'
                                        variant = 'outlined'
                                        color = 'secondary'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs = {2}>
                                    <Typography variant = 'body1'>NAME:</Typography>
                                </Grid>
                                <Grid item xs = {10}>
                                    <TextField
                                        label = 'Message'
                                        variant = 'outlined'
                                        color = 'secondary'
                                        multiline
                                        rows={4}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs = {12} align = 'center'>
                                    <Button type = 'submit' variant = 'contained' color = 'primary'>Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Card>
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