import React, { useState } from "react";

import styles from "./Section.module.css";

const Section = ({ title }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className={styles.topBar}>
      <h3 className={styles.topAlbums}>{title}</h3>
      <h3 className={styles.expandCollapse}>
        {expand ? `Collapse` : `Show All`}
      </h3>
    </div>
  );
};

export default Section;
