import React, { Component } from 'react';
import '../App.css';
import { Grid } from '@material-ui/core';

interface Props {
  value: number;
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
};

class CoinCounter extends Component<Props> {

  max = 3;

  getClassColor = (i: number) => {
    const percent = (i * 100) / this.max;
    if (percent <= (1/3)*100) return 'green';
    else if (percent <= (2/3)*100) return 'orange';
    else return 'red';
  }

  dots = () => {
    let c = [];
    for(let i=0; i<this.max;i++) {
      if(this.props.value > i) {
        c.push(<div key={i} className={`dot dot-fill-${this.getClassColor(i)}`}></div>);
      } else {
        c.push(<div key={i} className='dot dot-empty'></div>);
      }
    }
    return c;
  }

  render() {
    return (
      <Grid container style={styles.container}>
        { this.dots() }
      </Grid>
    );
  }
}

export default CoinCounter;
