import Container from "@material-ui/core/Container";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '20px',
        boxShadow: '0 2px 8px 0 rgba(0,0,0,.05)',
        backgroundColor: '#fff',
        padding: '20px',
    },
    input: {
        display: 'none',
    },
    submitDiv: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

function CreatePost(props) {
    const classes = useStyles();

    const [photos, setPhotos] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = () => {
        axios({
            method: 'post',
            url: '/api/posts/newpost',
            data: {
                photos,
                description
            },
        }).then(res => {
            alert(res.data);
        })
    }

    if (!props.loginStatus) {
        return <Redirect to="/login"/>
    }

    return (
        <React.Fragment>
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h4" gutterBottom>
                    Create a New Post
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Upload Your photo of cat
                        </Typography>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={e => setPhotos(e.target.value)}
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                Upload Image
                            </Button>
                        </label>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Write down what you want to say about that
                        </Typography>
                        <TextField
                            id="description"
                            name="description"
                            label="description"
                            variant="outlined"
                            placeholder="Your words..."
                            rows={4}
                            fullWidth
                            multiline
                            onChange={e => setDescription(e.target.value)}
                        />
                    </Grid>
                </Grid>
            </Container>
            <div className={classes.submitDiv}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
            </div>
        </React.Fragment>
    )
}

const mapStatesToProps = (state) => ({
    loginStatus: state.getIn(['auth', 'loginStatus']),
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStatesToProps, mapDispatchToProps)(CreatePost)