import { Grid } from '@material-ui/core';
import React from 'react';
import '../App.css';
import { Player, UserRule } from '../types';
import { croissantActions } from '../actions/croissant.action'
import { useDispatch } from 'react-redux';

interface Props {
  userRule: UserRule;
  player: Player;
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
};

function CoinCounter({ userRule, player }: Props) {

  const dispatch = useDispatch();

  // const todos = useSelector((state: State) => state.todos);

  // const [newTodoInput, setNewTodoInput] = useState<string>("");

  const getClassColor = (i: number) => {
    const percent = (i * 100) / userRule.rule.coinsCapacity;
    if (percent <= (1/3)*100) return 'green';
    else if (percent <= (2/3)*100) return 'orange';
    else return 'red';
  }

  const handleIncrement = () => {
    console.log(`increment for userId: ${player.id} and ruleId ${userRule.rule.id}`)
    dispatch(croissantActions.incrementCounter(player.id, userRule.rule.id));
  }

  const handleDefineDate = () => {
    console.log(`set date for userId: ${player.id} and ruleId ${userRule.rule.id}`)
  }

  const dots = () => {
    let c = [];
    for(let i=0; i<userRule.rule.coinsCapacity; ++i) {
      if(userRule.coinsQuantity > i) {
        c.push(<div key={i} className={`dot dot-fill-${getClassColor(i)}`}></div>);
      } else {
        c.push(<div key={i} className='dot dot-empty'></div>);
      }
    }
    return c;
  }

  let action = null;
  if (userRule.coinsQuantity >= userRule.rule.coinsCapacity) {
    action = <button onClick={handleDefineDate}>Définir date</button>
  } else {
    action = <button onClick={handleIncrement}>+</button>
  }

  return (
    <Grid container style={styles.container}>
      { dots() }
      { action }
    </Grid>
  );

};

export default CoinCounter;
