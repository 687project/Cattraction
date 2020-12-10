import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {connect} from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import {CardContent} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    sidebar: {
        boxShadow: '0 2px 8px 0 rgba(0,0,0,.05)',
        backgroundColor: '#fff',
    },
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

function Sidebar(props) {
    const classes = useStyles();

    const { user } = props;

    return (
        <Grid item xs={12} md={3}>
            <div className={classes.sidebar}>
                <Paper square={true} elevation={0}>
                    <Card elevation={0}>
                        <div className={classes.cardHeader}>
                            <Avatar src={user.avatarUrl} alt="avatar" className={classes.avatar}>A</Avatar>
                        </div>
                        <CardContent className={classes.content}>

                            <div className={classes.username}>
                                {localStorage.getItem('username')}
                            </div>
                            <div className={classes.follow}>
                                <span className={classes.following}>following {user.following}</span>
                                <span className={classes.followed}>followed {user.followed}</span>
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
                </Paper>
            </div>
        </Grid>
    )
}

const mapStatesToProps = (state) => ({
    user: state.getIn(['post', 'user']),
})

export default connect(mapStatesToProps, null)(Sidebar)
