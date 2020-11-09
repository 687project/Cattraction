import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import {NavLink as RouterLink} from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: 'center',
        margin: '0 auto',
        boxShadow: '0 1px 3px 0 rgba(0,0,0,.05)',
        background: '#fff',
        overflowX: 'auto',
        borderRadius: theme.shape.borderRadius,
    },
    link: {
        padding: theme.spacing(0, 2),
        flexShrink: 0,
        display: 'block',
        '&:hover': {
            color: '#fa4b8b',
        },
        '&.active': {
            color: '#fa4b8b',
            fontWeight: 700,
        },
    },
}));

export default function Navbar(props) {
    const classes = useStyles();
    const {sections} = props;

    return (
        <Toolbar component="nav" variant="dense" className={classes.toolbar}>
            {sections.map((section) => (
                <Link
                    key={section.title}
                    underline="none"
                    color="inherit"
                    noWrap
                    variant="body2"
                    to={`/t/${section.path}`}
                    className={classes.link}
                    component={RouterLink}
                >
                    {section.title}
                </Link>
            ))}
        </Toolbar>
    );
}