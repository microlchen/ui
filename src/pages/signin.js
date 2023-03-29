import * as React from "react";
import styles from '@/styles/Home.module.css'
import Bottom from "@/components/index/_bottom";
import Signin from "@/components/signin/_signinbox";

const App = () => {
  const vector2 = "/signin/vector0.svg";

  return (
    <div className={styles.all}>

      <div className={styles.landing}>
        <Signin/>
        <img className={styles.vector0} src={vector2} />
        <Bottom/>
      </div>

    </div>
  );
};
export default App;
