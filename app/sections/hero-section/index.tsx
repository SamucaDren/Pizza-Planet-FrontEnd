import styles from "./style.module.css";
import Buttom from "@/app/components/buttom";
import HeroImage from "@/app/components/hero-image";
import NavBar from "@/app/components/nav-bar";

export default function HeroSection() {
  return (
    <>
      <section className={styles.heroSectionContainer}>
        <NavBar />
        <div className={styles.contentHeroContainer}>
          <div className={styles.headerContainer}>
            <span className="tag">seu refugio saboroso</span>
            <h1 className={styles.headlineHeroSection}>
              Pizzas feitas para<br></br>
              <span>encantar!</span>
            </h1>
            <p className={styles.subheadlineHeroSection}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Buttom
              text="Confira as opções"
              ariaLabel="Ver as opções do cardápio"
              type="primary"
              tagHtml="url"
              href="/"
              direction="to-down"
            />
          </div>
          <HeroImage />
        </div>
      </section>
    </>
  );
}
