import React, { Component } from 'react';
import { Player as IPlayer } from '../types';
import { Card, CardContent, Typography, CardActions, Button, Theme, createStyles, withStyles, WithStyles, CardHeader, Grid } from '@material-ui/core';
import CoinCounter from './CoinCounter';

interface Props { player: IPlayer, key: number | string }
interface State {}

const styles = {
  title: {
    fontSize: 25,
    backgroundColor: '#3F51B5',
    color: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  p: {
    fontSize: 14,
  },
  counter: {
    fontSize: 40,
  },
  container: {
    justifyContent: 'center',
  }
};

class Player extends Component<Props, State> {

  state: State = {}

  getFullName = (player: IPlayer) => {
    return `${player.firstname} ${player.lastname[0]}.`
  }

  render() {
    return (
      <Card>
        <CardHeader title={this.getFullName(this.props.player)} subheader="J-201 avant anniversaire"></CardHeader>
        <CardContent>
          <Grid container style={styles.container}>
            <Typography color="textSecondary" gutterBottom style={styles.counter}>
            2
            </Typography>
            <img src={require('../assets/img/coin.png')} height="48" alt="coin"></img>
          </Grid>
          <Typography color="textSecondary" style={styles.p}>
            Nombre de chaises
          </Typography>
          <CoinCounter value={2}></CoinCounter>
          <Typography color="textSecondary" style={styles.p}>
            Nombre de portes
          </Typography>
          <CoinCounter value={1}></CoinCounter>
        </CardContent>
        <CardActions>
          <Button color="primary">Reset</Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Player);
