// this feature renders a list of activities that users can pick their favorites from!

import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import SAMPLE_FAVS from '../data/activities.json';
import '../css/favorites.css';

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

export default function FavsList() {
  // state var that keeps track of what's in the favs list
  let [favs, setFavs] = useState([]);
  let [act, setAct] = useState(SAMPLE_FAVS);
  const classes = useStyles();

  function addFavs(indexToAdd){
    setFavs([...SAMPLE_FAVS.filter((_, index)=> index === indexToAdd)]);
  }

  // renders list of activities
  function renderRow(props) {
    const { index, style } = props;
    // retrieve array of list item names
    let result = act.map((obj) => obj.name).sort();

    return (
      <ListItem button style={style} key={index} onClick={()=>addFavs(index)}>
        <ListItemText primary={result[index]} />
      </ListItem>
    );
  }

  // renders list of favs
  function renderFavs(props){
  const { index, style } = props;
    // retrieve array of list item names
    let result = favs.sort().map((obj) => obj.name);

    return (
      <ListItem button style={style} key={index}>
        <ListItemText primary={result[index]} />
      </ListItem>
    );
  }

	return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
        <div className="favs-panel col-sm">
          <h3>favorites go here!</h3>
          <FixedSizeList
            height={400}
            width={300}
            itemSize={40}
            itemCount={act.length}>
            {renderFavs}
          </FixedSizeList>
        </div>
          <div className="left-panel col-sm-auto">
            <h3>Click on an activity to assign it as a favorite:</h3> 
           <FixedSizeList
            height={400}
            width={300}
            itemSize={40}
            itemCount={SAMPLE_FAVS.length}>
            {renderRow}
          </FixedSizeList>
        </div>
      </div>
    </div>
  </div>
	);
}

