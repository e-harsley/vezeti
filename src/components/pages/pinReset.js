import React, { Component } from "react";
import { pinReset } from "../../actions/auth";
import { Link as RouterLink } from "react-router-dom";
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

export class PinReset extends Component {
  state = {
    orgId: "728934",
    mobile: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { orgId, mobile } = this.state;
    const newUser = { orgId, mobile };
    this.props.pinReset(newUser);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { classes } = this.props;
    const { mobile } = this.state;
    return (
      <div>
        <div style={{ margin: "70px" }}>
          <div className={classes.root} title="Login">
            <Container className={classes.cardContainer} maxWidth="sm">
              <Card>
                <CardContent className={classes.cardContent}>
                  <Box
                    alignItems="center"
                    display="flex"
                    justifyContent="space-between"
                    mb={3}
                  >
                    <div>
                      <Typography
                        color="textPrimary"
                        className={classes.loginHeader}
                        gutterBottom
                        variant="h2"
                        style={{ fontSize: "1.6rem" }}
                      >
                        Reset Pin
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Use the form to reset pin
                      </Typography>
                    </div>
                    <div className={classes.currentMethodIcon}>
                      <RouterLink to="/">
                        <Logo />
                      </RouterLink>
                    </div>
                  </Box>
                  <Box flexGrow={1} mt={3}>
                    <form onSubmit={this.onSubmit}>
                      <TextField
                        fullWidth
                        label="Mobile Number"
                        margin="normal"
                        name="mobile"
                        onChange={this.onChange}
                        value={mobile}
                        required
                        type="number"
                        variant="outlined"
                      />
                      <Box mt={2}>
                        <Button
                          className={classes.btnColor}
                          color="secondary"
                          fullWidth
                          size="large"
                          type="submit"
                          variant="contained"
                        >
                          Reset Pin
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
                      className={classes.cursor}
                      to="/login"
                      variant="body2"
                      color="textSecondary"
                      style={{ textDecoration: "none", color: "#0000008a" }}
                    >
                      Having an account
                    </RouterLink>
                    <RouterLink
                      className={classes.cursor}
                      to="/login"
                      variant="body2"
                      color="textSecondary"
                      style={{ textDecoration: "none", color: "#0000008a" }}
                    >
                      Forget Password
                    </RouterLink>
                    <RouterLink
                      className={classes.cursor}
                      to="/login"
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
      </div>
    );
  }
}

export default connect(null, { pinReset })(withStyles(useStyles)(PinReset));
