import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Content from "./Content";
import CatDating from "./CatDating";
import ComingSoon from "./ComingSoon";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index ?
                <Box p={3} style={{padding: 0}}>
                    {children}
                </Box> : <Box p={3}/>
            }
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    contentWrapper: {
        margin: '1em 0',
    },
    tabs: {
        '&$selected': {
            backgroundColor: '#004C9B',
            color: 'white',
            fontWeight: theme.typography.fontWeightMedium,
        },
    },
    tab: {
        textTransform: 'none',
        minWidth: 120,
    }
}));

export default function TopicTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" variant="outlined" color="white">
                <Tabs
                    value={value}
                    onChange={handleChange} centered
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Recommendation" {...a11yProps(0)} className={classes.tab}/>
                    <Tab label="Daily Feed" {...a11yProps(1)} className={classes.tab}/>
                    <Tab label="Cat Product" {...a11yProps(2)} className={classes.tab}/>
                    <Tab label="Cat Dating" {...a11yProps(3)} className={classes.tab}/>
                </Tabs>
            </AppBar>
            <div className={classes.contentWrapper}>
                <TabPanel value={value} index={0}>
                    <Content topic="recommendation"/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ComingSoon />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ComingSoon />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <CatDating />
                </TabPanel>
            </div>
        </div>
    );
}
