import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import routesConstants from "../constants/routes";
import Header from "../components/header";
import Main from "../pages/main";
import Rank from "../pages/rank";
import MainLayout from "../layout/main";
import routes from "../constants/routes";

function Routes() {
    return (
        <Router>
            <Header />

            <MainLayout>
                <Switch>
                    <Route path={routesConstants.main} exact><Main /></Route>
                    <Route path={routesConstants.rank} exact><Rank /></Route>
                    <Route path={routesConstants.library} exact><Main /></Route>
                </Switch>
            </MainLayout>
        </Router>
    )
}

export default React.memo(Routes)