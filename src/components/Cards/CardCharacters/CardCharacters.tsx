import { FC } from "react";

import { ICharacter } from "../../../models/ICardCharacters";

import styles from "./CardCharacters.module.scss";

const CardCharacters: FC<ICharacter> = ({name, des, img}) => {
  return (
    <div className={styles.card}>
        <img alt={name} src={img} className={styles.img}/>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.des}>{des}</p>
    </div>
  )
}

export default CardCharacters