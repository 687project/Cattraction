import Container from "@material-ui/core/Container";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import DeleteIcon from '@material-ui/icons/Delete';


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
    },
    imgGrid: {
        position: 'relative',
        display: 'block',
    },
    deleteBtn: {
        position: 'absolute',
        right: '50%',
    },
}));

function CreatePost(props) {
    const classes = useStyles();

    const [photos, setPhotos] = useState([])
    const [description, setDescription] = useState('')

    const handleSubmit = () => {
        const form = new FormData();
        form.append(photos);
        form.append(description);
        return axios.post(
            "/api/newpost",
            form,
            {
                headers: {'Content-Type': 'multipart/form-data'},
            }
        ).then(res => {
            console.log(res);
        })
    }

    const handleDeletePhoto = (index) => {
        const newPhotos = [...photos];
        newPhotos.splice(index, 1);
        setPhotos(newPhotos);
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
                            Upload Your cat photos
                        </Typography>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            value=""
                            onChange={e => {
                                console.log(e.target.files[0])
                                setPhotos([...photos, e.target.files[0]])
                                console.log(photos);
                            }}
                        />
                        <Grid container>
                            {
                                photos.map((photo, index) => (
                                    <Grid item xs={12} className={classes.imgGrid} key={index}>
                                        <img
                                            src={URL.createObjectURL(photo)}
                                            alt="preview"
                                            style={{width: "50%"}}
                                        />
                                        <IconButton
                                            className={classes.deleteBtn}
                                            variant="outlined"
                                            onClick={() => handleDeletePhoto(index)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Grid>
                                ))
                            }
                        </Grid>
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

export default connect(mapStatesToProps, null)(CreatePost)