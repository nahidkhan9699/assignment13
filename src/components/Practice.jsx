import React,{useState} from "react";
import{Grid,Button,Card,CardContent} from "@mui/material";


export const Practice=()=>{
    const[data,setData]=useState(["red","yellow","pink","green","orange","violet","blue","brown","choclate"])
    const[result,setResult]=useState("Color Here")

    const handleadd=(item)=>{
        setResult(item)
    }

    return(
            <Grid container spacing={3} align="center">
                
                <Grid item xs={12}>
                    <span style={{fontSize:"100px",fontWeight:"bold",color:result}}>{result.toUpperCase()}</span>
                </Grid>

                { 
                    data.map((item)=>
                    <Grid item xs={4}>
                        <Button variant="contained" fullWidth onClick={()=>handleadd(item)}>{item}</Button>
                    </Grid>
                    )
                }

                <Grid item xs={12}>
                    <Card sx={{height:'100px',bgcolor:result}}>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
    )
}