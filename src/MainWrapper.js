import {useState, Fragment} from 'react'
import clsx from 'clsx';
import {Button, Container, Divider, IconButton, makeStyles, useTheme} from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {HomeOutlined, CallOutlined, AssessmentOutlined, TimelineOutlined, MapOutlined, InfoOutlined, ContactMailOutlined, LiveHelpOutlined, PeopleAltOutlined} from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            background: '#F9F9F9',
            width: '100%',
            height: '100%',
        },
        appBar: {
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth
        },
        drawerHeader: {
          display: 'flex',
          alignItems: 'center',
          padding: theme.spacing(0, 1),
          // necessary for content to be below app bar
          ...theme.mixins.toolbar,
          justifyContent: 'flex-end',
        },
        content: {
          flexGrow: 1,
          padding: theme.spacing(3),
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: -drawerWidth,
        },
        contentShift: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },

        active: {
            background: '#F4F4F4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appTitle: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
              width: theme.spacing(9) + 1,
            },
        },
        button: {
            marginTop: 20,
            marginBottom: 20
        }
    }
})

const options = ['Hagonoy', 'Paombong', 'Malolos', 'Calumpit'];

export default function MainWrapper({children, credential, setCredential, sensorLocation, setSensorLocation}) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const menuItems = [
        {
            text: 'Home',
            icon: <HomeOutlined color='secondary'/>,
            path: '/home'
        },
        {
            text: 'Reports',
            icon: <AssessmentOutlined color='secondary'/>,
            path: '/reports'
        },
        {
            text: 'Statistics',
            icon: <TimelineOutlined color='secondary'/>,
            path: '/statistics'
        },
        {
            text: 'Request',
            icon: <CallOutlined color='secondary'/>,
            path: '/request'
        },
        {
            text: 'Maps',
            icon: <MapOutlined color='secondary'/>,
            path: '/maps'
        },
        {
            text: 'About',
            icon: <InfoOutlined color='secondary'/>,
            path: '/about'
        },
        {
            text: 'Contact',
            icon: <ContactMailOutlined color='secondary'/>,
            path: '/contact'
        },
        {
            text: 'Support',
            icon: <LiveHelpOutlined color='secondary'/>,
            path: '/support'
        },
        {
            text: 'Member',
            icon: <PeopleAltOutlined color='secondary'/>,
            path: '/member'
        },
    ]

    return (
        <div className = {classes.root}>
            <AppBar
                position = 'fixed'
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                elevation = {1}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography className = {classes.appTitle} variant = 'h6' noWrap>
                        FloodSafe
                    </Typography>
                    {credential != null ?
                        <Fragment>
                            <Autocomplete
                                id="location-selector"
                                style={{ width: 300 }}
                                options={options}
                                autoHighlight
                                value={sensorLocation}
                                onChange={(event, newValue) => {
                                    setSensorLocation(newValue);
                                }}
                                renderOption={(option) => (
                                    <span>{option}</span>
                                )}
                                //inputValue={inputValue}
                                //onInputChange={(event, newInputValue) => {
                                //setInputValue(newInputValue);
                                //}}
                                renderInput={(params) => <TextField {...params} variant="outlined" />}
                            />
                            <Typography>{`${credential.firstName} ${credential.lastName}`}</Typography>
                            <Avatar className = {classes.avatar} onClick = {(e) => setAnchorEl(e.currentTarget)}/>
                        </Fragment> :
                        <Button 
                            color = 'secondary' 
                            variant = 'contained'
                            onClick = {() => history.push('/login')}
                        >
                            Log In
                        </Button>  
                    }
                </Toolbar>
            </AppBar>

            {
                credential != null ? <Menu
                    id = 'account'
                    anchorEl = {anchorEl}
                    keppMounted
                    open = {Boolean(anchorEl)}
                    onClose = {() => setAnchorEl(null)}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                >
                    <Container align ='center'>
                        <Avatar className = {classes.avatar}/>
                        <Typography variant = 'h6'>{`${credential.firstName} ${credential.lastName}`}</Typography>
                        <Typography variant = 'p'>{`${credential.email}`}</Typography>
                        <Button color = 'secondary' variant = 'contained' onClick = {() => {setCredential(null); setAnchorEl(null);}} fullWidth className = {classes.button}>Log Out</Button>
                    </Container>
                </Menu> : null
            }

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{paper: classes.drawerPaper}}
            >
                <div className={classes.drawerHeader}>
                    <Avatar src = 'img/logo.png'/>
                    <Typography variant = 'h5' className = {classes.title}>
                        Flood Safe
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon  /> : <ChevronRightIcon  />}
                    </IconButton>
                </div>
                
                <Button startIcon={<AccountCircleOutlinedIcon />} variant = 'contained' color = 'secondary'>{`${credential.firstName} ${credential.lastName}`}</Button>
                <Divider />
                <List>
                    {menuItems.slice(0, credential != null ? 5 : 4).map(item => (
                        <ListItem
                            button
                            key = {item.text}
                            onClick = {() => history.push(item.path)}
                            className = {location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary = {item.text} />
                        </ListItem>
                    ))}
                </List>
                {/* <List>
                    {menuItems.slice(4, 5).map(item => (
                        <ListItem
                            button
                            key = {item.text}
                            onClick = {() => history.push(item.path)}
                            className = {location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary = {item.text} />
                        </ListItem>
                    ))}
                </List> */}
                <Divider />
                <List>
                    {menuItems.slice(5, 9).map(item => (
                        <ListItem
                            button
                            key = {item.text}
                            onClick = {() => history.push(item.path)}
                            className = {location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary = {item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={clsx(classes.content, {[classes.contentShift]: open})}>
                <div className={classes.drawerHeader} />
                {children}
            </div>
        </div>
    )
}