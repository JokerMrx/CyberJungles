import { FC } from "react";

import { IHistory } from "../../models/IHistory";

import styles from "./History.module.scss";

const HISTORY = "History";

const History: FC<IHistory> = ({ img, history, bg }) => {
  return (
    <div className={styles.history}>
      <img alt={HISTORY} src={img} />
      <div
        className={styles.bg}
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover"
        }}
      >
        <div className={styles.opacity}>
          <p className={styles.content}>{history}</p>
        </div>
      </div>
    </div>
  );
};

export default History;
