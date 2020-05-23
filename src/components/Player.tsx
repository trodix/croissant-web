import React, { Component } from 'react';
import { Player as IPlayer, UserRule } from '../types';
import { Card, CardContent, Typography, CardActions, Button, Theme, createStyles, withStyles, WithStyles, CardHeader, Grid } from '@material-ui/core';
import CoinCounter from './CoinCounter';
import { differenceInCalendarDays } from 'date-fns';

interface Props { player: IPlayer }
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

  // TODO get the dates for next year if the date is passed for this year
  getRemainingDays = (birthDay: Date) => {
    
    const dateForThisYear: Date = new Date(
      (new Date)
        .setFullYear((new Date).getFullYear(), 
        birthDay.getMonth(), 
        birthDay.getDate())
      );

      const nbDays: number = differenceInCalendarDays(dateForThisYear, new Date());

      if (nbDays < 0) {
        const dateForNextYear: Date = new Date(
          (new Date)
            .setFullYear((new Date).getFullYear() + 1, 
            birthDay.getMonth(), 
            birthDay.getDate())
          );
        return differenceInCalendarDays(dateForNextYear, new Date());
      }

    return nbDays;
  }

  render() {
    return (
      <Card>
        <CardHeader title={this.getFullName(this.props.player)} subheader={`J-${this.getRemainingDays(this.props.player.birthDate)} avant anniversaire`}></CardHeader>
        <CardContent>
          <Grid container style={styles.container}>
            <Typography color="textSecondary" gutterBottom style={styles.counter}>
            2
            </Typography>
            <img src={require('../assets/img/coin.png')} height="48" alt="coin"></img>
          </Grid>
            {
              this.props.player!.userRules!.map((userRule: UserRule) => 
                <div className="player-rule" key={userRule.rule.id}>
                  <Typography color="textSecondary" style={styles.p}>
                    {userRule.rule.name}
                  </Typography>
                  <CoinCounter value={userRule.coinsQuantity} max={userRule.rule.coinsCapacity}></CoinCounter>
                </div>
              )
            }
        </CardContent>
        <CardActions>
          <Button color="primary">Reset</Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Player);
