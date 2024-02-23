import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo_radcom.png";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.main_nav}>
      <ul className={styles.nav_ul}>
        <li>
          <Link href="#">
            <Image
              className={styles.logo}
              src={Logo}
              alt="radcom-logo"
              width={80}
              heigth={80}
            ></Image>
          </Link>
        </li>
        <li>
          <Link className={styles.nav_li} href="#">
            Clientes
          </Link>
        </li>
        <li className={styles.nav_li}>
          <Link className={styles.nav_li} href="#">
            Contratos
          </Link>
        </li>
        <li className={styles.nav_li}>
          <Link className={styles.nav_li} href="#">
            Atendimentos
          </Link>
        </li>
        <li className={styles.nav_li}>
          <Link className={styles.nav_li} href="#">
            Anotações
          </Link>
        </li>
      </ul>
    </nav>
  );
}
