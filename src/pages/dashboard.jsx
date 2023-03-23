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
import Menua from "@/components/_avatarmenu";
import Lobby2 from "@/components/_lobbytesting";

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
                        <img className={styles.image} src={untitledArtwork} />
                        <Lobby2 />
                    </div>
                    <div className={styles.innerbox2}>
                        <img className={styles.vectordash} src={vector} />
                        <div className={styles.halfsize2} >
                            <div className={styles.title}>
                                <img className={styles.functionicon} src={vibepicker} />
                                <div className={styles.friendmatch} style={{ marginTop: "10%" }}>VIBE PICKER&nbsp;&nbsp;

                                </div>

                            </div>
                            <div className={styles.innerfilebox2}>

                                <input className={styles.textfield} type="text" id="playlist" name="playlist" placeholder="Type your playlist name here"></input>
                                <Button onClick={openPlaylist}for="playlist" variant="contained">Create playlist</Button>
                                
                                <Drawer
                                    anchor="left"
                                    open={Boolean(anchorPlaylist)}
                                    onClose={closePlaylist}
                                    PaperProps={{
                                        sx: {
                                            marginTop: '380px',
                                            backgroundColor: 'black',
                                            color: 'white',
                                            flexGrow: 1,
                                            width: '34%',
                                            marginLeft: '800px',
                                            height: '330px',
                                            overflow: 'scroll'
                                        }
                                    }}
                                >
                                    <TrackList tracks={[]} />
                                </Drawer>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}