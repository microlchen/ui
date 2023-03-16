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

  return (
    <div className={styles.all}>
      <Head>
        <title> Musiac </title>
        <link rel="icon" href="./" />
      </Head>
    
      <div className={styles.landing} style = {{marginLeft:0}}>
        <div className={styles.flexcontainer}>
          <img className={styles.untitledartwork4} src={untitledArtwork} />
          <div className={styles.navigatepages}>
            <Button variant="text" href="/">
            <span className={styles.buttontext}>Home</span>
            </Button>
          </div>
          <div className={styles.navigatepages}>
            <Button variant="text" href="/about">
            <span className={styles.buttontext}>About</span>
            </Button>
          </div>
          <div className={styles.navigatepages}>
            <Button variant="text" >
            <span className={styles.buttontext}>People</span>
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
            <div className={styles.catabsolutecontainer} style={{marginRight:"15%"}}>
              <span className={styles.meetyour} style={{fontWeight:400, color:"#dcdffb"}}>ABOUT</span>
              <span className={styles.gettheplaylistjus} style={{fontSize:15, lineHeight:1.5}}>
                    With Musaic, it’s easy to find the right playlist customized just for you and your friends.
                    Explore new genres, people, chord progression, or even choose your songs based on just your mood.
                    There are millions of tracks and episodes on Spotify.
                </span>

                <span className={styles.gettheplaylistjus} style={{marginTop:-20, fontSize:15, lineHeight:1.5}}>
                    So whether you’re behind the wheel, working out, partying or relaxing, you can use Musaic to find the best music for you.
                    Choose what you want to listen to, or let our AI surprise you. With Musiac, you can blend your music tastes together or find others just like you.
                    Log in with your Spotify account, and try Musiac out today!
              </span>
              
            </div>
            <img className={styles.vector1} style={{marginTop: "25%", marginRight:"-15%"}} src={vector1} />
            <img className={styles.vector}  src={vector} />
          </div>
        </div>

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
