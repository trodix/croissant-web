import React, { Component } from 'react';
import { Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Theme, createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = ({ spacing }: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: spacing(2),
  },
  title: {
    flexGrow: 1,
  }
});

class Header extends Component<WithStyles<typeof styles>> {

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Croissant
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }

}

export default withStyles(styles)(Header);