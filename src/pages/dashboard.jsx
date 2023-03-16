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
            <Box sx={{ flexDirection: 'column' }}>
                <div className={styles.menu}>
                        <Box >
                            <img className={styles.untitledartworkdash} style={{width:"70%", marginTop:"20%"}} src={untitledArtwork} />
                            <Box sx={{ mt: '200px' }}></Box>
                            <img className={styles.untitledartworkdash} style={{width:"50%", alignContent:"center"}} src={home} />
                            <Box sx={{ mt: '50px' }}></Box>
                            <DarkModeIcon fontSize="large" />
                            <Box sx={{ mt: '10%' }}></Box>
                            <Box sx={{ mt: '400px' }}></Box>
                            <Avatar />

                        </Box>

                </div>
                <Box sx={{ flexDirection: 'row', mt: "-52%", ml: "14%" }}>
                    <div className={styles.landingdash}>Hi, Y/N</div>
                    <div style={{ flexDirection: 'column'}}>
                    <img className={styles.untitledartworkdash} style={{width:"20%"}} src={untitledArtwork} />
                        <Box className={styles.halfsize} sx={{ border: 1, mt: "2%", borderColor: '#cad6ff', borderRadius: '20px' }}>
                            <Box sx={{mt: '2%', ml: "2%"}}>
                                <GroupIcon fontSize="large" />
                                <p className={styles.thisHASNTBEENMADEYET}>Friend Match - use to change font </p>
                                <Box sx={{mt: '5%'}}></Box>
                                <div className={styles.innerfilebox}>
                                    Hello , this is subjected to change alot
                                </div>
                                
                            </Box>

                        </Box>
                        <Box sx={{ flexDirection: 'row', mt: "-60%", ml: "55%" }}>
                        <Box className={styles.halfsize2} sx={{ border: 1, mt: "2%", borderColor: '#cad6ff', borderRadius: '20px' }}>
                            <Box sx={{mt: '2%', ml: "2%"}}>
                                <GroupIcon fontSize="large" />
                                <p className={styles.thisHASNTBEENMADEYET}>Friend Match - use to change font </p>
                                <Box sx={{mt: '5%'}}></Box>
                                <div className={styles.innerfilebox2}>
                                    Hello , this is subjected to change alot
                                </div>
                                
                            </Box>

                        </Box>
                        </Box>
                    </div>
                </Box>
            </Box>
        </div>
    )
}