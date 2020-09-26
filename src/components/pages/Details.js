import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getUser } from "../../actions/auth";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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
