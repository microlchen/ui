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

    return (
        <div className={styles.dashboard}>
            <Box sx={{ flexDirection: 'column' }}>
                <Box sx={{
                    flexDirection: 'row', borderRight: 1, borderTop: 1, borderColor: '#cad6ff',
                    height: '100%', width: '6%', borderRadius: '50px', alignItems: 'center'
                }}>
                    <Box className={styles.dashboard2}>
                        <Box sx={{ mt: "50px", ml: "15px", mb: "20px" }}>
                            <Image
                                src="/landing/logo.png"
                                width={40}
                                height={40}
                                priority
                            />
                            <Box sx={{ mt: '200px' }}></Box>
                            <HomeIcon fontSize='large' />
                            <Box sx={{ mt: '50px' }}></Box>
                            <DarkModeIcon fontSize="large" />
                            <Box sx={{ mt: '10%' }}></Box>
                            <Box sx={{ mt: '400px' }}></Box>
                            <Avatar />

                        </Box>

                    </Box>

                </Box>
                <Box sx={{ flexDirection: 'row', mt: "-52%", ml: "14%" }}>
                    <div className={styles.landingdash}>Hi, Y/N</div>
                    <Box sx={{ flexDirection: 'column', mt: "10%" }}>
                        <Image className={styles.innerdash}
                            src="/landing/logo.png"
                            width={350}
                            height={350}
                            priority
                        />
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
                    </Box>
                </Box>
            </Box>
        </div>
    )
}