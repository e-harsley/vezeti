import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUser } from "../../actions/auth";
import {
  Box,
  Container,
  Divider,
  TextField,
  makeStyles,
} from "@material-ui/core";
import Logo from "../Logo";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink } from "react-router-dom";

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
export class Details extends Component {
  render() {
    const { user } = this.props;
    if (user) {
      return (
        <div>
          <div style={{ marginTop: "90px" }}>
            <h1 style={{ color: "#546e7a" }}>
              Welcome {user.userFirstName} {user.userLastName}
            </h1>
            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Paper
                    style={{
                      marginTop: "20px",
                      marginRight: "20px",
                      padding: "10px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "#546e7a",
                      }}
                    >
                      User Account Balance
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    >
                      {user.currency3Letters} {user.userAccountBalance}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    style={{
                      marginTop: "20px",
                      marginRight: "20px",
                      padding: "10px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "#546e7a",
                      }}
                    >
                      Bill Group Type
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    >
                      {user.userBillingGroupType}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    style={{
                      marginTop: "20px",
                      marginRight: "20px",
                      padding: "10px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "#546e7a",
                      }}
                    >
                      Reward Point Balance
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    >
                      {user.userRewardPointsBalance}
                    </Typography>
                  </Paper>
                </Grid>
                <h1 style={{ color: "#546e7a" }}>Your Sip Account Profile</h1>
                {user.sipAccountProfiles.map((sip) => (
                  <Grid container key={sip.sipUsername}>
                    <Grid item>
                      <Paper
                        style={{
                          marginTop: "20px",
                          marginRight: "20px",
                          padding: "10px",
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          style={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: "#546e7a",
                          }}
                        >
                          Sip Username
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          {sip.sipUsername}
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        style={{
                          marginTop: "20px",
                          marginRight: "20px",
                          padding: "10px",
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          style={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: "#546e7a",
                          }}
                        >
                          Global extention number
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          {sip.userGlobalExtensionNumber}
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        style={{
                          marginTop: "20px",
                          marginRight: "20px",
                          padding: "10px",
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          style={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: "#546e7a",
                          }}
                        >
                          Service intercomm number
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          {sip.userIntercomNumber}
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </div>

          <div></div>

          {}
        </div>
      );
    } else {
      window.location.reload();
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, { getUser })(Details);
