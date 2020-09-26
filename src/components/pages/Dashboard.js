import React, { Component } from "react";
import TopBar from "../Topbar/Topbar";
import NavBar from "../ui/NavBar";
import { connect } from "react-redux";
import { getUser } from "../../actions/auth";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  TextField,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Details from "./Details";
import EmailChange from "./EmailChange";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));
export class Dashboard extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <TopBar />
        {user ? <NavBar /> : ""}

        <div mx="auto">
          <div>
            <div>
              <div style={{ marginTop: "90px" }}>
                <Container style={{ width: "60%" }}>
                  <Details />
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, { getUser })(Dashboard);
