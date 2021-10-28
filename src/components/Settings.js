import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import Popup from './Popup.js';
import Foreground from './Foreground.js';

function Settings() {
    return (
        <Router>
            <div style={styles.container}>
                <div style={styles.nav_bar}>
                    <h1>Chrome Ext - Settings</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/settings"> Settings</Link>
                            </li>
                            <li>
                                <Link to="/popup">Popup</Link>
                            </li>
                            <li>
                                <Link to="/foreground">Foreground</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route exact path="/popup">
                        <Popup />
                    </Route>
                    <Route exact path="/foreground">
                        <Foreground />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/entry-settings.html" />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default Settings;