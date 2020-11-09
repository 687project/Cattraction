import Banner from "./Banner";
import Navbar from "./Navbar";
import Content from "./Content";
import Container from "@material-ui/core/Container";
import React, {Fragment, useEffect} from "react";
import * as actions from "../../actions/home";
import {connect} from "react-redux";
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import Header from "../common/Header";

const sections = [
    {
        title: "Recommendation",
        path: "recommendation",
    },
    {
        title: "Daily Feed",
        path: "daily-feed",
    },
    {
        title: "Cattery",
        path: "cattery",
    },
    {
        title: "Cat Food",
        path: "cat-food",
    },
    {
        title: "Cat Product",
        path: "cat-product",
    },
    {
        title: "Cat Dating",
        path: "cat-dating",
    },
]

function Home(props) {
    let match = useRouteMatch();

    useEffect(() => {
        props.changeHomeContentData(match.params.topic);
    });

    return (
        <Fragment>
            <Header/>
            <Container maxWidth="lg">
                <Banner/>
                <Navbar sections={sections}/>
                <Switch>
                    {
                        sections.map((section) => (
                            <Route path={`/t/${section.path}`} key={`home-${section.path}`}>
                                <Content/>
                            </Route>
                        ))
                    }
                </Switch>
            </Container>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    changeHomeContentData(path) {
        const action = actions.getHomeContent(path);
        dispatch(action);
    }
})

export default connect(null, mapDispatchToProps)(Home)