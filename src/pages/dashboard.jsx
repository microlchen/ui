import * as React from "react";
import styles from '@/styles/Home.module.css'
import {
    Box,
    Avatar,

} from "@mui/material";
import Image from "next/image";
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GroupIcon from '@mui/icons-material/Group';

export default function Dashboard() {
    const untitledArtwork = "/landing/logo.png";
    const home = "/dashboard/home.png";
    const friend = "/dashboard/friend.png";
    const vibepicker = "/dashboard/vibepicker.png";
    const vector = "/dashboard/vector.png";
    const avatar = "/dashboard/Avatar.png";


    return (
        <div className={styles.dashboard}>
                <div className={styles.menu}>
                            <img className={styles.untitledartworkdash} style = {{marginTop:"40%"}} src={untitledArtwork} />
                            <img className={styles.untitledartworkdash} style = {{marginTop:"10vh", marginLeft:"35%"}} src={home} />
                            <img className={styles.untitledartworkdash} style = {{marginTop:"35vh", marginBottom:"40%"}} src={avatar} />
                            {/* <img className={styles.untitledartworkdash}  src={home} /> */}

                </div>
                <div className={styles.dashboardbox}>
                    <div className={styles.innerbox}>
                    <div className={styles.landingdash}>Hi, Y/N</div>
                    
                    <img className={styles.image} src={untitledArtwork} />
                        <div className={styles.halfsize} >
                            <div className={styles.title}>
                            <img className={styles.functionicon} style={{width:"10%", height:"15%", alignContent:"center"}} src={friend} />
                            <div className={styles.friendmatch}>FRIEND MATCH</div>
                            </div>
                                <div className={styles.innerfilebox}>
    
                                </div>
                        </div>
                    </div>
                    <div className={styles.innerbox} style ={{marginRight:"5%", height:"100%"}}>
                    <img className={styles.vectordash} src={vector} />
                        <div className={styles.halfsize2} >
                            <div className={styles.title}>
                            <img className={styles.functionicon} style={{width:"10%", height:"15%", alignContent:"center"}} src={vibepicker} />
                            <div className={styles.friendmatch}>FRIEND MATCH</div>
                            </div>
                                <div className={styles.innerfilebox} style = {{height: "82%", minHeight:"260px"}}>

                                </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}