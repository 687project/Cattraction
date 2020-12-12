import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import axios from "axios";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        margin: '1em 0',
        flexGrow: 1,
    },
    cardMediaImg: {
        width: '180px',
        height: '100%',
        float: 'left',
        marginRight: '1rem',
    },
    link: {
        textDecoration: 'none',
    },
    root: {
        height: '180px',
    }

}));

export default function CatDating() {
    const classes = useStyles();
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        axios({
            method: 'post',
            url: localStorage.getItem("ip") + '/api/v1/posts/catdating',
            params:{ }
        }).then(res => {
            setPostList(res.data);
        })
    }, []);

    return (
        <div className={classes.contentWrapper}>
            <Grid container
                  spacing={3}
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
            >
                {postList.map((post) => (
                    <Grid item xs={12} sm={12}>
                        <Link to={`/posts/cat-dating/${post.postId}`} className={classes.link}>
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.cardMediaImg}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    image={post.coverUrl}
                                    title="Contemplative Reptile"
                                    classes={classes.cardMediaImg}
                                />
                                <CardContent>
                                    <Typography variant="h4" component="h2">
                                        {post.catName}, {post.catBreed}, {post.catGender == true ? 'boy': 'girl'}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" component="subtitle2">
                                        {post.catLocation}
                                    </Typography>
                                    <Typography variant="body1" component="p">
                                        {post.description.length > 200 ? post.description.substring(0,230) + " ......" : post.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
