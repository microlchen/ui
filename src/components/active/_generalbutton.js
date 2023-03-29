import styles from '@/styles/Home.module.css'
import {
    Button,
} from "@mui/material";
import * as React from "react";


const MainButton = (props) => {
    

    return(
        
            <Button variant="contained" href={props.loc} sx={{height:"150%", width:"100%",color:"primary.textD"}}>{props.name}</Button>
        
    );
}
export default MainButton;

//HONESTLY THIS COULD BE ANY GENERAL BUTTON

//CREATE PLALIST, LOGOUT