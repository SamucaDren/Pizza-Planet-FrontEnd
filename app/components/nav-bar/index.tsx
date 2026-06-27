import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import Buttom from "@/app/components/buttom";

export default function NavBar() {
  return (
    <nav className={styles.navBarContainer}>
      <Image src="/logo.svg" width={185} height={34} alt={""} />
      <div className={styles.linksContainerNavBar}>
        <Link href="/">Exemplo</Link>
        <Link href="/">Exemplo</Link>
        <Link href="/">Exemplo</Link>
      </div>
      <Buttom
        text="Fazer pedido"
        ariaLabel="Relizar pedido"
        type="primary"
        tagHtml="url"
        href="/"
      />
    </nav>
  );
}
