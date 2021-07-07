import { Container, Grid, TextField, Button, makeStyles, MenuItem } from "@material-ui/core";
import { useState } from 'react'
import { serverUrl } from '../shared/serverUrl'

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 100
    },
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: 10
    },
}));

function SettingsPage({credential}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [sensorLocation, setLocation] = useState('');

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [newEmailError, setNewEmailError] = useState(false);
    const [newPasswordError, setNewPasswordError] = useState(false);
    const [contactNoError, setContactNoError] = useState(false);
    const [locationNoError, setLocationNoError] = useState(false);

    const classes = useStyles();

    const handleEdit = (e) => {
        e.preventDefault();
        setFirstNameError(false);
        setLastNameError(false);
        setNewEmailError(false);
        setNewPasswordError(false);
        setContactNoError(false);
        setLocationNoError(false);
    
        if(firstName === '') {
            setFirstNameError(true);
        }
        if(lastName === '') {
            setLastNameError(true);
        }
        if(newEmail === '') {
            setNewEmailError(true);
        }
        if(newPassword === '') {
            setNewPasswordError(true);
        }
        if(contactNo === '') {
            setContactNoError(true);
        }
        if(sensorLocation === '') {
            setLocationNoError(true);
        }
    
        if(firstName && lastName && newEmail && newPassword && contactNo && sensorLocation) {
          fetch(`${serverUrl}users`, {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                firstName,
                lastName,
                email: newEmail,
                password: newPassword,
                contactNo,
                type: "standard",
                location: sensorLocation
            })
          }).then(() => {
              console.log('edited')
          })
        }
    }

    return (
        <Container>
            <form noValidate autoComplete = 'off' onSubmit = {handleEdit}>
                <Grid container>
                    <Grid item xs={12} key = 'firstName'>
                        <TextField
                            onChange = {(e) => setFirstName(e.target.value)}
                            className = {classes.field}
                            label = 'First Name'
                            variant = 'outlined'
                            color = 'primary'
                            fullWidth
                            error = {firstNameError}
                            value = {firstName}
                        />
                    </Grid>
                    <Grid item xs={12} key = 'lastName'>
                        <TextField
                            onChange = {(e) => setLastName(e.target.value)}
                            className = {classes.field}
                            label = 'Last Name'
                            variant = 'outlined'
                            color = 'primary'
                            fullWidth
                            error = {lastNameError}
                            value = {lastName}
                        />
                    </Grid>
                    <Grid item xs={12} key = 'email'>
                        <TextField
                            onChange = {(e) => setNewEmail(e.target.value)}
                            className = {classes.field}
                            label = 'Email Address'
                            variant = 'outlined'
                            color = 'primary'
                            fullWidth
                            error = {newEmailError}
                            value = {newEmail}
                        />
                    </Grid>
                    <Grid item xs={12} key = 'password'>
                        <TextField
                            onChange = {(e) => setNewPassword(e.target.value)}
                            className = {classes.field}
                            label = 'Password'
                            variant = 'outlined'
                            color = 'primary'
                            fullWidth
                            error = {newPasswordError}
                            value = {newPassword}
                            type = 'password'
                        />
                    </Grid>
                    <Grid item xs={12} key = 'contact'>
                        <TextField
                            onChange = {(e) => setContactNo(e.target.value)}
                            className = {classes.field}
                            label = 'Contact No.'
                            variant = 'outlined'
                            color = 'primary'
                            fullWidth
                            error = {contactNoError}
                            value = {contactNo}
                        />
                    </Grid>
                    <Grid item xs={12} key = 'location'>
                        <TextField
                            id="location"
                            color = 'primary'
                            fullWidth
                            select
                            label="Location"
                            value={sensorLocation}
                            onChange={(e) => setLocation(e.target.value)}
                            variant="outlined"
                            >
                            {['Calumpit', 'Malolos', 'Hagonoy', 'Paombong'].map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                            error = {locationNoError}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} key = 'submit'>
                        <Button
                        type = 'submit'
                        color = 'primary' 
                        variant = 'contained' 
                        className = {classes.button}
                        fullWidth
                        >
                            SIGN IN
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default SettingsPage
