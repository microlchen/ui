import * as React from "react";
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const App = () => {
  const propsData = {
    rectangle1157: {
      color: "inherit",
      children: "Press",
      size: "small",
      variant: "outlined",
    },
  };
  const rectangle = "/signin/rectangle.svg";
  const vector = "/signin/linevector.svg";
  const logo = "/signin/logotext.png";
  const vector2 = "/signin/vector0.svg";
  return (
    <div className={styles.all}>
      <Head>
        <title> Musiac </title>
        <link rel="icon" href={logo} />
      </Head>
      <div className={styles.landing}>
        <div className={styles.signinoutercontainer}>
          <div className={styles.signinflexcontainer}>
            <img className={styles.signinlogo} src={logo} />
          </div>
          <img className={styles.vvector1} src={vector} />
          <div className={styles.flexcontainer11}>
            <div className={styles.flexcontainer22}>
              <img className={styles.rectangle1156} src={rectangle} />
              <span className={styles.iagreewiththeter}>
                I agree with the Terms of Service and Privacy Policy of this site
              </span>
            </div>
            <Button
              className={styles.rectangle1157instance}{...propsData.rectangle1157} />
            <span className={styles.whydoihavetolog}>
              Why do I have to login with Spotify?
            </span>
          </div>

        </div>
        <img className={styles.vector0} src={vector2} />
      </div>

    </div>
  );
};
export default App;
