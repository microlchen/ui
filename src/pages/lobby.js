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
import MainButton from "@/components/_generalbutton"

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

    return (
        <div className={styles.all} style = {{backgroundColor:"#282634"}}>
            <div className={styles.dashboard} style = {{height: "100vh",flexDirection:"column", backgroundColor:"#282634"}}>
                <div style = {{
                    flexDirection:"row", 
                    width:"100vw", 
                    height: "120px", 
                    minWidth:"100vw",
                    justifyContent:"space-around", 
                    background: "#494362",
                    display: "flex"}}>
                    <div style = {{ justifyContent:"space-around", flexDirection: "column", fontFamily:"Inter, sans-serif", fontSize: "200%", fontWeight:"100", color: "#CAD6FF", letterSpacing:"5px", alignSelf:"center", marginTop:"10px"}}>
                        LOBBY
                    </div>
                </div>
                <div style = {{
                        flexDirection:"row", 
                        width:"100vw", 
                        height: "30px", 
                        minWidth:"100vw",
                        justifyContent:"center", 
                        boxShadow: "22px #191722", 
                        borderRadius:"0px 0px 30px 30px",
                        background: "#67617C",
                        display: "flex"}}>
                        <div style = {{flexDirection: "column", fontFamily:"Inter, sans-serif", fontSize: "75%", fontWeight:"500", color: "#B5BFDC", letterSpacing:"1px", alignSelf:"center", }}>
                            INVITATION LINK: 
                        </div>
                        <div style = {{flexDirection: "column", fontFamily:"Inter, sans-serif", fontSize: "75%", fontWeight:"100", color: "#B5BFDC", letterSpacing:"1px", alignSelf:"center", marginLeft: "10px"}}>
                            http://localhost:3000/lobby
                        </div>
                    </div>
                <div className={styles.dashboardbox} style = {{flexDirection: "column",marginTop:"30px",justifyContent:"space-between"}}>
                    <div style = {{
                        flexDirection:"row", 
                        width:"200px", 
                        height: "60px", 
                        borderRadius:"30px",
                        background: "#BAC0F1",
                        alignSelf:"center",
                        display: "flex"}}>
                        <img classname = {styles.untitledartworkdash3} style = {{marginTop: "5px", marginBottom: "5px", marginRight:"10px",marginLeft:"5px",width:"50px", height:"auto"}} src={avatar} />
                        <div style = {{flexDirection: "column", fontFamily:"Inter, sans-serif", fontSize: "80%", fontWeight:"500", color: "#494362", letterSpacing:"1px", alignSelf:"center", marginLeft: "10px"}}>
                            FRIEND 1
                        </div>
                        {/* <div style = {{
                            flexDirection:"row", 
                            width:"20px", 
                            height: "20px", 
                            marginLeft: "30%",
                            borderRadius:"30px",
                            background: "#E0765E",
                            alignSelf:"center"}}>
                        </div> */}
                    </div>

                    
                    {/* <div>{enterRoom()}</div> */}
                    
                    <div style = {{
                        flexDirection:"row", 
                        // width:"30vw", 
                        // height: "60px", 
                        // borderRadius:"30px",
                        // background: "#BAC0F1",
                        alignSelf:"center",
                        marginBottom:"40px",
                        display: "flex"}}>
                        <Button variant="contained" href="\vibePicker" sx={{height:50, width:150,color:"primary.textD"}}>continue</Button>
                    </div>
                </div>
                
            </div>


        </div>
    )
}