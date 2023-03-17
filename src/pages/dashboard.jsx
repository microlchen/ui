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
                            <img className={styles.untitledartworkdash1} src={untitledArtwork} />
                            <img className={styles.untitledartworkdash2} src={home} />
                            <img className={styles.untitledartworkdash3} src={avatar} />

                </div>
                <div className={styles.dashboardbox}>
                    <div className={styles.innerbox}>
                    <div className={styles.landingdash}>Hi, Y/N</div>
                    <img className={styles.image} src={untitledArtwork} />
                        <div className={styles.halfsize} >
                            <div className={styles.title}>
                            <img className={styles.functionicon} src={friend} />
                            <div className={styles.friendmatch}>FRIEND MATCH</div>
                            </div>
                                <div className={styles.innerfilebox}>
    
                                </div>
                        </div>
                    </div>
                    <div className={styles.innerbox2}>
                    <img className={styles.vectordash} src={vector} />
                        <div className={styles.halfsize2} >
                            <div className={styles.title}>
                            <img className={styles.functionicon} src={vibepicker} />
                            <div className={styles.friendmatch}>FRIEND MATCH</div>
                            </div>
                                <div className={styles.innerfilebox2}>

                                </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}