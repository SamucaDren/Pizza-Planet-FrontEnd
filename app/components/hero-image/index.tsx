import styles from "./style.module.css";
import Image from "next/image";

export default function HeroImage() {
  return (
    <>
      <div className={styles.imageContainerHeroSection}>
        <Image
          src="/handWithPizza.webp"
          width={504}
          height={604}
          alt={"mão segurando pizza"}
          className={styles.imageHeroSection}
        />
        <div className={styles.textOnAroContainer}>
          <Image
            src="/textAroSvg.svg"
            width={986}
            height={988}
            alt={""}
            className={styles.textOnAroHeroSection}
          />
        </div>
        <svg
          className={styles.aroHeroImage}
          width="1018"
          height="509"
          viewBox="0 0 1018 509"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1018 509C1018 374.005 964.373 244.539 868.917 149.083C773.461 53.6266 643.995 1.01919e-05 509 0C374.005 -1.01919e-05 244.539 53.6266 149.083 149.083C53.6267 244.539 2.03837e-05 374.005 0 509L86.709 509C86.709 397.001 131.2 289.59 210.395 210.395C289.59 131.2 397.001 86.709 509 86.709C620.999 86.709 728.41 131.2 807.605 210.395C886.8 289.59 931.291 397.001 931.291 509H1018Z" />
        </svg>
        <svg
          width="744"
          height="287"
          viewBox="0 0 744 287"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.baseOnAro}
        >
          <path
            d="M743 371.5C743 272.972 703.86 178.48 634.19 108.81C564.52 39.1401 470.028 7.43865e-06 371.5 0C272.972 -7.43865e-06 178.48 39.14 108.81 108.81C39.1401 178.48 1.48773e-05 272.972 0 371.5L371.5 371.5H743Z"
            fill="#FFBFA8"
          />
        </svg>
      </div>
    </>
  );
}
