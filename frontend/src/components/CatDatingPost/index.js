import Container from "@material-ui/core/Container";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Main from "./Main";
import Sidebar from "../common/Sidebar";
import {useParams} from "react-router-dom";
import axios from "axios";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: 0,
    },
}));

export default function CatDatingPost(props) {
    const classes = useStyles();
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [post, setPost] = useState({});

    let {id} = useParams();

    useEffect(() => {
        axios({
            // method: 'post',
            // url: localStorage.getItem("ip") + '/api/v1/posts/getCatDatingPost',
            // params: {postId: id}
            method: 'get',
            url: `/api/posts/${id}.json`,
        }).then(res => {
            const post = res.data;
            setPost(post);
            setLoadingStatus(false)
        })
    }, []);

    if (!loadingStatus) {
        return (
            <Container maxWidth="lg">
                <Grid container spacing={5} className={classes.mainGrid}>
                    <Main post={post} />
                    <Sidebar user={post.user}/>
                </Grid>
            </Container>
        )
    } else {
        return (
            <LinearProgress/>
        )
    }
}