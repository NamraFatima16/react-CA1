import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import React from "react";




export default function ActorMovieCard( props) {
   
    const actor = props.actor;
   

    return (
        <Card sx={{ maxWidth: 300 }}>
           <CardHeader/>
          <CardMedia
            sx={{ height: 400 }}
            image={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                : img
            }
          />
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6" component="p">
                  {actor.name}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          
        </Card>
      );


}





