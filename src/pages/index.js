import * as React from "react";
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react';
import About from './_about.js'
import {
  Button,
  Drawer,

} from '@mui/material/';
import Bottom from "@/components/index/_bottom.js";
import Indexbutton from "@/components/index/_indexbuttons.js";
import MusicWheneverWhoever from "@/components/index/_landingdetails.js";
import MeetyourMu from "@/components/index/_meetyourmusaic.js";


const App = () => {

  const untitledArtwork = "/landing/logo.png";


  const [anchorAbout, setAbout] = useState(null);
  const openAbout = (event) => {
    setAbout(event.currentTarget);
  };
  const closeAbout = () => {
    setAbout(null);
  };

  return (
    <div className={styles.all}>

      <div className={styles.landing} style={{ marginLeft: 0 }}>
        <div className={styles.flexcontainer}>
          <img className={styles.untitledartwork4} src={untitledArtwork} />

          <Indexbutton link="/" name="Home" />
          <Indexbutton function={openAbout} name="About" />
          <Indexbutton name="People" />

          <div className={styles.flexcontainer}></div>

          <div className={styles.logininstance1}>
            <Button variant="outlined" href="./signin" fullWidth>
              Login
            </Button>
          </div>
        </div>

        <MeetyourMu />

      </div>
      <MusicWheneverWhoever />
      <Bottom />

      <Drawer
        anchor="left"
        open={Boolean(anchorAbout)}
        onClose={closeAbout}
        PaperProps={{
          sx: {
            marginTop: '100px',
            backgroundColor: 'grey',
            color: 'white',
            flexGrow: 1,
            width: '100%'
          }
        }}
      >
        <About />
      </Drawer>
    </div>
  );
};
export default App;
