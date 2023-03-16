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

    return (
        <div className={styles.dashboard}>
                <div className={styles.menu}>
                            <img className={styles.untitledartworkdash} style={{width:"70%", marginTop:"20%"}} src={untitledArtwork} />
                            <img className={styles.untitledartworkdash} style={{width:"40%", alignContent:"center"}} src={home} />
                            <img className={styles.untitledartworkdash} style={{width:"40%", alignContent:"center"}} src={home} />

                </div>
                <div className={styles.dashboardbox}>
                    <div className={styles.innerbox}>
                    <div className={styles.landingdash}>Hi, Y/N</div>
                    
                    <img className={styles.image} style={{width:"50%"}} src={untitledArtwork} />
                        <div className={styles.halfsize} >
                            <div className={styles.title}>
                            <img className={styles.functionicon} style={{width:"10%", height:"15%", alignContent:"center"}} src={home} />
                            <div className={styles.friendmatch}>Friend Match</div>
                            </div>
                                <div className={styles.innerfilebox}>
                                    Hello , this is subjected to change alot
                                </div>
                        </div>
                    </div>
                    <div className={styles.innerbox} style ={{marginTop:"10%", marginRight:"5%", height:"100%"}}>
                        <div className={styles.halfsize2} >
                            <div className={styles.title}>
                            <img className={styles.functionicon} style={{width:"10%", height:"15%", alignContent:"center"}} src={home} />
                            <div className={styles.friendmatch}>Friend Match</div>
                            </div>
                                <div className={styles.innerfilebox}>
                                    Hello , this is subjected to change alot
                                </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}