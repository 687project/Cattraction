import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from "react-redux";
import * as authActions from "../../actions/auth";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
    const {open, handleClose, handleLogin } = props;

    const classes = useStyles();

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                </Grid>
                <Button
                    onClick={handleLogin}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Log In
                </Button>
            </form>
            </DialogContent>
        </Dialog>
    );
}

const mapStateToProps = (state) => ({
    open: state.getIn(['auth', 'open'])
})

const mapDispatchToProps = (dispatch) => ({
    handleClose() {
        const action = authActions.closeLogin();
        dispatch(action);
    },
    handleLogin() {
        const action = authActions.login();
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)