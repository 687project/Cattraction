import React, {Fragment} from 'react';
import Button from "@material-ui/core/Button";
import {Toolbar} from "@material-ui/core";
import logo from '../../statics/logo.jpeg'
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import {darken} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import * as homeActions from "../../actions/home";
import * as authActions from "../../actions/auth";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    header: {
        boxShadow: '0 2px 8px 0 rgba(0,0,0,.05)',
    },
    toolbar: {
        padding: 0,
    },
    logo: {
        display: 'flex',
        width: '220px',
        height: '64px',
    },
    logoImg: {
        width: '100%',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: darken(theme.palette.common.white, 0.05),
        '&:hover': {
            backgroundColor: darken(theme.palette.common.white, 0.10),
        },
        marginRight: '2em',
        marginLeft: 0,
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        minWidth: '10em',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
    accountMenu: {
        justifyContent: 'space-between',
        '& Button': {
            marginRight: "5px",
        }
    },
}));

function Header(props) {
    const classes = useStyles();
    return (
        <AppBar
            position="static"
            color="white"
            elevation={0}
            className={classes.header}
        >
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <a href="/" className={classes.logo}>
                        <img src={logo} alt="Nav Logo" className={classes.logoImg}/>
                    </a>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search"
                            fullWidth={true}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                    <div style={{margin: '0 auto'}}>
                    </div>
                    <div className={classes.accountMenu}>
                        <Link to={"/home"} underline="none" component={RouterLink}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                startIcon={<HomeRoundedIcon style={{color: '#f73378'}}/>}
                            >
                                Home
                            </Button>
                        </Link>
                        {
                            props.login ? <Button variant="text" color="default" onClick={props.handleLogout}>Logout</Button> :
                                <Fragment>
                                    <Button variant="text" color="primary" onClick={props.handleClickOpen}>Log In</Button>
                                    <Button variant="text" color="default" href="/signup">Sign Up</Button>
                                </Fragment>
                        }
                        <Button
                            variant="outlined"
                            color="secondary"
                            startIcon={<CreateRoundedIcon style={{color: '#f73378'}}/>}
                        >
                            Post
                        </Button>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

const mapStateToProps = (state) => ({
    login: state.getIn(['auth', 'login']),
    open: state.getIn(['auth', 'open']),
})

const mapDispatchToProps = (dispatch) => ({
    handleClickOpen() {
        const action = authActions.openLogin();
        dispatch(action);
    },
    handleLogout() {
        const action = authActions.logout();
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)