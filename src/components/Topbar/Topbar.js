import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Toolbar,
  Hidden,
  IconButton,
  Link,
  makeStyles,
} from "@material-ui/core";
import { Menu as MenuIcon } from "react-feather";
import Logo from "../Logo";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    color: theme.palette.text.primary,
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.divider}`,
    zIndex: theme.zIndex.drawer + 100,
  },
  toolbar: {
    backgroundColor: "#3949ab",
    height: 64,
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: "10px",
    textTransform: "uppercase",
  },
}));

const TopBar = ({ onMobileNavOpen, logout, user }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
        </Hidden>
        <Box ml={2} flexGrow={1} />
        <h4
          className={classes.link}
          style={{ color: "#fff" }}
          // color="textSecondary"
          component={RouterLink}
          underline="none"
          variant="body2"
        >
          {user ? `Welcome ${user.userFirstName}` : ""}
        </h4>
        <Link
          className={classes.link}
          // color="textSecondary"
          style={{ color: "#fff" }}
          component={RouterLink}
          to="/login"
          underline="none"
          variant="body2"
          onClick={logout}
        >
          Logout
        </Link>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};

TopBar.defaultProps = {
  onMobileNavOpen: () => {},
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(TopBar);
