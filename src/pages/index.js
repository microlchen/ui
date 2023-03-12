import * as React from "react";
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Button from "@mui/material/Button";
const App = () => {
  const ellipse = "/landingdown/ellipse.svg";
  const group = "/landingdown/group.svg";
  const logo = "/landingdown/logo.svg";
  const group1 = "/landingdown/group1.svg"
  const propsData = {
    secondary: "#8791F9",
    login: {
      variant: "outlined",
      color: "secondary",
      children: "LET’S GO!",
      href: "./signin",
    },
    login1: {
      children: "Login",
      color: "secondary",
      variant: "outlined",
      size: "large",
      href: "./landingdown",
    },
  };
  const untitledArtwork = "/landing/logo.png";
  const vector = "/landing/vector1.svg";
  const vector1 = "/landing/vector.svg";

  return (
    <div className={styles.all}>
      <Head>
        <title> Musiac </title>
        <link rel="icon" href="/landing/logo.png" />
      </Head>
    
      <div className={styles.landing} style = {{marginLeft:0}}>
        <div className={styles.flexcontainer}>
          <img className={styles.untitledartwork4} src={untitledArtwork} />
          <Button variant="text" className={styles.navigatepages}>About</Button>
        </div>

        <div className={styles.flexcontainer}>
          <div className={styles.flexcontainer1}>
            <div className={styles.catabsolutecontainer}>
              <Button className={styles.logininstance1} {...propsData.login1} />
              <span className={styles.meetyour}>Meet Your</span>
              <span className={styles.musaictext}>MUSAIC</span>
              <span className={styles.gettheplaylistjus}>
                Get the playlist just for you, with songs fit your preference.
              </span>
              <Button className={styles.logininstance} {...propsData.login} />

            </div>
            <img className={styles.vector1} src={vector1} />
            <img className={styles.vector} src={vector} />
          </div>
        </div>


      </div>

      <div className={styles.landingdown}>

        <div className={styles.landingdownflexcontainer}>
          <img className={styles.landingimage} src={group} />
          <span className={styles.landingdowntext1}>MUSIC U Like</span>
          <span className={styles.landingdowntext2}>
            Pick song features you prefer by using our VIBE PICKER feature to
            customize your playlist
          </span>
        </div>
        <img className={styles.ellipse} src={ellipse} />
        <div className={styles.landingdownflexcontainer}>
          <img className={styles.landingimage} src={logo} />
          <span className={styles.landingdowntext1}>WHEREEVER You Are</span>
          <span className={styles.landingdowntext2}>
            Link to your SPOTIFY account to enjoy simple but exciting personalized
            music experience{" "}
          </span>

        </div>
        <img className={styles.ellipse} src={ellipse} />
        <div className={styles.landingdownflexcontainer}>
          <img className={styles.landingimage} src={group1} />
          <span className={styles.landingdowntext1}>WHOEVER You’re With</span>
          <span className={styles.landingdowntext2}>
            Check our FRIEND MATCH feature to get mixed playlist for you and your
            friend
          </span>
        </div>


      </div>

      <span className={styles.num20238bitsterms}>
        @2023 8BITS Terms of Service Privacy Policy
      </span>


    </div>
  );
};
export default App;
