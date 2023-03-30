import * as React from "react";
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react';
import MainButton from "@/components/active/_generalbutton"
import Center from "@/components/active/_center";
import Banner from "@/components/active/_bannerandsub";
import Lobbylist from "@/components/active/_lobbyparty";
import MainBox from "@/components/active/_mainbox";

export default function Dashboard() {
    const untitledArtwork = "/landing/logo.png";
    const home = "/dashboard/home.png";
    const friend = "/dashboard/friend.png";
    const vibepicker = "/dashboard/vibepicker.png";
    const vector = "/dashboard/vector.png";
    const avatar = "/dashboard/Avatar.png";

    var ready = true;

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


    const users = [
        { id: "FRIEND1", avatar: "/dashboard/Avatar.png" },
        { id: "FRIEND2", avatar: "/dashboard/Avatar.png" },

    ];

    return (

        <MainBox object1={<Banner main="LOBBY" sub="INVITATION LINK:" more="http://localhost:3000/lobby" />}
            object2={<div className={styles.dashboardbox} style={{ flexDirection: "column", marginTop: "30px", justifyContent: "space-between" }}>
                <Center object={<Lobbylist users={users} />} />
                {/* <div>{enterRoom()}</div> */}
                <Center object={<MainButton name="continue" loc="\vibePicker" sx={{ height: 50, width: 150}}/>} />
            </div>} />



    )
}