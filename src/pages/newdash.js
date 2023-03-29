import * as React from "react";
import styles from '@/styles/Home.module.css'
import {
    Button,
    Drawer,
    Menu,
    MenuItem
} from "@mui/material";
import { useState, useEffect } from 'react';
import Lobby from "./_lobby";
import FriendListSidebar from "@/components/_friendbar";
import FullCanvasButton from "@/components/_deleteuserdata";
import PlaylistSidebar from "@/components/_generatelistbar";
import TrackList from "@/components/_scrolltracklist";
import Spinner from "@/components/_loadingscreen";
import Menua from "@/components/active/_avatarmenu";
import Lobby2 from "@/components/_lobbytesting";
import Center from "@/components/active/_center";
import MainButton from "@/components/active/_generalbutton";

export default function Dashboard() {
    const untitledArtwork = "/landing/logo.png";
    const home = "/dashboard/home.png";
    const friend = "/dashboard/friend.png";
    const vibepicker = "/dashboard/vibepicker.png";
    const vector = "/dashboard/vector.png";
    const avatar = "/dashboard/Avatar.png";

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [anchorPlaylist, setPlaylist] = useState(null);
    const openPlaylist = (event) => {
        setPlaylist(event.currentTarget);
    };
    const closePlaylist = () => {
        setPlaylist(null);
    };

    return (
        <div className={styles.all}>
            <div className={styles.dashboard}>
                <div className={styles.menu}>
                    <img className={styles.untitledartworkdash1} src={untitledArtwork} />
                    <img className={styles.untitledartworkdash2} src={home} />
                    <div>
                        <img onClick={handleClick} className={styles.untitledartworkdash3} src={avatar} />
                        <Menua function={handleClose} anchor={anchorEl} />
                    </div>

                </div>
                <div className={styles.dashboardbox}>
                    <div className={styles.innerbox}>
                        <div className={styles.landingdash}>Hi, Y/N</div>
                        <Center object={<MainButton name="READY SOLO" loc="\vibePicker" />} />
                        <Center object={<MainButton name="READY MULTI" loc="\vibePicker" />} />
                        
                    </div>
                    
                </div>

            </div>


        </div>
    )
}