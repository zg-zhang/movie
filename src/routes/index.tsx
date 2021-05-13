import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import routesConstants from "../constants/routes";
import Header from "../components/header";
import Main from "../pages/main";
import Explore from "../pages/explore";
import MainLayout from "../layout/main";
import Detail from "../pages/detail";
import Login from "../pages/login";
import Stars from "../pages/stars";

function Routes() {
    return (
        <Router>
            <Header />

            <MainLayout>
                <Switch>
                    <Route path={routesConstants.main} exact><Main /></Route>
                    <Route path={routesConstants.explore} exact><Explore /></Route>
                    <Route path={routesConstants.stars} exact><Stars /></Route>

                    <Route path={routesConstants.login} exact><Login /></Route>
                    <Route path={routesConstants.detail} exact><Detail /></Route>
                </Switch>
            </MainLayout>
        </Router>
    )
}

export default React.memo(Routes)