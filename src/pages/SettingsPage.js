import { Container, Grid, TextField, Button, makeStyles, MenuItem, Card, CardContent, CardHeader} from "@material-ui/core";
import { useState } from 'react'
import { serverUrl } from '../shared/serverUrl'

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 100
    },
    field: {
      marginTop: 10,
      marginBottom: 10,
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

function SettingsPage({credential, setCredential}) {
    const [firstName, setFirstName] = useState(credential.firstName);
    const [lastName, setLastName] = useState(credential.lastName);
    const [newEmail, setNewEmail] = useState(credential.email);
    const [newPassword, setNewPassword] = useState('');
    const [contactNo, setContactNo] = useState(credential.contactNo);
    const [sensorLocation, setLocation] = useState(credential.location);

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [newEmailError, setNewEmailError] = useState(false);
    const [newPasswordError, setNewPasswordError] = useState(false);
    const [contactError, setContactError] = useState(false);
    const [locationError, setLocationError] = useState(false);

    const classes = useStyles();

    const handleInformation = (e) => {
        e.preventDefault();
        setFirstNameError(false);
        setLastNameError(false);
        setNewEmailError(false);
        setNewPasswordError(false);
        setContactError(false);
        setLocationError(false);
    
        if(firstName === '') {
            setFirstNameError(true);
        }
        if(lastName === '') {
            setLastNameError(true);
        }
        if(contactNo === '') {
            setContactError(true);
        }
        if(sensorLocation === '') {
            setLocationError(true);
        }
    
        if(!firstNameError && !lastNameError && !contactError && !locationError) {
          fetch(`${serverUrl}users/${credential.id}`, {
            method: 'PUT',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                ...credential,
                firstName,
                lastName,
                contactNo,
                location: sensorLocation
            })
          }).then(() => {
            setCredential({...credential,
                firstName,
                lastName,
                contactNo,
                location: sensorLocation});
          })
        }
    }

    const handleCredentials = (e) => {
        e.preventDefault();
        setNewEmailError(false);
        setNewPasswordError(false);
    
        if(newEmail === '') {
            setNewEmailError(true);
        }
        if(newPassword !== '' && newPassword.length < 6) {
            setNewPasswordError(true);
        }
    
        if(!newPasswordError && !newEmailError) {
          fetch(`${serverUrl}users/${credential.id}`, {
            method: 'PUT',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(newPassword !== '' ? {
                ...credential,
                email: newEmail,
                password: newPassword
            } : {...credential, email: newEmail})
          }).then(() => {
            setCredential(newPassword !== '' ? {
                ...credential,
                email: newEmail,
                password: newPassword
            } : {...credential, email: newEmail});
          })
        }
    }

    return (
        <div style = {{margin: '50px 0px'}}>
            <Container>
                <Grid container spacing = {1}>
                    <Grid item xs = {12}>
                        <Card>
                            <CardHeader
                                title = 'Edit Account Information'
                            />
                            <CardContent>
                                <form noValidate autoComplete = 'off' onSubmit = {handleInformation}>
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
                                        <Grid item xs={12} key = 'contact'>
                                            <TextField
                                                onChange = {(e) => setContactNo(e.target.value)}
                                                className = {classes.field}
                                                label = 'Contact No.'
                                                variant = 'outlined'
                                                color = 'primary'
                                                fullWidth
                                                error = {contactError}
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
                                                className = {classes.field}
                                                variant="outlined"
                                                >
                                                {['Calumpit', 'Malolos', 'Hagonoy', 'Paombong'].map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                                error = {locationError}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={12} key = 'submit' align = 'center'>
                                            <Button
                                            type = 'submit'
                                            color = 'primary' 
                                            variant = 'contained' 
                                            className = {classes.button}
                                            >
                                                SAVE CHANGES
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs = {12}>
                        <Card>
                            <CardHeader
                                title = 'Edit Account Credentials'
                            />
                            <CardContent>
                                <form noValidate autoComplete = 'off' onSubmit = {handleCredentials}>
                                    <Grid container>
                                        <Grid item xs={12} key = 'email'>
                                            <TextField
                                                onChange = {(e) => setNewEmail(e.target.value)}
                                                className = {classes.field}
                                                label = 'New Email Address'
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
                                                label = 'New Password'
                                                variant = 'outlined'
                                                color = 'primary'
                                                fullWidth
                                                error = {newPasswordError}
                                                value = {newPassword}
                                                type = 'password'
                                            />
                                        </Grid>
                                        <Grid item xs={12} key = 'submit' align = 'center'>
                                            <Button
                                            type = 'submit'
                                            color = 'primary' 
                                            variant = 'contained' 
                                            className = {classes.button}
                                            >
                                                SAVE CHANGES
                                            </Button>
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

export default SettingsPage
