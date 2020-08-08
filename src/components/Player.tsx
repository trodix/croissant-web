import React, { useState, MouseEvent } from 'react';
import { Player as IPlayer, UserRule } from '../types';
import { Card, CardContent, Typography, CardActions, Button, withStyles, CardHeader, Grid } from '@material-ui/core';
import CoinCounter from './CoinCounter';
import { differenceInCalendarDays } from 'date-fns';
import { useDispatch } from 'react-redux';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { croissantActions } from '../actions';

interface Props { player: IPlayer }

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

const Player = ({ player }: Props) => {

  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState<MaterialUiPickersDate>(player.nextPaymentDate || null);

  const handleDefineDate = (data: MaterialUiPickersDate) => {
    setSelectedDate(data);
    dispatch(croissantActions.updateNextPaymentDate(player, data as Date));
  }

  const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(croissantActions.resetCounterRules(player));
  }

  const getFullName = (player: IPlayer) => {
    return `${player.firstname} ${player.lastname[0]}.`
  }

  // TODO get the dates for next year if the date is passed for this year
  const getRemainingDays = (birthDay: Date) => {

    const dateForThisYear: Date = new Date(
      (new Date())
        .setFullYear((new Date()).getFullYear(),
          birthDay.getMonth(),
          birthDay.getDate())
    );

    const nbDays: number = differenceInCalendarDays(dateForThisYear, new Date());

    if (nbDays < 0) {
      const dateForNextYear: Date = new Date(
        (new Date())
          .setFullYear((new Date()).getFullYear() + 1,
            birthDay.getMonth(),
            birthDay.getDate())
      );
      return differenceInCalendarDays(dateForNextYear, new Date());
    }

    return nbDays;
  }

  const hasFullCoins = (player: IPlayer) => {
    return !!player.userRules?.find(pr => pr.coinsQuantity >= pr.rule.coinsCapacity)
  }

  const renderDatePicker = () => {
    if (hasFullCoins(player)) {
      return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker value={selectedDate} onChange={handleDefineDate} format="dd/MM/yyyy" label="Date des croissants" />
        </MuiPickersUtilsProvider>
      );
    }
  }

  return (
    <Card>
      <CardHeader title={getFullName(player)} subheader={`J-${getRemainingDays(player.birthDate)} avant anniversaire`}></CardHeader>
      <CardContent>
        <Grid container style={styles.container}>
          <Typography color="textSecondary" gutterBottom style={styles.counter}>
            2
          </Typography>
          <img src={require('../assets/img/coin.png')} height="48" alt="coin"></img>
        </Grid>
        {
          player!.userRules!.map((userRule: UserRule) => {
            return (
              (userRule.rule.coinsCapacity > 0) &&
              <div className="player-rule" key={userRule.rule.id}>
                <Typography color="textSecondary" style={styles.p}>
                  {userRule.rule.name}
                </Typography>
                <CoinCounter userRule={userRule} player={player}></CoinCounter>
              </div>
            );
          })
        }
        {renderDatePicker()}
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={handleReset}>Reset</Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(Player);
