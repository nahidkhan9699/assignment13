import React from "react";
import { ColorList } from "./components/ColorList";
import { Rivision } from "./components/Rivision";
import { Card ,CardContent} from "@mui/material";
import { Rivised } from "./components/Rivised";
function App() {
  return (

<Card>
  <CardContent>
 
  <ColorList/>
  {/* <Rivision/>
  <Rivised/> */}
  </CardContent>
</Card>
       
      
  );
}
export default(App)
