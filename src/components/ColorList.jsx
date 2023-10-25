import React,{useState} from "react";
import { Grid } from "@mui/material";
import { ColorItem } from "./ColorItem";
 export const ColorList=()=>{
     const [list, setList] = useState([
    "RED",
    "GREEN",
    "SKYBLUE",
    "PINK",
    "BLUE",
    "BROWN",
    "YELLOW",
    "AQUA",
  ]);
return(
    <Grid container spacing={3} sx={{padding:3}}>
   
       {
        list.map((item)=>(
            <Grid item xs={4}>
         <ColorItem item ={item}/>
            </Grid>
        ))
       }
  </Grid>
)
}
