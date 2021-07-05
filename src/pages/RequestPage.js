import React, {useState} from 'react'
import { Button, Container, Typography, Grid, TextField, Card } from "@material-ui/core"
import { makeStyles } from '@material-ui/core'
import {serverUrl} from '../shared/serverUrl'

const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    }
});

const RequestPage = () => {
    const [message, setMessage] = useState('');
    const [type, setType] = useState('todos');
    const [messageError, setMessageError] = useState(false);
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageError(false);
    
        if(message === '') {
            setMessageError(true);
        }
    
        if(message && type) {
          fetch(`${serverUrl}distresses`, {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                userId: 1, 
                message, 
                type,
                uri: '',
                xcoor: '',
                ycoor: ''
            })
          }).then(() => {
              setMessage('');
              setType('todos');
          })
        }
    }

    return (
        <Container>
            <form>
                <Grid container spacing = {3}>
                    <Grid item xs = {12} align = 'center'>
                        <Card>
                            <img src = 'img/requestBanner.jpg' width = '100%' background-position = 'center' alt = 'Banner'/>
                        </Card>
                    </Grid>
                    <Grid item xs = {12}>
                        <Typography variant = 'h6'>Fill up the following and submit your request</Typography>
                    </Grid>
                    <Grid item xs = {12} md = {4}>
                        <TextField
                            label = 'Name'
                            variant = 'outlined'
                            color = 'secondary'
                            fullWidth
                        />
                        <TextField
                            label = 'Address'
                            variant = 'outlined'
                            color = 'secondary'
                            fullWidth
                        />
                        <TextField
                            label = 'Contact No.'
                            variant = 'outlined'
                            color = 'secondary'
                            fullWidth
                        />
                        <TextField
                            label = 'Age'
                            variant = 'outlined'
                            color = 'secondary'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs = {12} md = {8}>
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
                        <Button variant = 'contained' type = 'submit' color = 'primary'>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
 
export default RequestPage;