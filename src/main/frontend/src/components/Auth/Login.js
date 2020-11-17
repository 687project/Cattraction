import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import background from '../../statics/login_sidepic.jpg'
import logoSmall from '../../statics/logoSmall.jpeg'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import * as actions from "../../actions/auth";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Cattraction
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    imageLogoSmall: {
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50%',
        width: '80px',
    },
    welcomeTitle: {
        color: '#595959',
        // fontFamily: 'Comic Sans MS',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


function SignInSide(props) {
    const classes = useStyles();

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    if (props.loginStatus) {
        return <Redirect to="/home" />
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <img src={logoSmall} alt="Avatar" className={classes.imageLogoSmall} />
                    <Typography component="h0" variant="h4">
                        <br></br>
                        <b className={classes.welcomeTitle}>Welcome to Cattraction</b>
                    </Typography>

                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            error={props.emailError !== ''}
                            helperText={props.emailError}
                            autoFocus
                            onChange={ e => setEmail(e.target.value) }
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={props.passwordError !== ''}
                            helperText={props.passwordError}
                            onChange={ e => setPassword(e.target.value) }
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={ e => props.handleSubmit(email, password)}
                        >
                            LOG IN
                        </Button>
                        <Grid container>
                            <Grid item xs />
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Not on Cattraction yet? Sign up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['auth', 'loginStatus']),
    emailError: state.getIn(['auth', 'emailError']),
    passwordError: state.getIn(['auth', 'passwordError']),
})

const mapDispatchToProps = (dispatch) => ({
    handleSubmit(email, password) {
        axios({
            method: 'post',
            url:'http://localhost:8080/api/v1/user-profile/login',
            params:{  email: email,password: password}
        }).then(res => {
            if(res.data["email"] == null) {
                dispatch(actions.emailError("No such user!"))
                // alert("No such user!")
            }
            else if(password !== res.data["password"]) {
                dispatch(actions.passwordError("wrong password!"))
                // alert("wrong password!")
            }
            else {
                alert("log in successfully!")
                localStorage.setItem('token', res.data.token)
                dispatch(actions.authenticateUser(res.data.user))
            }
            console.log(res.data);
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInSide)