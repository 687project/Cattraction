import React, {Fragment, useState} from 'react';
import Button from "@material-ui/core/Button";
import {Toolbar} from "@material-ui/core";
import logo from '../../statics/logo.jpeg'
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
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
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

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
    searchBar: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: darken(theme.palette.common.white, 0.02),
        '&:hover': {
            backgroundColor: darken(theme.palette.common.white, 0.04),
        },
        '&:focus': {
            backgroundColor: darken(theme.palette.common.white, 0.04),
        },
        marginRight: '2em',
        marginLeft: '2em',
        minWidth: '10em',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
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
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = () => {
        alert("Your searched " + searchInput);
    }

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
                    <div className={classes.searchBar}>
                        <TextField
                            placeholder="Search"
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                            type="text"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={handleSearch}>
                                        <SearchIcon style={{color: "primary"}}/>
                                    </IconButton>
                                ),
                                style: {height: '39px'}
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
                                        <Button variant="outlined" color="primary"
                                                startIcon={<AccountCircleIcon style={{color: "primary"}}/>}>
                                            Profile
                                        </Button>
                                    </Link>

                                    <Link to="/home" underline="none" component={RouterLink}>
                                        <Button onClick={props.handleLogout} variant="outlined" color="primary"
                                                startIcon={<ExitToAppIcon style={{color: "primary"}}/>}>
                                            Log Out
                                        </Button>
                                    </Link>
                                </Fragment> :
                                <Fragment>
                                    <Link to="/login" underline="none" component={RouterLink}>
                                        <Button variant="outlined" color="primary"
                                                startIcon={<PersonIcon style={{color: "primary"}}/>}>
                                            Log In
                                        </Button>
                                    </Link>

                                    <Link to="/signup" underline="none" component={RouterLink}>
                                        <Button variant="outlined" color="primary"
                                                startIcon={<AccountCircleIcon style={{color: "primary"}}/>}>
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
        const action = authActions.logout();
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
