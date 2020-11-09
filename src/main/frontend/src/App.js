import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import User from "./components/User";
import Header from "./components/common/Header";

const theme = createMuiTheme({
    shape: {
        borderRadius: '6px',
    },
    palette: {
        primary: {
            main: '#2196f3'
        },
        background: {
            default: '#f5f5fa',
        }
    }
});

export default function App() {

    let LayoutRouter = (
        <Fragment>
            <Header />
            <Switch>
                <Route path="/posts/:id" exact component={Post}/>
                <Route path="/users/:id" exact component={User}/>
                <Route path={["/", "/home", "/t/:topic"]} exact component={Home}/>
            </Switch>
        </Fragment>
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            < Login />
            <BrowserRouter>
                <Switch>
                    <Route path="/signup" exact component={SignUp}/>
                    <Route path="/" render={() => LayoutRouter} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}