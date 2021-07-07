import {useState, Fragment} from 'react'
import clsx from 'clsx';
import {Button, Popover, Card, CardHeader,CardContent, Divider, IconButton, makeStyles, useTheme, MenuItem} from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {HomeOutlined, CallOutlined, AssessmentOutlined, TimelineOutlined, MapOutlined, InfoOutlined, ContactMailOutlined, LiveHelpOutlined, PeopleAltOutlined, SettingsOutlined, HelpOutlined} from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TextField from '@material-ui/core/TextField';
import { serverUrl } from './shared/serverUrl'

const drawerWidth = 270;

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
            flexShrink: 0
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundImage: `url("${serverUrl}images/drawerBackground.jpg")`
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
          //padding: theme.spacing(3),
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: -drawerWidth,
          backgroundImage: `url("${serverUrl}images/contentBackground.jpg")`,
          backgroundSize: 'fill',
        },
        contentShift: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },

        active: {
            background: theme.palette.primary.light
        },
        title: {
            padding: theme.spacing(2),
            color: 'white'
        },
        appTitle: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2),
            color: theme.palette.getContrastText(theme.palette.secondary.light),
            backgroundColor: theme.palette.secondary.light
        },
        icon: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
        cardHeader: {
            backgroundColor: theme.palette.primary.light
        },
        locationSelector: {
            width: 150,
        },
        listItem: {
            color: 'white'
        },
        dialogPaper: {
            borderRadius: '10px'
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
    const [showDialog, setShowDialog] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const menuItems = [
        {
            text: 'Home',
            icon: <HomeOutlined style = {{color: 'white'}}/>,
            path: '/home'
        },
        {
            text: 'Reports',
            icon: <AssessmentOutlined style = {{color: 'white'}}/>,
            path: '/reports'
        },
        {
            text: 'Statistics',
            icon: <TimelineOutlined style = {{color: 'white'}}/>,
            path: '/statistics'
        },
        {
            text: 'Request',
            icon: <CallOutlined style = {{color: 'white'}}/>,
            path: '/request'
        },
        {
            text: 'Maps',
            icon: <MapOutlined style = {{color: 'white'}}/>,
            path: '/maps'
        },
        {
            text: 'About',
            icon: <InfoOutlined style = {{color: 'white'}}/>,
            path: '/about'
        },
        {
            text: 'Contact',
            icon: <ContactMailOutlined style = {{color: 'white'}}/>,
            path: '/contact'
        },
        {
            text: 'Support',
            icon: <LiveHelpOutlined style = {{color: 'white'}}/>,
            path: '/support'
        },
        {
            text: 'Member',
            icon: <PeopleAltOutlined style = {{color: 'white'}}/>,
            path: '/member'
        },
        {
            text: 'Settings',
            icon: <SettingsOutlined style = {{color: 'white'}}/>,
            path: '/settings'
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
                    <Typography className = {classes.appTitle} variant = 'h5' noWrap>
                        FloodSafe
                    </Typography>
                    {credential != null ?
                        <Fragment>
                            <TextField
                                id="location"
                                color = 'primary'
                                fullWidth
                                select
                                value={sensorLocation}
                                onChange={(e) => setSensorLocation(e.target.value)}
                                variant="outlined"
                                className = {classes.locationSelector}
                                >
                                {options.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Avatar className = {classes.avatar} onClick = {(e) => {setAnchorEl(e.currentTarget); setShowDialog(true);}}>
                                {`${credential.firstName[0].toUpperCase()}${credential.lastName[0].toUpperCase()}`}
                            </Avatar>
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
                credential != null ? <Popover 
                    id = 'popover'
                    open = {showDialog}
                    anchorEl = {anchorEl} 
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    onClose = {() => {setShowDialog(false); setAnchorEl(null);}}
                    classes = {{paper: classes.dialogPaper}}
                >
                    <Card style = {{width: '250px'}}>
                        <CardHeader 
                            avatar = {<Avatar></Avatar>}
                            title = {<Typography variant = 'h6'>{`${credential.firstName} ${credential.lastName}`}</Typography>}
                            subheader = {credential.email}
                            className = {classes.cardHeader}
                        />
                        <CardContent style = {{padding: '0px'}}>
                            <List>
                                <ListItem button key = 'Settings' onClick = {() => {setShowDialog(false); history.push('/settings');}}>
                                    <ListItemIcon><SettingsOutlined/></ListItemIcon>
                                    <ListItemText primary = 'Profile' />
                                </ListItem>
                                <Divider/>
                                <ListItem button key = 'Help' onClick = {() => {setShowDialog(false); history.push('/contact');}}>
                                    <ListItemIcon><HelpOutlined/></ListItemIcon>
                                    <ListItemText primary = 'Help' />
                                </ListItem>
                                <Divider/>
                                <ListItem>
                                    <Button color = 'secondary' variant = 'contained' onClick = {() => {setCredential(null); setAnchorEl(null);}} className = {classes.button} fullWidth>Log Out</Button>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Popover> : null
            }

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{paper: classes.drawerPaper}}
            >
                <div className={classes.drawerHeader}>
                    <img src = 'img/logo2.png' width = '20%'/>
                    <Typography variant = 'h5' className = {classes.title}>
                        Floodsafe
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon style = {{color: 'white'}}/> : <ChevronRightIcon  style = {{color: 'white'}}/>}
                    </IconButton>
                </div>
                
                <Card style = {{backgroundColor: theme.palette.secondary.light, margin: '10px', padding: '10px'}}>
                    <Typography variant = 'h6' align = 'center'>{`${credential.firstName} ${credential.lastName}`}</Typography>
                </Card>
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
                            <ListItemText primary = {item.text} classes = {{primary: classes.listItem}}/>
                        </ListItem>
                    ))}
                </List>
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
                            <ListItemText primary = {item.text} classes = {{primary: classes.listItem}}/>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {menuItems.slice(9, 10).map(item => (
                        <ListItem
                            button
                            key = {item.text}
                            onClick = {() => history.push(item.path)}
                            className = {location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary = {item.text} classes = {{primary: classes.listItem}}/>
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