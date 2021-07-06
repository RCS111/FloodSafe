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

const RequestPage = ({credential}) => {
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [addressError, setAddressError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageError(false);
        setAddressError(false);
    
        if(message === '') {
            setMessageError(true);
        }
        if(address === '') {
            setAddressError(true);
        }
    
        if(message && address) {
          fetch(`${serverUrl}distresses`, {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                firstName: credential.firstName,
                lastName: credential.lastName,
                email: credential.email,
                contactNo: credential.contactNo,
                address,
                message, 
                uri: '',
                xcoor: '',
                ycoor: ''
            })
          }).then(() => {
              setAddress('');
              setMessage('');
          })
        }
    }

    return (
        <Container>
            <form noValidate autoComplete = 'off' onSubmit = {handleSubmit}>
                <Grid container spacing = {3}>
                    <Grid item xs = {12} align = 'center'>
                        <Card>
                            <img src = 'img/requestBanner.jpg' width = '100%' background-position = 'center' alt = 'Banner'/>
                        </Card>
                    </Grid>
                    <Grid item xs = {12}>
                        <Typography variant = 'h6'>Fill up the following and submit your request</Typography>
                    </Grid>
                    <Grid item xs = {12}>
                        <TextField
                            onChange = {(e) => setAddress(e.target.value)}
                            label = 'Address'
                            variant = 'outlined'
                            color = 'secondary'
                            fullWidth
                            error = {addressError}
                            value = {address}
                        />
                    </Grid>
                    <Grid item xs = {12}>
                        <TextField
                            onChange = {(e) => setMessage(e.target.value)}
                            label = 'Message'
                            variant = 'outlined'
                            color = 'secondary'
                            multiline
                            rows={4}
                            fullWidth
                            error = {messageError}
                            value = {message}
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