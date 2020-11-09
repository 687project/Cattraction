import Banner from "./Banner";
import Navbar from "./Navbar";
import Content from "./Content";
import Container from "@material-ui/core/Container";
import React, {useEffect} from "react";
import * as actions from "../../actions/home";
import {connect} from "react-redux";
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

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
    )
}

const mapDispatchToProps = (dispatch) => ({
    changeHomeContentData(path) {
        const action = actions.getHomeContent(path);
        dispatch(action);
    }
})

export default connect(null, mapDispatchToProps)(Home)