import {useState} from 'react'
import clsx from 'clsx';
import {Divider, IconButton, makeStyles, useTheme} from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {HomeOutlined, CallOutlined, AssessmentOutlined, TimelineOutlined, MapOutlined, InfoOutlined, ContactMailOutlined, LiveHelpOutlined, PeopleAltOutlined, Menu, ChevronRight, ChevronLeft} from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#F9F9F9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#F4F4F4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
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
          marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
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
    }
})

export default function Layout({children}) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

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
                        onClick={() => setOpen(true)}
                        edge="start"
                        className={clsx(classes.menuButton, {
                          [classes.hide]: open,
                        })}
                    >
                        <Menu/>
                    </IconButton>
                    <Typography className = {classes.appTitle} variant = 'h6' noWrap>
                        FloodSafe
                    </Typography>
                    <Typography>
                        Juan Dela Cruz
                    </Typography>
                    <Avatar className = {classes.avatar}/>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                })}
                classes={{
                  paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                  }),
                }}
            >
                <div className={classes.toolbar}>
                    <Typography variant = 'h5' className = {classes.title}>
                        Flood Safe
                    </Typography>
                    <IconButton onClick={() => setOpen(false)}>
                        {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {menuItems.slice(0, 4).map(item => (
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
                <Divider />
                <List>
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
                            <ListItemText primary = {item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className = {classes.page}>
                <div className = {classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}