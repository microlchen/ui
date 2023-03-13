import * as React from "react";
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Button from "@mui/material/Button";
import Link from 'next/link'
import { useState, useEffect } from 'react';

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

  // if (typeof window !== "undefined") {
  //   const [windowSize, setWindowSize] = useState([
  //     window.innerWidth,
  //     window.innerHeight,
  //   ]);
  //   // browser code
  
  
  //   useEffect(() => {
  //     const handleWindowResize = () => {
  //       setWindowSize([window.innerWidth, window.innerHeight]);
  //     };
  
  //     window.addEventListener('resize', handleWindowResize);
  
  //     return () => {
  //       window.removeEventListener('resize', handleWindowResize);
  //     };
  //   });
  //   if (window.innerWidth<5000){
  //     group = "/landingdown/grouptgrc.png"
  //   } 
  //   if (window.innerWidth<500){
  //     group = "/landingdown/grouptgr.png"
  //   }
  // }
  return (
    <div className={styles.all}>
      <Head>
        <title> Musiac </title>
        <link rel="icon" href="/landing/logo.png" />
      </Head>
    
      <div className={styles.landing} style = {{marginLeft:0}}>
        <div className={styles.flexcontainer}>
          {/* <div> */}
          <img className={styles.untitledartwork4} src={untitledArtwork} />
          <div className={styles.navigatepages}>
            <Button variant="text" >
            <span className={styles.buttontext}>About</span>
            </Button>
          </div>
          <div className={styles.navigatepages}>
            <Button variant="text" >
            <span className={styles.buttontext}>People</span>
            </Button>
          </div>
          <div className={styles.navigatepages}>
            <Button variant="text" >
            <span className={styles.buttontext}>Gallery</span>
            </Button>
          </div>
          <div className={styles.flexcontainer}></div>
          
          <div className={styles.logininstance1}>
            <Button variant = "outlined" href = "./signin" fullWidth>
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
                <Button variant = "text" href = "./signin" fullWidth sx = {{height:60, color:"primary.light"}}>
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
        {/* <img className={styles.landingimage1} src={group} /> */}
        <div className={styles.flexcontainer}></div>

        <div className={styles.landingdownflexcontainer}>
          <img className={styles.landingimage1} src={music} />
          {/* <div className={styles.flexcontainer}></div>

          <span className={styles.landingdowntext1}>
            MUSIC
          </span>
          <span className={styles.landingdowntextsmall}>You Like</span>
          <span className={styles.landingdowntext2}>
            Pick song features you prefer by using our VIBE PICKER feature to
            customize your playlist
          </span> */}
        </div>
        <div className={styles.flexcontainer}></div>
        <img className={styles.ellipse} src={ellipse} />
        <div className={styles.flexcontainer}></div>
        <div className={styles.landingdownflexcontainer}>
          <img className={styles.landingimage2} src={whenever} />
          {/* <span className={styles.landingdowntext1}>WHENEVER</span>
          <span className={styles.landingdowntextsmall}>You Are</span>
          <span className={styles.landingdowntext2}>
            Link to your SPOTIFY account to enjoy simple but exciting personalized
            music experience{" "}
          </span> */}
        </div>
        <div className={styles.flexcontainer}></div>
        <img className={styles.ellipse} src={ellipse} />
        <div className={styles.flexcontainer}></div>
        <div className={styles.landingdownflexcontainer}>
          <img className={styles.landingimage3} src={whoever} />
          {/* <span className={styles.landingdowntext1}>WHOEVER</span>
          <span className={styles.landingdowntextsmall}>You’re With</span>
          <span className={styles.landingdowntext2}>
            Check our FRIEND MATCH feature to get mixed playlist for you and your
            friend
          </span> */}
        </div>
        <div className={styles.flexcontainer}></div>



      </div>
      <span className={styles.num20238bitsterms}>
        <span className={styles.num20238bitstermsbtext}>@2023 8BITS</span>
        <Link href="/" className={styles.num20238bitstermsbtext}>Terms of Service</Link>
        <Link href="/" className={styles.num20238bitstermsbtext}>Privacy Policy</Link>
      </span>

    </div>
  );
};
export default App;
