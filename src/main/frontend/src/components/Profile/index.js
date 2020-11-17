import Container from "@material-ui/core/Container";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import banner from "../../statics/user-banner.png"
import {Avatar} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        marginTop: 0,
    },
    grid: {
        backgroundColor: '#fff',
    },
    bannerWrapper: {
        position: 'relative',
        borderRadius: 'inherit',
        height: '160px',
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
    },
    avatarWrapper: {
        position: 'absolute',
        top: '50px',
        left: '25px',
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    userInfo: {},
}));

function Profile(props) {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Grid container justify="center" spacing={5} className={classes.gridContainer}>
                <Grid item xs={12}>
                    <Paper className={classes.grid} elevation={0}>
                        
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

const mapStatesToProps = (state) => ({
    user: state.getIn(['auth', 'user']),
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStatesToProps, mapDispatchToProps)(Profile)