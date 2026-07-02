import styles from "./style.module.css";
import { PersonalInfos } from "@/app/types/personalInfos";

interface PersonalInfosSelectProps {
  personalInfo: PersonalInfos;
  onClick: (personalInfo: PersonalInfos) => void;
}

export default function PersonalInfosSelect({
  personalInfo,
  onClick,
}: PersonalInfosSelectProps) {
  return (
    <div
      onClick={() => onClick(personalInfo)}
      className={styles.personalInfosContainer}
    >
      <div className={styles.headerContainer}>
        <span className={styles.main}>{personalInfo.nome}</span>
        <span className={styles.sub}>{personalInfo.telefone}</span>
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.headerContainer}>
        <span
          className={styles.main}
        >{`${personalInfo.rua}, ${personalInfo.numero}`}</span>
        <span className={styles.sub}>{personalInfo.bairro}</span>
      </div>
    </div>
  );
}
