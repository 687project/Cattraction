import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {CardContent} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';

const useStyles = makeStyles((theme) => ({
    cardHeader: {
        display: 'flex',
        paddingTop: theme.spacing(2),
        paddingBottom: -theme.spacing(1),
        justifyContent: 'center',
    },
    avatar: {
        flex: '0 0 auto',
        width: '80px',
        height: '80px',
    },
    content: {
        paddingTop: '8px',
        textAlign: 'center',
    },
    follow: {
        '& > span': {
            color: '#a1a1a6',
            boxSizing: 'border-box',
            width: '50%',
            marginRight: 0,
            display: 'inline-block',
        }
    },
    following: {
        borderRight: '1px solid #e9e9f0',
        paddingRight: '10px',
        textAlign: 'right',
    },
    followed: {
        textAlign: 'left',
        paddingLeft: '10px',
    },
    signature: {
        wordBreak: 'break-word',
        padding: '0 25px',
        margin: '10px 0',
        color: '#a1a1a6',
    },
    username: {
        paddingBottom: '10px',
    },
    buttons: {
        margin: '0 4px',
    },
}));

export default function UserCard(props) {
    const classes = useStyles();

    const userInfo = {
        "user_id": 123,
        "avatar_url": "https://p3-bcy.byteimg.com/img/banciyuan/Public/Upload/avatar/1216315/fb2f3c1cdd6d40f0ae059e761f83ecde/fat.jpg~tplv-banciyuan-abig.image",
        "username": "Jack",
        "following": 123,
        "followed": 34513,
        "signature": "I'm a user."
    }

    return (
        <Card elevation={0}>
            <div className={classes.cardHeader}>
                <Avatar src={userInfo.avatar_url} alt="avatar" className={classes.avatar}>A</Avatar>
            </div>
            <CardContent className={classes.content}>
                <div className={classes.username}>
                    {userInfo.username}
                </div>
                <div className={classes.follow}>
                    <span className={classes.following}>following {userInfo.following}</span>
                    <span className={classes.followed}>followed {userInfo.followed}</span>
                </div>
                <div className={classes.signature}>
                    I am a good man.
                </div>
                <div>
                    <Button
                        size="small"
                        variant="outlined"
                        className={classes.buttons}
                        color="primary"
                        startIcon={<AddRoundedIcon/>}
                    >
                        Follow
                    </Button>
                    <Button
                        size="small"
                        variant="outlined"
                        className={classes.buttons}
                        color="primary"
                        startIcon={<MailOutlineRoundedIcon/>}
                    >
                        Message
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}