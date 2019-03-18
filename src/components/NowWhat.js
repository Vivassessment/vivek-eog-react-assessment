import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import AvatarRaw from "@material-ui/core/Avatar";

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const avatarStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const Avatar = withStyles(avatarStyles)(AvatarRaw);

const styles = {
  card: {
    margin: "5% 25%"
  }
};

const NowWhat = props => {
  const { classes, location } = props;
  return (
    <Card style={{padding:"3px"}}>
      <CardHeader title="Wheather App" />
      <CardContent>
        <List>
          {location && location.map((item)=> <ListSmall item={item}  key={item.title}/>)}
        </List>
      </CardContent>
    </Card>
  );
};

const ListSmall = props => {
  const { item } = props
  return (
    <Fragment>
        <ListItem style={{width:"100%"}}>
          <ListItemText>Distance</ListItemText> <ListItemText>{item.distance}</ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText>Title</ListItemText> <ListItemText>{item.title}</ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText>Location Type</ListItemText> <ListItemText>{item.location_type}</ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText>Woeid</ListItemText> <ListItemText>{item.woeid}</ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText>Lattitude & Longitude</ListItemText> <ListItemText>{item.latt_long}</ListItemText>
        </ListItem>
        <hr/>
        {item.consolidated_weather && item.consolidated_weather.map(item=>
        <Fragment>
          <ListItem>
            <ListItem >
              <ListItemText style={{width:"200px"}}>Weather State Name</ListItemText> <ListItemText style={{width:"150px"}}>{item.weather_state_name}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Min temp</ListItemText> <ListItemText>{item.min_temp}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Temperature</ListItemText> <ListItemText>{item.the_temp}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Max Temp</ListItemText> <ListItemText>{item.max_temp}</ListItemText>
            </ListItem>
          </ListItem>
          <hr/>
          </Fragment>
          ) }
      </Fragment>
  )
}

export default withStyles(styles)(NowWhat);
