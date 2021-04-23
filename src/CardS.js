import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./CardS.css";

const useStyles = makeStyles({
  root: {
    width: 240,
    height: 290,
    margin: 30,
  },
  media: {
    height: 140,
  },
  dark: {
    backgroundColor: "hsl(209, 23%, 22%)",
    color: "white",
  },
});

export default function MediaCard({ Ob, dmode }) {
  const classes = useStyles();

  return (
    <div>
      <Link to={`/${Ob.name}`}>
        <Card
          className={`${classes.root} ${dmode && classes.dark}`}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Ob.flag}
              title={Ob.name}
            />
            <CardContent id="cards"
            className={dmode && classes.dark}
            >
              <Typography gutterBottom variant="h5" component="h2">
                {Ob.name}
              </Typography>
              <Typography variant="body2" component="p">
                Population: <span>{Ob.population}</span>
              </Typography>
              <Typography variant="body2" component="p">
                Region: <span>{Ob.region}</span>
              </Typography>
              <Typography variant="body2" component="p">
                Capital: <span>{Ob.capital}</span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}