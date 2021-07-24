import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from "axios";
import useStyles from './styles';
import {emailRegex} from "../../utils/regex";
import Copyright from "../../components/Copyright";

export default function SignUp(props) {
    const classes = useStyles();

    const [emailError, setEmailError] = React.useState(false);
    const [firstNameError, setFirstNameError] = React.useState(false);
    const [lastNameError, setLastNameError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const {email, password, firstName, lastName} = event.target.elements;
        let allFieldsAreValid = true;

        // Reset all fields
        setEmailError(false);
        setLastNameError(false);
        setFirstNameError(false);
        setPasswordError(false);

        // Validate all fields
        if (!email.value || !emailRegex.test(email.value)){
            setEmailError(true);
            allFieldsAreValid = false;
        }

         if(!password.value || password.value.length < 6){
             setPasswordError(true);
             allFieldsAreValid = false;
         }

         if(!firstName.value){
             setFirstNameError(true);
             allFieldsAreValid = false;
         }

         if(!lastName.value){
             setLastNameError(true);
             allFieldsAreValid = false;
         }


         if(allFieldsAreValid){
             const userData = {
                 first_name: firstName.value,
                 last_name: lastName.value,
                 email: email.value,
                 password: password.value,
             };
             axios
                 .post('/api/register', userData)
                 .then((response) => {
                     props.history.push('/login');
                 })
                 .catch((error) => {
                     console.log(error);
                 });
         }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                error={firstNameError}
                                helperText={firstNameError ? "Please enter your first name." : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                error={lastNameError}
                                helperText={lastNameError ? "Please enter your last name." : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                error={emailError}
                                helperText={emailError ? "Please enter a valid email." : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                error={passwordError}
                                helperText={passwordError ? "Please enter a password." : "Password must be at least 6 characters."}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}