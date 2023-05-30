import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.containerNavigation}>
        <nav className={styles.navigation}>
            <a href='#'>Characters</a>
            <a href='#'>History</a>
            <a href='#'>Cards</a>
            <a href='#'>Download a game</a>
        </nav>
    </div>
  )
}

export default Header