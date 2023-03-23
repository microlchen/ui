import styles from '@/styles/Home.module.css'
import {
    Button,
} from "@mui/material";


const MainButton = (props) => {
    

    return(
        <Button variant="text" onClick={props.function1}>
            <span className={styles.buttontext}>{props.name}</span>
        </Button>
    );
}
export default MainButton;

//HONESTLY THIS COULD BE ANY GENERAL BUTTON

//CREATE PLALIST, LOGOUT