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
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";


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
    formControl: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        minWidth: 240,
    },
}));

function CreatePost(props) {
    const classes = useStyles();

    const [photos, setPhotos] = useState([])
    const [description, setDescription] = useState('')
    const [success, setSuccess] = useState(false);
    const [postCategory, setPostCategory] = useState("general");
    const [catName, setCatName] = useState("");
    const [catAge, setCatAge] = useState("");
    const [catGender, setCatGender] = useState("");
    const [catBreed, setCatBreed] = useState("");
    const [catLocation, setCatLocation] = useState("");
    const [postTitle, setPostTitle] = useState("");

    const handleSubmit = () => {
        const form = new FormData();
        for (let i in photos) {
            form.append('photos', photos[i]);
        }
        form.append('description', description);
        form.append('title', postTitle);
        form.append('creater', localStorage.getItem('email'));
        form.append('time', new Date().toLocaleString());

        if (postCategory === "general") {
            return axios.post(
                localStorage.getItem("ip") + "/api/v1/user-profile/newpost",
                form,
                {
                    headers: {'Content-Type': 'multipart/form-data'},
                }
            ).then(res => {
                console.log(res);
                alert("Submit successfully!")
                setSuccess(true);
            })
        } else if (postCategory === "catDating") {
            form.append('catName', catName);
            form.append('catBreed', catBreed);
            form.append('catLocation', catLocation);
            form.append('catAge', catAge);
            return axios.post(
                localStorage.getItem("ip") + "/api/v1/user-profile/newpost",
                form,
                {
                    headers: {'Content-Type': 'multipart/form-data'},
                }
            ).then(res => {
                console.log(res);
                alert("Submit successfully!")
                setSuccess(true);
            })
        }
    }

    const handleDeletePhoto = (index) => {
        const newPhotos = [...photos];
        newPhotos.splice(index, 1);
        setPhotos(newPhotos);
    }

    if (!props.loginStatus) {
        return <Redirect to="/login"/>
    }

    if (success) {
        return <Redirect to="/home"/>
    }

    return (
        <React.Fragment>
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h4" gutterBottom>
                    Create a New Post
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="select-category-label">Post Category</InputLabel>
                            <Select
                                labelId="select-category-label"
                                id="demo-simple-select-outlined"
                                value={postCategory}
                                onChange={e => setPostCategory(e.target.value)}
                                label="Post Category"
                            >
                                <MenuItem value={"general"}>General</MenuItem>
                                <MenuItem value={"catDating"}>Cat Dating</MenuItem>
                            </Select>
                        </FormControl>
                        {
                            postCategory === "catDating" ? <div>
                                <form style={{width: '50%', margin: '1rem 0'}} noValidate>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                value={catName}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="catName"
                                                label="Cat Name"
                                                type="text"
                                                id="catName"
                                                onChange={e => setCatName(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Gender</FormLabel>
                                                <RadioGroup row name="gender1" value={catGender}
                                                            onChange={e => setCatName(e.target.value)}>
                                                    <FormControlLabel value="1" control={<Radio/>} label="♂"/>
                                                    <FormControlLabel value="0" control={<Radio/>} label="♀"/>
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                value={catAge}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="catAge"
                                                label="Cat Age"
                                                name="catAge"
                                                type="text"
                                                onChange={e => setCatAge(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                value={catBreed}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="catBreed"
                                                label="Cat Breed"
                                                type="text"
                                                id="catBreed"
                                                autoComplete="current-password"
                                                onChange={e => setCatBreed(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                value={catLocation}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="catLocation"
                                                label="Cat Location"
                                                type="text"
                                                id="catLocation"
                                                onChange={e => setCatLocation(e.target.value)}
                                            />
                                        </Grid>
                                    </Grid>
                                </form>
                            </div> : <React.Fragment/>
                        }
                        <Typography variant="h6" gutterBottom>
                            Upload your cat photos:
                        </Typography>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            value=""
                            onChange={e => {
                                setPhotos([...photos, e.target.files[0]])
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
                                            <DeleteIcon/>
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
                        <TextField
                            style={{minWidth: "300px"}}
                            value={postTitle}
                            variant="outlined"
                            required
                            name="postTitle"
                            label="Post Title"
                            type="text"
                            id="postTitle"
                            onChange={e => setPostTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Describe your post here:
                        </Typography>
                        <TextField
                            id="description"
                            name="description"
                            label="Description"
                            variant="outlined"
                            placeholder="Describe your post here..."
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
