// this feature renders a list of activities that users can pick their favorites from!

import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import SAMPLE_FAVS from '../data/activities.json';
import '../css/favorites.css';

// making a comparison function
function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
}

// sorting the list by name in alphabetical order -- not needed?
let sorted_favs = SAMPLE_FAVS.sort(compareValues('name'))

// making the overall theme of the page using material-ui
// SUBJECT TO CHANGE
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper
  }
}));

// function that renders the the list 
function renderRow(props) {
    const { index, style } = props;
    // retrieve array of list item names
    let result = SAMPLE_FAVS.map((obj) => obj.name).sort();
  
    return (
      <ListItem button style={style} key={index}>
        <ListItemText primary={result[index]} />
      </ListItem>
    );
  }

export default function FavsList() {
  const classes = useStyles();

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="left-panel col-sm">
            <h3>Click on an activity to assign it as a favorite:</h3> 
            <FixedSizeList
              height={400}
              width={300}
              itemSize={40}
              itemCount={SAMPLE_FAVS.length}>
              {renderRow}
            </FixedSizeList>
          </div>
          <div className="favs-panel col-sm-auto">
            <h3>favorites go here!</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

