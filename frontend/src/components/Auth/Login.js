import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import background from '../../statics/login_background.jpeg'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {authenticateUser} from "../../actions/auth";

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
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
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
                            onChange={ e => setPassword(e.target.value) }
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={ e => props.handleSubmit(email, password)}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs />
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
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
})

const mapDispatchToProps = (dispatch) => ({
    handleSubmit(email, password) {
      axios({
        method: 'post',
        url:'http://localhost:8080/api/v1/user-profile/login',
        params:{  email: email,password: password}
      }).then(res => {
            // if (res.data.code === 200) {
            //     localStorage.setItem('token', res.data.token);
            //     dispatch(authenticateUser(res.data.user));
            // } else {
            //     alert(res.data.message);
            // }
            //localStorage.setItem('token', res.data.token);
            //dispatch(authenticateUser(res.data.user));
            if(res.data["email"]==null)alert("No such user!")
            else if(password==res.data["password"])alert("log in successfully!")
            else alert("wrong password!")
            console.log(res.data);
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInSide)
