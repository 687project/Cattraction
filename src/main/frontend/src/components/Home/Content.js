import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ContentItem from "./ContentItem";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        marginTop: '1em',
        columnCount: 3,
        columnGap: "20px",
    },
}));

function Content(props) {
    const classes = useStyles();
    return (
        <div className={classes.contentWrapper}>
            {
                props.posts.map((post) => (
                    <ContentItem key={post.postId} {...post} />
                ))
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    posts: state.getIn(['home', 'postList'])
})

export default connect(mapStateToProps, null)(Content);