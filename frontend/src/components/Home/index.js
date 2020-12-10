import Banner from "./Banner";
import Container from "@material-ui/core/Container";
import React from "react";
import TopicTabs from "./TopicTabs";

export default function Home(props) {

    return (
        <Container maxWidth="lg">
            <Banner/>
            <TopicTabs />
        </Container>
    )
}
