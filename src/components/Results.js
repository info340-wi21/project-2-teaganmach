import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SubmitBtn from './SubmitBtn.js';
import { propTypes } from 'react-bootstrap/esm/Image';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <div>
        <Card className={classes.root}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Calories Needed To Lose Weight
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
                {props.loseWght}
            </Typography>
            </CardContent>
        </Card>
        <Card className={classes.root}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Calories Needed To Gain Weight
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
                {props.gainWght}
            </Typography>
            </CardContent>
        </Card>
        <Card className={classes.root}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Calories Needed To Maintain Weight
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
                {props.maintainWght}
            </Typography>
            </CardContent>
        </Card>
    </div>
    
  );
}
