import React, { Component } from "react";
import TopBar from "../Topbar/Topbar";
import NavBar from "../ui/NavBar";
import { connect } from "react-redux";
import { getUser, changeEmail } from "../../actions/auth";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
export class EmailChange extends Component {
  state = {
    orgId: "728934",
    currentEmail: "",
    newEmail: "",
    userId: "",
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.user.userId);
    const { orgId, currentEmail, newEmail, userId } = this.state;
    const newUser = { orgId, currentEmail, newEmail, userId };
    this.props.changeEmail(newUser);
  };

  render() {
    console.log("me" + this.props.user);
    const { newEmail, currentEmail } = this.state;
    return (
      <div>
        <TopBar />
        <NavBar />
        <div mx="auto">
          <div>
            <div>
              <div style={{ marginTop: "90px" }}>
                <Container maxWidth="sm">
                  <Card>
                    <CardContent>
                      <Box
                        alignItems="center"
                        display="flex"
                        justifyContent="space-between"
                        mb={3}
                      >
                        <div>
                          <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h2"
                            style={{ fontSize: "1.6rem" }}
                          >
                            Change Email
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Use the form to change your email
                          </Typography>
                        </div>
                      </Box>
                      <Box flexGrow={1} mt={3}>
                        <form onSubmit={this.onSubmit}>
                          <TextField
                            fullWidth
                            label="Old Email Address"
                            margin="normal"
                            name="currentEmail"
                            type="email"
                            onChange={this.onChange}
                            value={currentEmail}
                            variant="outlined"
                            required
                          />
                          <TextField
                            fullWidth
                            label="New Email Address"
                            margin="normal"
                            name="newEmail"
                            type="email"
                            onChange={this.onChange}
                            value={newEmail}
                            variant="outlined"
                            required
                          />
                          <Box mt={3}></Box>
                          <Box mt={2}>
                            <Button
                              color="secondary"
                              fullWidth
                              size="large"
                              type="submit"
                              variant="contained"
                            >
                              Change Email
                            </Button>
                          </Box>
                        </form>
                      </Box>
                      <Box my={3}>
                        <Divider />
                      </Box>
                    </CardContent>
                  </Card>
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

export default connect(mapStateToProps, { changeEmail, getUser })(EmailChange);
