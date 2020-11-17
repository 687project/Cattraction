import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Divider, Typography} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        boxShadow: '0 2px 8px 0 rgba(0,0,0,.05)',
        backgroundColor: '#fff',
    },
    post: {
        padding: '0 110px 40px',
    },
    header: {
        padding: '30px 0 10px',
    },
    headerMetaData: {
        marginBottom: '20px',
        "& > span": {
            color: '#a1a1a6',
            borderRight: '1px solid #e0e0e',
            paddingRight: '10px',
            marginRight: '10px',
            fontSize: '14px',
            lineHeight: '18px',
        }
    },
    description: {
        margin: '20px 0',
    },
    picture: {
        margin: '20px 0',
    },
}));


function Main(props) {
    const classes = useStyles();
    const {postTime, description, photoList} = props;

    return (
        <Grid item xs={12} md={9}>
            <div className={classes.mainGrid}>
                <Paper square={true} elevation={0} className={classes.post}>
                    <div className={classes.header}>
                        <div className={classes.headerMetaData}>
                            <span>{postTime}</span>
                            <span>{photoList.length} pictures</span>
                        </div>
                        <Divider/>
                    </div>
                    <Typography className={classes.description}>
                        {description}
                    </Typography>
                    {
                        photoList.map((img) => (
                            <CardMedia
                                image={img}
                                component="img"
                                classes={{
                                    img: classes.picture,
                                }}
                            />
                        ))
                    }
                </Paper>
            </div>
        </Grid>
    )
}

const mapStatesToProps = (state) => ({
    postTime: "2020:11:11",
    photoList: state.getIn(['post', 'photoList']),
    description: state.getIn(['post', 'description']),
})

export default connect(mapStatesToProps, null)(Main)
