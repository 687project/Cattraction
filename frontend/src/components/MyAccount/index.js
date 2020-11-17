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
        axios.get(`/api/posts/${id}.json`)
            .then((res) => {
                const result = res.data;
                dispatch(actions.changHomeContentData(result));
            });
    }
})

export default connect(mapStatesToProps, mapDispatchToProps)(Post)
