import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import { main, rank, library } from "../constants/routes";
import Header from "../components/header";
import Main from "../pages/main";
import Rank from "../pages/rank";

function Routes() {
    return (
        <Router>
            <Header />
            <div style={{ height: '64px' }} />

            <Switch>
                <Route path={main} exact><Main /></Route>
                <Route path={rank} exact><Rank /></Route>
                <Route path={library} exact><Main /></Route>
            </Switch>
        </Router>
    )
}

export default React.memo(Routes)