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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
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
            margin: "0 5px",
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
                        <Link to="/home" underline="none" component={RouterLink}>
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<HomeRoundedIcon style={{color: "primary"}}/>}
                            >
                                Home
                            </Button>
                        </Link>
                        <Link to="/newpost" underline="none" component={RouterLink}>
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<CreateRoundedIcon style={{color: "primary"}}/>}
                            >
                                Post
                            </Button>
                        </Link>

                        {
                            props.loginStatus ?
                                <Fragment>
                                  <Link to="/myaccount" underline="none" component={RouterLink}>
                                      <Button variant="outlined" color="primary" startIcon={<AccountCircleIcon style={{color: "primary"}}/>}>
                                          MyAccount
                                      </Button>
                                  </Link>

                                    <Button onClick={props.handleLogout} variant="outlined" color="primary" startIcon={<ExitToAppIcon style={{color: "primary"}}/>}>
                                        Logout
                                    </Button>
                                </Fragment> :

                                <Fragment>

                                    <Link to="/login" underline="none" component={RouterLink}>
                                        {/* <Button variant="text" color="primary"> */}
                                        <Button variant="outlined" color="primary" startIcon={<PersonIcon style={{color: "primary"}}/>}>
                                            Log In
                                        </Button>
                                    </Link>

                                    <Link to="/signup" underline="none" component={RouterLink}>
                                        {/* <Button variant="text" color="default"> */}
                                        <Button variant="outlined" color="primary" startIcon={<AccountCircleIcon style={{color: "primary"}}/>}>
                                            Sign Up
                                        </Button>
                                    </Link>

                                </Fragment>
                        }



                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['auth', 'loginStatus']),
})

const mapDispatchToProps = (dispatch) => ({
    handleLogout() {
        localStorage.removeItem('token');
        // ownProps.history.push('/home');
        const action = authActions.logout();
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
