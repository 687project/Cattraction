import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Divider, Typography} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        boxShadow: '0 2px 8px 0 rgba(0,0,0,.05)',
        backgroundColor: '#fff',
        padding: '30px 0 10px',
    },
    post: {
        padding: '0 110px 40px',
    },
    header: {
        margin: '1em 0',
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
        marginTop: '2em',
        marginBottom: '1em'
    },
    picture: {
        margin: '20px 0',
    },
}));


export default function Main(props) {
    const classes = useStyles();
    const {post} = props;

    return (
        <Grid item xs={12} md={9}>
            <div className={classes.mainGrid}>
                <Paper square={true} elevation={0} className={classes.post}>
                    <Typography variant="h2">
                        {post.title}
                    </Typography>
                    <Divider/>
                    <div className={classes.header}>
                        <div className={classes.headerMetaData}>
                            <span>{post.postTime}</span>
                            <span>{post.imgUrls.length} pictures</span>
                        </div>
                    </div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Cat Name"
                                value={post.catName}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Cat Breed"
                                value={post.catBreed}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Cat Gender"
                                value={post.catGender == true ? "♂" : "♀"}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Cat Age"
                                value={post.catAge}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Cat Location"
                                value={post.catLocation}
                                inputProps={{ readOnly: true }}
                            />
                        </Grid>
                    </Grid>

                    <Typography className={classes.description}>
                        {post.description}
                    </Typography>
                    {
                        post.imgUrls.map((img) => (
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
