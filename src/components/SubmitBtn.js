import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Results from './Results';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function ContainedButtons(props) {
  const classes = useStyles();
  const [maintainWghtState, setMaintainWght] = useState(0);
  const [loseWghtState, setLoseWght] = useState(0);
  const [gainWghtState, setGainWght] = useState(0);
  const [calc, setCalc] = useState(false)

  function calcCalories() {
    let maintainWght = 0;
    let loseWght = 0;
    let gainWght = 0;

    if (props.gender == 1) {
        if (props.actLevel == 10) {
            maintainWght = 1.2 * ((10 * props.weight) + (6.25 * props.height) - (5 * props.age) + 5);
            loseWght = maintainWght * .8;
            gainWght = maintainWght * 1.1;
        } else if (props.actLevel == 20) {
            maintainWght = 1.46 * ((10 * props.weight) + (6.25 * props.height) - (5 * props.age) + 5);
            loseWght = maintainWght * .8;
            gainWght = maintainWght * 1.1;
        } else {
            maintainWght = 1.72 * ((10 * props.weight) + (6.25 * props.height) - (5 * props.age) + 5);
            loseWght = maintainWght * .8;
            gainWght = maintainWght * 1.1;
        }
    } else {
        if (props.actLevel == 10) {
            maintainWght = 1.2 * ((10 * props.weight) + (6.25 * props.height) - (5 * props.age) - 161);
            loseWght = maintainWght * .8;
            gainWght = maintainWght * 1.1;
        } else if (props.actLevel == 20) {
            maintainWght = 1.46 * ((10 * props.weight) + (6.25 * props.height) - (5 * props.age) - 161);
            loseWght = maintainWght * .8;
            gainWght = maintainWght * 1.1;
        } else {
            maintainWght = 1.72 * ((10 * props.weight) + (6.25 * props.height) - (5 * props.age) - 161);
            loseWght = maintainWght * .8;
            gainWght = maintainWght * 1.1;
        }
    }

    console.log(props)
    setMaintainWght(maintainWght)
    setLoseWght(loseWght)
    setGainWght(gainWght)
    setCalc(true)
    
}

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={calcCalories}>
        Submit
      </Button>
      {calc ? 
       (<Results loseWght={loseWghtState} gainWght={gainWghtState} maintainWght={maintainWghtState}/>) :
       (<div>Please Enter Your Stats</div>)      
      }
     
    </div>
  );
}