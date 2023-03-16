import * as React from "react";
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import About from './about.js'
import {
  Button,
  Drawer,
  
} from '@mui/material/';
const App = () => {

  const ellipse = "/landingdown/ellipse.svg";
  var music = "/landingdown/music.png";
  var whenever = "/landingdown/whenever.png";
  var whoever = "/landingdown/whoever.png";


  const groupm = "/landingdown/grouptgrc.png";
  const logo = "/landingdown/logo.png";
  const group1 = "/landingdown/group1.svg"
  const untitledArtwork = "/landing/logo.png";
  const vector = "/landing/vector1.svg";
  const vector1 = "/landing/vector.svg";
  const tri = "/landing/polygon.png";

  const [anchorDrawer, setAnchorDrawer] = useState(null);
  const openDrawer = (event) => {
    setAnchorDrawer(event.currentTarget);
  };
  const closeDrawer = () => {
    setAnchorDrawer(null);
  };

  return (
    <div className={styles.all}>

      <div className={styles.landing} style={{ marginLeft: 0 }}>
        <div className={styles.flexcontainer}>
          <img className={styles.untitledartwork4} src={untitledArtwork} />
          <div className={styles.navigatepages}>
            <Button variant="text" href="/">
              <span className={styles.buttontext}>Home</span>
            </Button>
          </div>
          <div className={styles.navigatepages}>
            <Button variant="text" onClick={openDrawer}>
              <span className={styles.buttontext}>About</span>
            </Button>
            <Drawer
              anchor="left"
              open={Boolean(anchorDrawer)}
              onClose={closeDrawer}
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
              <About/>
            </Drawer>
          </div>
          <div className={styles.navigatepages}>
            <Button variant="text" >
              <span className={styles.buttontext}>People</span>
            </Button>
          </div>
          <div className={styles.flexcontainer}></div>

          <div className={styles.logininstance1}>
            <Button variant="outlined" href="./signin" fullWidth>
              Login
            </Button>
          </div>
        </div>

        <div className={styles.flexcontainer}>
          <div className={styles.flexcontainer1}>
            <div className={styles.catabsolutecontainer}>
              <span className={styles.meetyour}>Meet Your</span>
              <span className={styles.musaictext}>MUSAIC</span>
              <span className={styles.gettheplaylistjus}>
                Get the playlist just for you, with songs fit your preference.
              </span>
              <div className={styles.logininstance}>
                <Button variant="text" href="./signin" fullWidth sx={{ height: 60, color: "primary.light" }}>
                  LET’S GO!
                </Button>
              </div>

            </div>
            <img className={styles.vector1} src={vector1} />
            <img className={styles.vector} src={vector} />
          </div>
        </div>
        <div className={styles.flexcontainer}>
          <div className={styles.flexcontainer}></div>

          <img className={styles.tri} src={tri} />
          <div className={styles.flexcontainer}></div>

        </div>

      </div>

      <div className={styles.landingdown}>
        <div className={styles.flexcontainer}></div>
        <div className={styles.landingdownflexcontainer}>
          <img className={styles.landingimage1} src={music} />
        </div>
        <div className={styles.flexcontainer}></div>
        <img className={styles.ellipse} src={ellipse} />
        <div className={styles.flexcontainer}></div>
        <div className={styles.landingdownflexcontainer}>
          <img className={styles.landingimage2} src={whenever} />
        </div>
        <div className={styles.flexcontainer}></div>
        <img className={styles.ellipse} src={ellipse} />
        <div className={styles.flexcontainer}></div>
        <div className={styles.landingdownflexcontainer}>
          <img className={styles.landingimage3} src={whoever} />
        </div>
        <div className={styles.flexcontainer}></div>
      </div>
      <span className={styles.num20238bitsterms}>
        <span className={styles.num20238bitstermsbtext}>@2023 8BITS</span>
        <Link href="/tos" className={styles.num20238bitstermsbtext}>Terms of Service</Link>
        <Link href="https://www.gdprprivacypolicy.net/live.php?token=RYjiEytOOHcu0QGU3fMFSlUObDcusrYS" className={styles.num20238bitstermsbtext}>Privacy Policy</Link>
      </span>

    </div>
  );
};
export default App;
