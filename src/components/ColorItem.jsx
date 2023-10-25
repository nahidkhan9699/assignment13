import React from "react";
import {Card,CardContent,Grid,Typography  } from "@mui/material";
export const ColorItem = ({item}) => {
 
  return (
    <Card sx={{bgcolor:`${item}`, height:"200px"}}>
        <CardContent>
            <Grid container spacing={3}>
                <Grid item xs={12} align="Center">
                <Typography variant="h5">
                  {item} 
                </Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
};
