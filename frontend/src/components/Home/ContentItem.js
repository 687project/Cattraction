import {Link} from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import React from "react";
import {darken, makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainCardMediaImg: {
        width: "100%",
    },
    link: {
        display: 'block',
        '&:hover + div': {
            opacity: 1,
        },
    },
    itemContainer: {
        position: 'relative',
        marginBottom: '1em',
    },
    btnContainer: {
        position: 'absolute',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        opacity: 0,
        transition: 'opacity .2s ease-in-out,visibility .2s ease-in-out',
        '&:hover': {
            opacity: 1,
        },
        backgroundImage: 'linear-gradient(180deg,rgba(0,0,0,.34) 0,rgba(0,0,0,.338) 3.5%,rgba(0,0,0,.324) 7%,rgba(0,0,0,.306) 10.35%,rgba(0,0,0,.285) 13.85%,rgba(0,0,0,.262) 17.35%,rgba(0,0,0,.237) 20.85%,rgba(0,0,0,.213) 24.35%,rgba(0,0,0,.188) 27.85%,rgba(0,0,0,.165) 31.35%,rgba(0,0,0,.144) 34.85%,rgba(0,0,0,.126) 38.35%,rgba(0,0,0,.112) 41.85%,rgba(0,0,0,.103) 45.35%,rgba(0,0,0,.1) 48.85%,rgba(0,0,0,.103) 52.35%,rgba(0,0,0,.112) 55.85%,rgba(0,0,0,.126) 59.35%,rgba(0,0,0,.144) 62.85%,rgba(0,0,0,.165) 66.35%,rgba(0,0,0,.188) 69.85%,rgba(0,0,0,.213) 73.35%,rgba(0,0,0,.237) 76.85%,rgba(0,0,0,.262) 80.35%,rgba(0,0,0,.285) 83.85%,rgba(0,0,0,.306) 87.35%,rgba(0,0,0,.324) 90.85%,rgba(0,0,0,.338) 94.35%,rgba(0,0,0,.347) 97.85%,rgba(0,0,0,.35))',
    },
    btnSecondaryContainer: {
        position: 'absolute',
        height: 'auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        transition: 'opacity .2s ease-in-out,visibility .2s ease-in-out',
    },
    topBtnBar: {
        height: '32px',
        display: 'grid',
    },
    bottomBtnBar: {
        marginTop: 'auto',
        marginBottom: '16px',
        height: '32px',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,min-content) auto',
    },
    rightBtn: {
        minWidth: '32px',
        padding: '8px',
        pointerEvents: 'auto',
        justifySelf: 'end',
        backgroundColor: 'hsla(0,0%,100%,.9)',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#111',
        },
    },
    leftBtn: {
        height: '43px',
        padding: '8px',
        pointerEvents: 'auto',
        backgroundColor: 'inherit',
        '&:hover': {
            backgroundColor: darken(theme.palette.common.white, 0.7),
        }
    },
    username: {
        marginLeft: '10px',
        color: 'white',
    }
}));

export default function ContentItem(props) {
    const classes = useStyles();
    const {postId, coverUrl, user} = props;
    const {username, avatarUrl} = user;

    return (
        <div className={classes.itemContainer}>
            <Link to={`/posts/general/${postId}`} className={classes.link}>
                <CardMedia
                    image={coverUrl}
                    component="img"
                    classes={{
                        img: classes.mainCardMediaImg,
                    }}
                />
            </Link>
            <div className={classes.btnContainer}>
                <div className={classes.btnSecondaryContainer}>
                    <div className={classes.topBtnBar}>
                        <Button className={classes.rightBtn}>
                            <FavoriteBorderRoundedIcon/>
                        </Button>
                    </div>
                    <div className={classes.bottomBtnBar}>
                        <Button className={classes.leftBtn}>
                            <Avatar alt={username} src={avatarUrl}/>
                            <span className={classes.username}>{username}</span>
                        </Button>
                        <Button className={classes.rightBtn}>
                            <GetAppRoundedIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
