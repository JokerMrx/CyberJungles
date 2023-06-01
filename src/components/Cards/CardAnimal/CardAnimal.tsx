import { FC } from "react";

import { ICardAnimal } from "../../../models/ICardAnimal";

import styles from "./CardAnimal.module.scss";

const CardAnimal: FC<ICardAnimal> = ({img, name, price, damage, health}) => {
  return (
    <div className={styles.card}>
        <div className={styles.price}>
            {price}
        </div>
        <div className={styles.damage}>
            {damage}
        </div>
        <div className={styles.health}>
            {health}
        </div>
        <img src={img} alt={name} />
        <p className={styles.name}>{name}</p>
    </div>
  )
}

export default CardAnimal