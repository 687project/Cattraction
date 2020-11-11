import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from "react-redux";
import * as authActions from "../../actions/auth";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Login(props) {
    const {isLoginDialogVisible, handleClose, handleLogin} = props;

    const classes = useStyles();

    return (
        <Dialog open={isLoginDialogVisible} onClose={handleClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Welcome to Cattraction!
                </DialogContentText>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                value={props.email}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={props.changeEmail}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={props.password}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                helperText={props.loginError}
                                onChange={props.changePassword}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        onClick={() => handleLogin(props.email, props.password)}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Log In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog>
    );
}

const mapStateToProps = (state) => ({
    isLoginDialogVisible: state.getIn(['auth', 'isLoginDialogVisible']),
    loginError: state.getIn(['auth', 'loginError']),
    email: state.getIn(['auth', 'email']),
    password: state.getIn(['auth', 'password']),
})

const mapDispatchToProps = (dispatch) => ({
    handleClose() {
        const action = authActions.closeLogin();
        dispatch(action);
    },
    handleLogin(email, password) {
        const action = authActions.login(email, password);
        dispatch(action);
    },
    changeEmail(e) {
        const action = authActions.changeEmail(e.target.value);
        dispatch(action);
    },
    changePassword(e) {
        const action = authActions.changePassword(e.target.value);
        dispatch(action);
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)