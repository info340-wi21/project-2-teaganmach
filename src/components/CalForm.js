import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ContainedButtons from './SubmitBtn';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase/app';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CalForm() {
  const classes = useStyles();
  const [actlvl, setActLvl] = useState(0);
  const [gender, setGender] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);

  let ref = firebase.database().ref('/');
  ref.on('value', snapshot => {
    const state = snapshot.val();
    console.log(state);
  });

  const handleActLvl = (event) => {
    setActLvl(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <p>
        Use this calorie tracker to determine how much you need to burn or eat in a day to gain/lose weight respectively. 
      </p>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField type="number" min="0" id="filled-basic" label="Enter Weight(kg)" variant="filled" onChange={(e) => {setWeight(e.target.value)}}/>
            <TextField type="number" min="0" id="filled-basic" label="Enter Height(cm)" variant="filled" onChange={(e) => {setHeight(e.target.value)}} />
            <TextField type="number" min="0" id="filled-basic" label="Enter Age" variant="filled" onChange={(e) => {setAge(e.target.value)}} />
        </form>
        <FormControl variant='filled' className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Enter Activity Level</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={actlvl}
            onChange={handleActLvl}
            >
                <MenuItem value={10}>Low Activity</MenuItem>
                <MenuItem value={20}>Moderate Activity</MenuItem>
                <MenuItem value={30}>High Activity</MenuItem>
            </Select>
        </FormControl>
        <FormControl variant='filled' className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Enter Sex</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            onChange={handleGender}
            >
                <MenuItem value={1}>Male</MenuItem>
                <MenuItem value={2}>Female</MenuItem>
            </Select>
        </FormControl>
        <ContainedButtons actLevel={actlvl} gender={gender} height={height} weight={weight} age={age}/>
    </div>
  );
}