import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Login";
import User from "./components/User";
import Header from "./components/common/Header";
import CreatePost from "./components/CreatePost";

const theme = createMuiTheme({
    shape: {
        borderRadius: '6px',
    },
    palette: {
        primary: {
            main: '#f73378',
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
                <Route path="/newpost" exact component={CreatePost}/>
                <Route path="/users/:id" exact component={User}/>
                <Route path={["/", "/home", "/t/:topic"]} exact component={Home}/>
            </Switch>
        </Fragment>
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={SignUp}/>
                    <Route path="/" render={() => LayoutRouter} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}