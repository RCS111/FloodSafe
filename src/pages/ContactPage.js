import { Container, Grid, Card, CardHeader, CardContent, Typography, TextField, Button, Divider } from "@material-ui/core";
import {serverUrl} from '../shared/serverUrl'
import React, {useState} from 'react'

export default function ContactPage() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserNameError(false);
        setEmailError(false);
        setPhoneError(false);
        setSubjectError(false);
        setMessageError(false);
    
        if(userName === '') {
            setUserNameError(true);
        }
        if(email === '') {
            setEmailError(true);
        }
        if(phone === '') {
            setPhoneError(true);
        }
        if(subject === '') {
            setSubjectError(true);
        }
        if(message === '') {
            setMessageError(true);
        }
    
        if(userNameError && emailError && phoneError && subjectError && messageError) {
          fetch(`${serverUrl}queries`, {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                userName,
                email,
                phone,
                subject,
                message
            })
          }).then(() => {
            setUserName('');
            setEmail('');
            setPhone('');
            setSubject('');
            setMessage('');
          })
        }
    }

    return (
        <div  style = {{margin: '50px 0px'}}>
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
                    <Grid item xs = {12} align = 'center'>
                        <Card>
                            <CardHeader title = 'Contact Us' align = 'left'/>
                            <CardContent>
                                <form noValidate autoComplete = 'off' onSubmit = {handleSubmit}>
                                    <Grid container spacing = {3}>
                                        <Grid item xs = {12}>
                                            <TextField
                                                label = 'Name'
                                                variant = 'outlined'
                                                color = 'secondary'
                                                fullWidth
                                                error = {userNameError}
                                                value = {userName}
                                                onChange = {(e) => setUserName(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs = {12}>
                                            <TextField
                                                label = 'Email'
                                                variant = 'outlined'
                                                color = 'secondary'
                                                fullWidth
                                                error = {emailError}
                                                value = {email}
                                                onChange = {(e) => setEmail(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs = {12}>
                                            <TextField
                                                label = 'Phone'
                                                variant = 'outlined'
                                                color = 'secondary'
                                                fullWidth
                                                error = {phoneError}
                                                value = {phone}
                                                onChange = {(e) => setPhone(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs = {12}>
                                            <TextField
                                                label = 'Subject'
                                                variant = 'outlined'
                                                color = 'secondary'
                                                fullWidth
                                                error = {subjectError}
                                                value = {subject}
                                                onChange = {(e) => setSubject(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs = {12}>
                                            <TextField
                                                label = 'Message'
                                                variant = 'outlined'
                                                color = 'secondary'
                                                multiline
                                                rows={4}
                                                fullWidth
                                                error = {messageError}
                                                value = {message}
                                                onChange = {(e) => setMessage(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs = {12} align = 'center'>
                                            <Button type = 'submit' variant = 'contained' color = 'primary'>Submit</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}