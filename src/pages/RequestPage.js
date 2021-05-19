import React, {useState} from 'react'
import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from "@material-ui/core"
import { makeStyles } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
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
        <div>
            <Container>
                <form noValidate autoComplete = 'off' onSubmit = {handleSubmit}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                onChange = {(e) => setMessage(e.target.value)}
                                className = {classes.field}
                                label = 'Message'
                                variant = 'outlined'
                                color = 'primary'
                                multiline
                                rows = {4}
                                fullWidth
                                required
                                error = {messageError}
                                value = {message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className = {classes.field}>
                                <FormLabel>Distress Type</FormLabel>
                                <RadioGroup value = {type} onChange = {e => setType(e.target.value)}>
                                    <FormControlLabel value = 'money' control = {<Radio />} label = 'Money'/>
                                    <FormControlLabel value = 'todos' control = {<Radio />} label = 'Todos'/>
                                    <FormControlLabel value = 'reminders' control = {<Radio />} label = 'Reminder'/>
                                    <FormControlLabel value = 'work' control = {<Radio />} label = 'Work'/>
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs = {12} align = 'center'>
                            <Button
                                type = 'submit' 
                                color = 'secondary' 
                                variant = 'contained' 
                                endIcon = {<SendIcon/>}
                            >
                                SUBMIT
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    );
}
 
export default RequestPage;