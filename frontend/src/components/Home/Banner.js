import React from 'react';
import Carousel from "react-material-ui-carousel";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardMediaRoot: {
        height: '400px',
        borderRadius: theme.shape.borderRadius,
    },
    cardMediaImg: {
        backgroundSize: 'contain',
    },
    carousel: {
        margin: '1em auto'
    },
    carouselIndicator: {
        marginTop: '-1.5em',
    }
}));

export default function Banner(props) {
    const classes = useStyles();

    let items = [
        {
            img: "https://cattraction-image-upload.s3.us-east-2.amazonaws.com/banner1.jpg"
        },
        {
            img: "https://cattraction-image-upload.s3.us-east-2.amazonaws.com/banner2.jpg"
        },
        {
            img: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
        }
    ]

    return (
        <Carousel
            interval={3000}
            className={classes.carousel}
            indicatorContainerProps={{className: classes.carouselIndicator}}
            autoPlay={true}
        >
            {
                items.map((item, i) => <Item key={i} item={item}/>)
            }
        </Carousel>
    )
}

function Item(props) {
    const classes = useStyles();

    return (
        <Link href={props.item.img}>
            <CardMedia
                media='img'
                image={props.item.img}
                classes={{
                    root: classes.cardMediaRoot,
                    img: classes.cardMediaImg,
                }}
            >
            </CardMedia>
        </Link>
    )
}
