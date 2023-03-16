import * as React from "react";
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Button from "@mui/material/Button";
import Link from 'next/link'
import { Checkbox } from "@mui/material";

const App = () => {
  const rectangle = "/signin/rectangle.svg";
  const vector = "/signin/linevector.svg";
  const logo = "/signin/logotext.png";
  const vector2 = "/signin/vector0.svg";
  const spotify = "/signin/spotify.png";
  return (
    <div className={styles.all}>
      
      <div className={styles.landing}>
        <div className={styles.signinoutercontainer}>
          {/* <div className={styles.signinflexcontainer}>
          </div> */}
          <div className={styles.flexcontainer11}>
            <div className={styles.signinlogobox}>
            <Button href="/"><img className={styles.signinlogo} src={logo} /></Button>
            </div>
            <img className={styles.vvector1} src={vector} />
            <div className={styles.flexcontainer22}>
              <Checkbox/>
              <span className={styles.iagreewiththeter}>
                I agree with the Terms of Service and Privacy Policy of this site
              </span>
            </div>
            <div className={styles.rectangle1157instance}>

            <Button variant = "outlined" href = "./signin" fullWidth sx={{height:45, borderWidth:2}}>
            <img className={styles.spotifylogin} src={spotify} />
              Login with Spotify
            </Button>
          </div>
            <span className={styles.whydoihavetolog}>
              Why do I have to login with Spotify?
            </span>
          </div>
        </div>
        <img className={styles.vector0} src={vector2} />
        <span className={styles.num20238bitsterms}>
        <span className={styles.num20238bitstermsbtext}>@2023 8BITS</span>
        <Link href="/" className={styles.num20238bitstermsbtext}>Terms of Service</Link>
        <Link href="/" className={styles.num20238bitstermsbtext}>Privacy Policy</Link>
      </span>
      </div>

    </div>
  );
};
export default App;
