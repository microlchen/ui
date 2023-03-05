import * as React from "react";
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Button from "@mui/material/Button";
const App = () => {
  const propsData = {
    login: {
      variant: "outlined",
      color: "secondary",
      children: "LET’S GO!",
      href: "./signin",
    },
    login1: {
      children: "Button",
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
    <>
      <Head>
        <title> Musiac </title>
        <link rel="icon" href="/landing/logo.png" />
      </Head>

      <div className={styles.landing}>
        <div className={styles.flexcontainer}>
          <img className={styles.untitledartwork4} src={untitledArtwork} />
          <div className={styles.flexcontainer1}>
            <div className={styles.catabsolutecontainer}>
              <Button className={styles.logininstance1} {...propsData.login1} />
              <span className={styles.meetyourmusaic}>Meet Your MUSAIC</span>
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


    </>
  );
};
export default App;
