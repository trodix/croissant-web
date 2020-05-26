import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import '../App.css';
import { Player, UserRule, Rule, INCREMENT_COUNTER } from '../types';
import { croissantActions } from '../actions/croissant.action'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

interface Props {
  userRule: UserRule;
  player: Player;
  incrementCounter: Function;
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
};

class CoinCounter extends Component<Props> {

  getClassColor = (i: number) => {
    const percent = (i * 100) / this.props.userRule.rule.coinsCapacity;
    if (percent <= (1/3)*100) return 'green';
    else if (percent <= (2/3)*100) return 'orange';
    else return 'red';
  }

  onIncrement = () => {
    console.log(`increment for userId: ${this.props.player.id} and ruleId ${this.props.userRule.rule.id}`)
    this.props.incrementCounter(this.props.player.id, this.props.userRule.rule.id);
  }

  onSetDate = () => {
    console.log(`set date for userId: ${this.props.player.id} and ruleId ${this.props.userRule.rule.id}`)
  }

  dots = () => {
    let c = [];
    for(let i=0; i<this.props.userRule.rule.coinsCapacity; ++i) {
      if(this.props.userRule.coinsQuantity > i) {
        c.push(<div key={i} className={`dot dot-fill-${this.getClassColor(i)}`}></div>);
      } else {
        c.push(<div key={i} className='dot dot-empty'></div>);
      }
    }
    return c;
  }

  render() {
    let action = null;
    if (this.props.userRule.coinsQuantity >= this.props.userRule.rule.coinsCapacity) {
      action = <button onClick={this.onSetDate}>Définir date</button>
    } else {
      action = <button onClick={this.onIncrement}>+</button>
    }

    return (
      <Grid container style={styles.container}>
        { this.dots() }
        { action }
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, AnyAction>) {
  return { incrementCounter: (playerId: number, ruleId: number) => dispatch(croissantActions.incrementCounter(playerId, ruleId)) };
}

export default connect(null, mapDispatchToProps)(CoinCounter);
