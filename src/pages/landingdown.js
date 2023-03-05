import * as React from "react";
import styles from '@/styles/Home.module.css'
import Head from 'next/head'

const App = () => {
  const ellipse = "/landingdown/ellipse.svg";
  const group = "/landingdown/group.svg";
  const logo = "/landingdown/logo.svg";
  const group1 = "/landingdown/group1.svg"
  return (

    <>
      <Head>
        <title> Musiac </title>
        <link rel="icon" href="/landing/logo.png" />
      </Head>
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
    </>
  );
};
export default App;
