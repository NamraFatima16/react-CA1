import React from "react";

import ActorMovieCard from "../actorMovieCard";
import Grid from "@mui/material/Grid";

const ActorList = ( {actor }) => {
  let actorCards = actor.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ActorMovieCard key={m.id} actor={m} />
    </Grid>
  ));
  return actorCards;
};

export default ActorList;