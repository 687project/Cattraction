import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import UserCard from "../common/UserCard";

const useStyles = makeStyles((theme) => ({
    sidebar: {
        boxShadow: '0 2px 8px 0 rgba(0,0,0,.05)',
        backgroundColor: '#fff',
    },
}));

export default function Sidebar(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={3}>
            <div className={classes.sidebar}>
                <Paper square={true} elevation={0}>
                    <UserCard/>
                </Paper>
            </div>
        </Grid>
    )
}