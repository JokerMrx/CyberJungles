import Header from "../../components/Header/Header";
import CardCharacters from "../../components/Cards/CardCharacters/CardCharacters";
import History from "../../components/History/History";

import ImagePerson from "../../assets/image/person.png";
import ImageDiamondMD from "../../assets/image/diamond-md.png";
import ImageDiamondSM from "../../assets/image/diamond-sm.png";
import ImageWeapon from "../../assets/image/weapon.png";

import { CHARACTERS_DATA } from "../../data/MainPage.data";
import { HISTORY_DATA } from "../../data/History.data";

import styles from "./MainPage.module.scss";

const PERSON = "Person";
const DIAMOND = "Diamond";
const WEAPON = "Weapon";

const MainPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <section className={styles.facePage}>
        <h3 className={styles.subtitle}>New Era of Card Battles</h3>
        <h1 className={styles.mainTitle}>CyberJungles</h1>
        <img className={styles.imgPerson} src={ImagePerson} alt={PERSON} />
      </section>
      <section className={styles.info}>
        <div className={styles.content}>
          <p>
            In a world where people used cybernetics to create perfect and
            <br />
            deadly animal-machines, a terrible event occurred. Control over
            <br />
            some of these creations was lost, and they began attacking
            <br />
            humans, destroying everything in their path. In this dystopia,
            <br />
            the surviving humans formed different factions and compete
            <br />
            with each other using their cyber beasts in a card battle. The
            <br />
            player must choose their faction and assemble a deck of cyber
            <br />
            animals for battle.
          </p>
        </div>
        <img
          alt={DIAMOND}
          src={ImageDiamondSM}
          className={styles.imgDiamondSM}
        />
        <img
          alt={DIAMOND}
          src={ImageDiamondMD}
          className={styles.imgDiamondMD}
        />
        <img alt={WEAPON} src={ImageWeapon} className={styles.imgWeapon} />
      </section>
      <section className={styles.characters}>
        <h1 className={styles.title}>
          C<span>h</span>ara<span>c</span>ters
        </h1>
        <div className={styles.cards}>
          {CHARACTERS_DATA.map(({ name, des, img }) => (
            <CardCharacters name={name} des={des} img={img} />
          ))}
        </div>
      </section>
      <section className={styles.history}>
        <h1 className={styles.title}>
          Hi<span>s</span>tor<span>y</span>
        </h1>
        <div className={styles.histories}>
          {HISTORY_DATA.map(({ img, history, bg }) => (
            <History img={img} history={history} bg={bg} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainPage;
