import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import comingSoon from '../../statics/coming_soon.jpeg'

const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        margin: '1em 0',
        flexGrow: 1,
    },
    img: {
        width: '100%',
    }
}));

export default function ComingSoon() {
    const classes = useStyles();


    return (
        <div className={classes.contentWrapper}>
            <Grid container
                  spacing={3}
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
            >
                    <Grid item xs={12} sm={12}>
                        <img src={comingSoon} alt="coming soon" className={classes.img}/>
                    </Grid>
            </Grid>
        </div>
    );
}
