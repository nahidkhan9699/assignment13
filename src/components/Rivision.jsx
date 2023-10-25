import React,{useState} from "react";
import { Button } from "@mui/material";
 export const Rivision=()=>{
     const[show,setShow]=useState("red ")
     const[clr,SetClr]=useState("blue")
     const handlePdac=()=>{
        setShow("pickupBiz")
        SetClr("red")
     }
    return(
        <div>
            <h1>show getter</h1>
            <Button variant="contained" onClick={()=>setShow("Blue")} >Submit</Button>
            <br />
            <Button variant="contained" onClick={handlePdac} >pink</Button>
            <h3 style={{textAlign:"center", color:clr}}>{show}</h3>
           
            </div> 
    )
}