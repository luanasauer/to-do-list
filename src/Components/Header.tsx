import logo from '../assets/logo.svg';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logotipo foguete todo-list" />
            <div className={styles.logoText}>
                <span className={styles.logoTextTo}>to</span>
                <span className={styles.logoTextDo}>do</span>
            </div>
        </header>
    );
}