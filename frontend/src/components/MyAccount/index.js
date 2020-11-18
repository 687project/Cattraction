import Container from "@material-ui/core/Container";
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Main from "./Main";
import Sidebar from "./Sidebar";
import {useParams} from "react-router-dom";
import * as actions from "../../actions/post";
import {connect} from "react-redux";
import axios from "axios";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: 0,
    },
}));

function Post(props) {
    const classes = useStyles();
    let {id} = useParams();

    useEffect(() => {
        props.getPost(id);
    }, []);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={5} className={classes.mainGrid}>
                <Main/>
                <Sidebar/>
            </Grid>
        </Container>
    )
}

const mapStatesToProps = (state) => ({
    isLoading: state.getIn(['post', 'isLoading']),
})

const mapDispatchToProps = (dispatch) => ({
    getPost(id) {
        dispatch(actions.clearContentData());
        /*axios.get(`/api/posts/${id}.json`)
            .then((res) => {
                const result = res.data;
                dispatch(actions.changHomeContentData(result));
            });*/
            axios({
                method: 'post',
                url:localStorage.getItem("ip")+'/api/v1/user-profile/myaccount',
                params:{  email: localStorage.getItem('email')}
            }).then(res => {
              const result={
                "post_id": res.data[0]["postId"],
                "post_time": "2020-10-17 09:58:14",
                "tags": [],
                "description": res.data[0]["postDesc"],
                "img_urls": res.data[0]["postUrl"],
                "user": {
                  "id": 2,
                  "nickname": "jack",
                  "avatar_url": "",
                  "following": 10,
                  "followed": 30,
                  "signature": "I love dogs."
                }
              }
              dispatch(actions.changHomeContentData(result));
              //alert(res.data["postId"])
            })
    }
})

export default connect(mapStatesToProps, mapDispatchToProps)(Post)
