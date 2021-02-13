import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import axios from "axios";
import {emailRegex} from "../../utils/regex";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Copyright from "../../components/Copyright";

export default function Login(props) {
    const classes = useStyles();

    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [showErrorSnackbar, setErrorSnackbar] = React.useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        let allDataIsValid = true;
        setPasswordError(false);
        setEmailError(false);

        if (!email.value || !emailRegex.test(email.value)) {
            setEmailError(true);
            allDataIsValid = false;
        }

        if (!password.value) {
            setPasswordError(true);
            allDataIsValid = false;
        }

        if (allDataIsValid) {
            const userData = {
                email: email.value,
                password: password.value,
            };
            axios
                .post('/api/login', userData)
                .then((response) => {
                    localStorage.setItem('AuthToken', `Bearer ${response.data.Token}`);
                    props.history.push('/todos');
                })
                .catch((error) => {
                    setErrorSnackbar(true);
                });
        }
    };

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Snackbar open={showErrorSnackbar} autoHideDuration={6000}
                              anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                        <Alert severity="error">
                            Your login details were incorrect.
                        </Alert>
                    </Snackbar>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            error={emailError}
                            helperText={emailError ? "Please enter a valid email." : ""}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={passwordError}
                            helperText={passwordError ? "Please enter a password." : ""}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright/>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>

    );
}
