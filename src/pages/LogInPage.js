import { Backdrop, Button, Card, CardContent, Container, Divider, Fade, Grid, makeStyles, Modal, TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { serverUrl } from '../shared/serverUrl'

const useStyles = makeStyles((theme) => ({
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
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function LogInPage({setCredential}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [newEmail, setNewEemail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [newEmailError, setNewEmailError] = useState(false);
    const [newPasswordError, setNewPasswordError] = useState(false);
    const [contactNoError, setContactNoError] = useState(false);

    const [open, setOpen] = useState(false);
    const history = useHistory();
    const classes = useStyles();

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
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        setFirstNameError(false);
        setLastNameError(false);
        setNewEmailError(false);
        setNewPasswordError(false);
        setContactNoError(false);
    
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
    
        if(firstName && lastName && newEmail && newPassword && contactNo) {
          fetch(`${serverUrl}users`, {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                firstName,
                lastName,
                email: newEmail,
                password: newPassword,
                contactNo,
                type: "standard"
            })
          }).then(() => {
              setOpen(false);
          })
        }
    }

    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={6} key = 'description'>
                    <Typography variant = 'h2'>Flood Safe</Typography>
                    <Typography variant = 'h5'>Be aware, prepared and updated with your local flood condition.</Typography>
                </Grid>
                <Grid item xs={12} md={6} key = 'form'>
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
                                    setNewEemail('');
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
                                <Grid item xs={12} md={6} key = 'firstName'>
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
                                <Grid item xs={12} md={6} key = 'lastName'>
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
                                        onChange = {(e) => setNewEemail(e.target.value)}
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