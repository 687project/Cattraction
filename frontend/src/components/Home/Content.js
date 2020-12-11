import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ContentItem from "./ContentItem";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        margin: '1em 0',
        columnCount: 3,
        columnGap: "20px",
    },
}));

export default function Content(props) {
    const classes = useStyles();
    const [postList, setPostList] = useState([]);
    const {topic} = props;

    useEffect(() => {
        axios({
          method: 'post',
          url:localStorage.getItem("ip")+'/api/v1/posts/recommendation',
          params:{ }
        }).then(res => {
            setPostList(res.data);
        })
    }, []);

    return (
        <div className={classes.contentWrapper}>
            {postList.map((post) => (
                <ContentItem key={post.postId} {...post} />
            ))}
        </div>
    );
}
