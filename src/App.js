import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import Dashboard from "./components/Dashboard";
import Login from "./pages/login";
import SignUp from "./pages/register";
import Verify from "./pages/verify/VerifiedEmail";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#36393f',
            light: '#e2e2e2',
            dark: '#333333',
            contrastText: '#fff'
        },
        secondary: {
            main: '#44ee93',
            light: '#61ffac',
            dark: '#00a24f',
            contrastText: '#fff'
        }
    }
});

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={SignUp}/>
                        <Route exact path="/verify/:code" component={Verify}/>
                        <Route path="/" component={Dashboard}/>
                    </Switch>
                </div>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
