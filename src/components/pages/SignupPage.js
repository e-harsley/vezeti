import React, { Component } from "react";
import { Link as RouterLink, Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import { connect } from "react-redux";
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
import Logo from "../Logo";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  banner: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  bannerChip: {
    marginRight: theme.spacing(2),
  },
  methodIcon: {
    height: 30,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80,
  },
  cardContent: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    minHeight: 400,
  },
  currentMethodIcon: {
    height: 40,
    "& > img": {
      width: "auto",
      maxHeight: "100%",
    },
  },
  googleButton: {
    backgroundColor: theme.palette.common.white,
  },
  providerIcon: {
    marginRight: theme.spacing(2),
  },
  divider: {
    flexGrow: 1,
  },
  dividerText: {
    margin: theme.spacing(2),
  },
  loginHeader: {
    color: "#263238",
    fontWeight: "500",
    lineHeight: "1.2",
    letterSpacing: "-0.24px",
  },
  cursor: {
    cursor: "pointer",
    color: "#546e7a",
    textDecoration: "none",
    marginRight: "20px",
  },
  btnColor: {
    backgroundColor: "#5850EC",
  },
}));

export class SignupPage extends Component {
  state = {
    orgId: "728934",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { orgId, firstName, lastName, mobile, email, password } = this.state;
    const newUser = { orgId, firstName, lastName, mobile, email, password };
    this.props.register(newUser);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { classes } = this.props;
    const { firstName, lastName, mobile, email, password } = this.state;
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div style={{ margin: "30px" }}>
        <div title="Login">
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
                      Register
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Register on the internal platform
                    </Typography>
                  </div>
                  <div>
                    <RouterLink to="/">
                      <Logo />
                    </RouterLink>
                  </div>
                </Box>
                <Box flexGrow={1} mt={3}>
                  <form onSubmit={this.onSubmit}>
                    <TextField
                      fullWidth
                      label="First Name"
                      margin="normal"
                      name="firstName"
                      onChange={this.onChange}
                      value={firstName}
                      type="text"
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Last Name"
                      margin="normal"
                      name="lastName"
                      onChange={this.onChange}
                      value={lastName}
                      type="text"
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Mobile Number"
                      margin="normal"
                      name="mobile"
                      onChange={this.onChange}
                      value={mobile}
                      type="number"
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Email Address"
                      margin="normal"
                      name="email"
                      onChange={this.onChange}
                      value={email}
                      type="email"
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Password"
                      margin="normal"
                      name="password"
                      onChange={this.onChange}
                      value={password}
                      type="password"
                      required
                      variant="outlined"
                    />
                    <Box mt={2}>
                      <Button
                        color="secondary"
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Register
                      </Button>
                    </Box>
                  </form>
                </Box>
                <Box my={3}>
                  <Divider />
                </Box>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <RouterLink
                    to="/login"
                    variant="body2"
                    color="textSecondary"
                    style={{ textDecoration: "none", color: "#0000008a" }}
                  >
                    Having an account
                  </RouterLink>
                  <RouterLink
                    to="/password-reset"
                    variant="body2"
                    color="textSecondary"
                    style={{ textDecoration: "none", color: "#0000008a" }}
                  >
                    Forget Password
                  </RouterLink>
                  <RouterLink
                    to="/pin-reset"
                    variant="body2"
                    color="textSecondary"
                    style={{ textDecoration: "none", color: "#0000008a" }}
                  >
                    Forget Pin
                  </RouterLink>
                </div>
              </CardContent>
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(SignupPage);
