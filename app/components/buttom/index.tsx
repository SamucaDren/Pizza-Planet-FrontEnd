import Link from "next/link";
import styles from "./style.module.css";

type ButtonProps =
  | {
      tagHtml: "url";
      href: string;
      text: string;
      type: "primary" | "secondary";
      ariaLabel?: string;
      direction: "to-up" | "to-down" | "to-left" | "to-right";
      className?: string;
      withSeta?: boolean;
    }
  | {
      tagHtml: "button";
      onClickButton?: () => void;
      text: string;
      type: "primary" | "secondary";
      ariaLabel?: string;
      direction: "to-up" | "to-down" | "to-left" | "to-right";
      className?: string;
      withSeta?: boolean;
    }
  | {
      tagHtml: "seta";
      type: "primary" | "secondary";
      direction: "to-up" | "to-down" | "to-left" | "to-right";
      onClickButton?: () => void;
      ariaLabel?: string;
      className?: string;
    };

export default function Buttom(props: ButtonProps) {
  const setaSVG = setaReturn(props.direction);

  if (props.tagHtml === "button") {
    const withSeta = props.withSeta ?? true;
    return (
      <button
        className={
          withSeta
            ? props.type === "primary"
              ? styles.buttonContainer
              : styles.buttonSecondaryContainer
            : props.type === "primary"
              ? styles.buttonContainerWithoutSeta
              : styles.buttonSecondaryContainerWithoutSeta +
                " " +
                props.className
        }
        onClick={props.onClickButton}
        aria-label={props.ariaLabel}
      >
        {props.text}
        {withSeta ? (
          <div className={styles.iconButtonContainer}>{setaSVG}</div>
        ) : null}
      </button>
    );
  } else if (props.tagHtml === "seta") {
    return (
      <button
        className={styles.buttonSetaContainer + " " + props.className}
        onClick={(e) => props.onClickButton}
        aria-label={props.ariaLabel}
      >
        {setaSVG}
      </button>
    );
  } else {
    const withSeta = props.withSeta ?? true;
    return (
      <Link
        className={
          withSeta
            ? props.type === "primary"
              ? styles.buttonContainer
              : styles.buttonSecondaryContainer
            : props.type === "primary"
              ? styles.buttonContainerWithoutSeta
              : styles.buttonSecondaryContainerWithoutSeta +
                " " +
                props.className
        }
        href={props.href!}
        aria-label={props.ariaLabel}
      >
        {props.text}
        {withSeta ? (
          <div className={styles.iconButtonContainer}>{setaSVG}</div>
        ) : null}
      </Link>
    );
  }
}

function setaReturn(direction: string) {
  switch (direction) {
    case "to-up": {
      return (
        <svg
          width="15"
          height="17"
          viewBox="0 0 15 17"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.65685 0.292892C7.04737 -0.0976314 7.68053 -0.0976315 8.07106 0.292892L14.435 6.65685C14.8255 7.04738 14.8255 7.68054 14.435 8.07107C14.0445 8.46159 13.4113 8.46159 13.0208 8.07107L7.36395 2.41421L1.7071 8.07107C1.31657 8.46159 0.683409 8.46159 0.292884 8.07107C-0.09764 7.68054 -0.09764 7.04738 0.292884 6.65685L6.65685 0.292892ZM7.36395 17L6.36395 17L6.36395 1L7.36395 1L8.36395 1L8.36395 17L7.36395 17Z" />
        </svg>
      );
    }
    case "to-down": {
      return (
        <svg
          width="15"
          height="17"
          viewBox="0 0 15 17"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.65691 16.7071C7.04743 17.0976 7.6806 17.0976 8.07112 16.7071L14.4351 10.3431C14.8256 9.95262 14.8256 9.31946 14.4351 8.92893C14.0446 8.53841 13.4114 8.53841 13.0209 8.92893L7.36401 14.5858L1.70716 8.92893C1.31663 8.53841 0.68347 8.53841 0.292945 8.92893C-0.0975789 9.31946 -0.097579 9.95262 0.292945 10.3431L6.65691 16.7071ZM7.36401 0L6.36401 -4.37114e-08L6.36401 16L7.36401 16L8.36401 16L8.36401 4.37114e-08L7.36401 0Z" />
        </svg>
      );
    }
    case "to-right": {
      return (
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.7071 6.65686C17.0976 7.04739 17.0976 7.68055 16.7071 8.07107L10.3431 14.435C9.95262 14.8256 9.31946 14.8256 8.92893 14.435C8.53841 14.0445 8.53841 13.4113 8.92893 13.0208L14.5858 7.36397L8.92893 1.70711C8.53841 1.31659 8.53841 0.683424 8.92893 0.2929C9.31946 -0.0976243 9.95262 -0.0976243 10.3431 0.2929L16.7071 6.65686ZM0 7.36397L0 6.36397L16 6.36397V7.36397V8.36397L0 8.36397L0 7.36397Z" />
        </svg>
      );
    }
    case "to-left": {
      return (
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.292892 8.07107C-0.0976315 7.68055 -0.0976314 7.04738 0.292893 6.65686L6.65686 0.292899C7.04738 -0.0976252 7.68054 -0.0976251 8.07107 0.292899C8.46159 0.683424 8.46159 1.31659 8.07107 1.70711L2.41421 7.36397L8.07107 13.0208C8.46159 13.4113 8.46159 14.0445 8.07107 14.435C7.68054 14.8256 7.04738 14.8256 6.65685 14.435L0.292892 8.07107ZM17 7.36397L17 8.36397L1 8.36397L1 7.36397L1 6.36397L17 6.36397L17 7.36397Z" />
        </svg>
      );
    }
    default: {
      return (
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.7071 6.65686C17.0976 7.04739 17.0976 7.68055 16.7071 8.07107L10.3431 14.435C9.95262 14.8256 9.31946 14.8256 8.92893 14.435C8.53841 14.0445 8.53841 13.4113 8.92893 13.0208L14.5858 7.36397L8.92893 1.70711C8.53841 1.31659 8.53841 0.683424 8.92893 0.2929C9.31946 -0.0976243 9.95262 -0.0976243 10.3431 0.2929L16.7071 6.65686ZM0 7.36397L0 6.36397L16 6.36397V7.36397V8.36397L0 8.36397L0 7.36397Z" />
        </svg>
      );
    }
  }
}
