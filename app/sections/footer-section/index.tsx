import styles from "./style.module.css";
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.contentFooter}>
        {" "}
        <span className={styles.rightReserved}>
          {new Date().getFullYear()} ORDNRY - Todos os direitos reservados
        </span>
        <a href="https://ordnrydesign.com/front-end" target="_blank">
          <Image
            src="/logo-ordnry.svg"
            alt="Logo ORDNRY"
            width={128}
            height={28}
          />
        </a>
      </div>
    </footer>
  );
}
