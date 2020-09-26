import React, { Component } from "react";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
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
import { Link as RouterLink, Redirect } from "react-router-dom";

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

export class Login extends Component {
  state = {
    orgId: "728934",
    email: "",
    password: "",
    typeEmailOrPhone: "email",
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { orgId, typeEmailOrPhone, email, password } = this.state;
    const newUser = { orgId, typeEmailOrPhone, email, password };
    this.props.login(newUser);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    // const { classes } = this.props;
    const { email, password } = this.state;

    return (
      <div>
        <div style={{ margin: "70px" }}>
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
                      Login
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Login on the internal platform
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
                      label="Email Address"
                      margin="normal"
                      name="email"
                      type="email"
                      onChange={this.onChange}
                      value={email}
                      variant="outlined"
                      required
                    />
                    <TextField
                      fullWidth
                      label="Password"
                      margin="normal"
                      name="password"
                      type="password"
                      onChange={this.onChange}
                      value={password}
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
                        Log In
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
                    // className={classes.cursor}
                    to="/signup"
                    variant="body2"
                    color="textSecondary"
                    style={{ textDecoration: "none", color: "#0000008a" }}
                  >
                    Create an account
                  </RouterLink>
                  <RouterLink
                    // className={classes.cursor}
                    to="/password-reset"
                    variant="body2"
                    color="textSecondary"
                    style={{ textDecoration: "none", color: "#0000008a" }}
                  >
                    Forget Password
                  </RouterLink>
                  <RouterLink
                    // className={classes.cursor}
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

// const styledComponent = withStyles(useStyles)(Login);s

export default connect(mapStateToProps, { login })(Login);
