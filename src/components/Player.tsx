import React, { Component } from 'react';
import { Player as IPlayer } from '../types';
import { Card, CardContent, Typography, CardActions, Button, Theme, createStyles, withStyles, WithStyles, makeStyles } from '@material-ui/core';

interface Props { player: IPlayer, useStyle?: WithStyles<typeof styles> }
interface State {}

const styles = (theme: Theme) => createStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Player extends Component<Props, State> {

  state: State = {}

  // render() {
  //   return (
  //     <div className="player">
  //       <p>{ this.props.player.name }</p>
  //     </div>
  //   );
  // }

  render() {
    const classes = this.props?.useStyle?.classes as any;
    return (
      <div className="player">
        <Card className={classes?.root}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              { this.props.player.name }
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Player);
