import React, { Component } from "react";
import TopBar from "../Topbar/Topbar";
import NavBar from "../ui/NavBar";
import { connect } from "react-redux";
import { getUser } from "../../actions/auth";
import { Container } from "@material-ui/core";
import Details from "./Details";
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
