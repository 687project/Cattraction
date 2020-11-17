import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import logoSmall from '../../statics/logoSmall.jpeg'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            Cattraction
            {' ' + new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
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
    },
    paper: {
        marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp(props) {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ emailError, setEmailError ] = useState('');

    const handleSignUp = () => {
        setEmailError("user exists!")
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/v1/user-profile/signup',
            params: {email: email, password: password}
        }).then(res => {
            if (res.data) {
                alert("Sign up successfully!")
                localStorage.setItem('token', res.data.token)
                props.history.push('/home')
            } else {
                // alert("user exists!")
                setEmailError("user exists!")
            }
        }).catch(error => {
            console.log(error.response)
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                {/* <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar> */}
                <img src={logoSmall} alt="Avatar" className={classes.imageLogoSmall}/>
                <br></br>
                <Typography component="h1" variant="h4">
                    <b className={classes.welcomeTitle}>Join Cattraction Family</b>
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                value={email}
                                error={emailError !== ''}
                                helperText={emailError}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={e => {
                                    setEmail(e.target.value);
                                    setEmailError('');
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={password}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>
        </Container>
    );
}