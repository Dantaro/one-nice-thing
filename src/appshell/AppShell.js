import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { TransferModal } from 'component/transfer/TransferBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        backgroundImage: `linear-gradient(${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
        width: drawerWidth,
        border: 'none',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(4),
        backgroundColor: theme.palette.secondary.main,
        height: '100vh',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
    },
    transfer: {
        textDecoration: 'none',
        color: '#fff',
        cursor: 'pointer',
    },
}))

export default ({ children }) => {
    const classes = useStyles()
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const [transferSaveOpen, setTransferSaveOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List>
                <Link to="/" className={classes.link}>
                    <ListItem button>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                <Link to="/list" className={classes.link}>
                    <ListItem button>
                        <ListItemText primary="Your Nice Things" />
                    </ListItem>
                </Link>
                <Link to="/about" className={classes.link}>
                    <ListItem button>
                        <ListItemText primary="About" />
                    </ListItem>
                </Link>
                <Link to="/statistics" className={classes.link}>
                    <ListItem button>
                        <ListItemText primary="Statistics" />
                    </ListItem>
                </Link>
                <ListItem>
                    <Typography
                        variant="subtitle2"
                        onClick={() => setTransferSaveOpen(true)}
                        className={classes.transfer}
                    >
                        <FontAwesomeIcon icon={faFileUpload} />
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="subtitle2">v1.1.2</Typography>
                </ListItem>
            </List>
            <TransferModal
                open={transferSaveOpen}
                handleClose={() => {
                    setTransferSaveOpen(false)
                }}
            />
        </div>
    )

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        One Nice Thing
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor="left"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    )
}
