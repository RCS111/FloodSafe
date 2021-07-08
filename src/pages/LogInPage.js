import { Backdrop, Button, Card, CardContent, Container, MenuItem, Divider, Fade, Grid, makeStyles, Modal, TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useState } from 'react'
import { useHistory } from 'react-router'
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

export default function LogInPage({setCredential, setSensorLocation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

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
    const [contactError, setContactError] = useState(false);
    const [locationError, setLocationError] = useState(false);

    const [open, setOpen] = useState(false);
    const history = useHistory();
    const classes = useStyles();

    const login = (email, password) => {
        const abortCont = new AbortController();
        fetch(`${serverUrl}users?password=${password}&&email=${email}`, { signal: abortCont.signal })
            .then(res => {
              if (!res.ok) {
                throw Error('App can\'t perform verification');
              } 
              return res.json();
            })
            .then(match => {
                if(match.length === 1) {
                    setCredential(match[0]);
                    setSensorLocation(match[0].location);
                    history.push('/home');
                }
                else{
                    setEmailError(true);
                    setPasswordError(true);
                    console.log('Incorrect Credentials');
                }
            })
            .catch(err => {
              if (err.name === 'AbortError') {
                console.log('fetch aborted')
              } else {
                console.log(err.message);
              }
            });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setEmailError(false);
        setPasswordError(false);
    
        if(email === '') {
            setEmailError(true);
        }
        if(password === '') {
            setPasswordError(true);
        }
    
        if(email && password) {
            login(email, password);
        }
    }

    const handleSignIn = (e) => {
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
        if(newEmail === '') {
            setNewEmailError(true);
        }
        if(newPassword === '') {
            setNewPasswordError(true);
        }
        if(contactNo === '') {
            setContactError(true);
        }
        if(sensorLocation === '') {
            setLocationError(true);
        }
    
        if(!firstNameError && !lastNameError && !newEmailError && !newPasswordError && !contactError && !locationError) {
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
              setOpen(false);
              login(newEmail, newPassword);
          })
        }
    }

    return (
        <Container className = {classes.container}>
            <Grid container>
                <Grid item xs={12} md={5} key = 'description'>
                    <Typography variant = 'h2'>Flood Safe</Typography>
                    <Typography variant = 'h5'>Be aware, prepared and updated with your local flood condition.</Typography>
                </Grid>
                <Grid item xs={12} md={6} offset = {1} key = 'form'>
                    <Card>
                        <CardContent>
                            <form noValidate autoComplete = 'off' onSubmit = {handleLogin}>
                                <TextField
                                    onChange = {(e) => setEmail(e.target.value)}
                                    className = {classes.field}
                                    label = 'Email'
                                    variant = 'outlined'
                                    color = 'primary'
                                    fullWidth
                                    error = {emailError}
                                    value = {email}
                                />
                                <TextField
                                    onChange = {(e) => setPassword(e.target.value)}
                                    className = {classes.field}
                                    label = 'Password'
                                    variant = 'outlined'
                                    color = 'primary'
                                    fullWidth
                                    error = {passwordError}
                                    value = {password}
                                    type = 'password'
                                />
                                <Button
                                type = 'submit' 
                                color = 'primary' 
                                variant = 'contained' 
                                className = {classes.button}
                                fullWidth
                                >
                                    LOG IN
                                </Button>
                                <Divider/>
                                <Button
                                color = 'secondary' 
                                variant = 'contained' 
                                onClick = {() => {
                                    setFirstName('');
                                    setLastName('');
                                    setNewEmail('');
                                    setNewPassword('');
                                    setContactNo('');
                                    setOpen(true);
                                }}
                                className = {classes.button}
                                fullWidth
                                >
                                    CREATE ACCOUNT
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Modal
                className={classes.modal}
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <Container>
                        <Typography variant = 'h4'>Sign Up</Typography>
                        <Divider/>
                        <form noValidate autoComplete = 'off' onSubmit = {handleSignIn}>
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
                </div>
                </Fade>
            </Modal>
        </Container>
    )
}