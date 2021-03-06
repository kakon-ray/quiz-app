import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from "react";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRout";
import PublicRout from "./PublicRout";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRout exact path="/singup" component={Signup} />
            <PublicRout exact path="/login" component={Login} />
            <PrivateRoute exact path="/quiz:id" component={Quiz} />
            <PrivateRoute exact path="/result" component={Result} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
