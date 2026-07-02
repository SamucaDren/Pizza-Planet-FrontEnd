import styles from "./style.module.css";
import { PersonalInfos } from "@/app/types/personalInfos";

interface PersonalInfosSelectProps {
  personalInfo: PersonalInfos;
}

export default function PersonalInfosSelect({
  personalInfo,
}: PersonalInfosSelectProps) {
  return (
    <div className={styles.personalInfosContainer}>
      <div className={styles.headerContainer}>
        <span className={styles.nameText}>{personalInfo.nome}</span>
        <span className={styles.telText}>{personalInfo.telefone}</span>
      </div>
    </div>
  );
}
