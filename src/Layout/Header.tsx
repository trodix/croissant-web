import React from 'react';
import { Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { authenticationService as AuthService } from '../services';
import { AuthenticatedUser } from '../types';

const useStyles = makeStyles(({ spacing }: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

const Header = () => {

  const history = useHistory();
  const classes = useStyles();

  const currentUser: AuthenticatedUser = AuthService.getCurrentUser();

  const handleLogout = () => {
    AuthService.logout(() => history.push('/'))
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Croissant
        </Typography>
        { currentUser ? (
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        ) : (
          <Button color="inherit" component={RouterLink} to="/login">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );

}

export default Header;