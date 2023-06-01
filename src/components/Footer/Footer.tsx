import IconDiscord from "../../assets/image/social/discord.svg";
import IconFacebook from "../../assets/image/social/facebook.svg";
import IconInstagram from "../../assets/image/social/instagram.svg";
import IconTikTok from "../../assets/image/social/tik_tok.svg";
import IconTwitch from "../../assets/image/social/twitch.svg";
import IconTwitter from "../../assets/image/social/twitter.svg";
import IconYoutube from "../../assets/image/social/youtube.svg";
import IconArrowTop from "../../assets/image/arrow-top.svg";

import styles from "./Footer.module.scss";

const DISCORD = "discord";
const FACEBOOK = "facebook";
const INSTAGRAM = "instagram";
const TIK_TOK = "tik tok";
const TWITCH = "twitch";
const TWITTER = "twitter";
const YOUTUBE = "youtube";
const TOP = "Top";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h5 className={styles.des}>New Era of Card Battles</h5>
        <h4 className={styles.name}>CyberJungles</h4>
      </div>
      <div>
        <p className={styles.rights}>All rights reserved</p>
        <p className={styles.year}>2023</p>
      </div>
      <div className={styles.containerSocial}>
        <div className={styles.socials}>
          <img src={IconDiscord} alt={DISCORD} />
          <img src={IconFacebook} alt={FACEBOOK} />
          <img src={IconInstagram} alt={INSTAGRAM} />
          <img src={IconTikTok} alt={TIK_TOK} />
          <img src={IconTwitch} alt={TWITCH} />
          <img src={IconTwitter} alt={TWITTER} />
          <img src={IconYoutube} alt={YOUTUBE} />
        </div>
        <div className={styles.containerBtn}>
            <button className={styles.btnToTop}>
                <img src={IconArrowTop} alt={TOP} />
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
