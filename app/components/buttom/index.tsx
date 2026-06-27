import Link from "next/link";
import styles from "./style.module.css";

type ButtonProps =
  | {
      tagHtml: "url";
      href: string;
      text: string;
      type: "primary" | "secondary";
      ariaLabel?: string;
    }
  | {
      tagHtml: "button";
      onClickButton?: () => void;
      text: string;
      type: "primary" | "secondary";
      ariaLabel?: string;
    };

export default function Buttom(props: ButtonProps) {
  if (props.tagHtml === "button") {
    return (
      <button
        className={styles.buttonContainer}
        onClick={props.onClickButton}
        aria-label={props.ariaLabel}
      >
        {props.text}

        <div className={styles.iconButtonContainer}>
          <svg
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.65691 16.7071C7.04743 17.0976 7.6806 17.0976 8.07112 16.7071L14.4351 10.3431C14.8256 9.95262 14.8256 9.31946 14.4351 8.92893C14.0446 8.53841 13.4114 8.53841 13.0209 8.92893L7.36401 14.5858L1.70716 8.92893C1.31663 8.53841 0.68347 8.53841 0.292945 8.92893C-0.0975789 9.31946 -0.097579 9.95262 0.292945 10.3431L6.65691 16.7071ZM7.36401 0L6.36401 -4.37114e-08L6.36401 16L7.36401 16L8.36401 16L8.36401 4.37114e-08L7.36401 0Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
    );
  }

  return (
    <Link
      className={styles.buttonContainer}
      href={props.href!}
      aria-label={props.ariaLabel}
    >
      {props.text}
      <div className={styles.iconButtonContainer}>
        <svg
          width="15"
          height="17"
          viewBox="0 0 15 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.65691 16.7071C7.04743 17.0976 7.6806 17.0976 8.07112 16.7071L14.4351 10.3431C14.8256 9.95262 14.8256 9.31946 14.4351 8.92893C14.0446 8.53841 13.4114 8.53841 13.0209 8.92893L7.36401 14.5858L1.70716 8.92893C1.31663 8.53841 0.68347 8.53841 0.292945 8.92893C-0.0975789 9.31946 -0.097579 9.95262 0.292945 10.3431L6.65691 16.7071ZM7.36401 0L6.36401 -4.37114e-08L6.36401 16L7.36401 16L8.36401 16L8.36401 4.37114e-08L7.36401 0Z"
            fill="white"
          />
        </svg>
      </div>
    </Link>
  );
}
