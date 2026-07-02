import styles from "./style.module.css";

interface InputProps {
  name: string;
  placeholder?: string;
  showLabel?: boolean;
  typeInput?:
    | "text"
    | "email"
    | "tel"
    | "password"
    | "date"
    | "datetime-local"
    | "number";

  labelText?: string;
  onAddContent: (value: string) => void;

  isBox?: boolean;
  heightOfBox?: number;
  errorMessage?: string;
  value?: string;
  autoComplete?: string;
}

export default function Input({
  name,
  placeholder = "Insira Aqui...",
  showLabel = true,
  labelText = "Campo",
  typeInput = "text",
  onAddContent,
  isBox,
  heightOfBox,
  value = "",
  errorMessage,
  autoComplete,
}: InputProps) {
  function handleDateTimeChange(date: string, time: string) {
    if (!date || !time) return;

    onAddContent(`${date}T${time}`);
  }

  const dateValue = value ? value.split("T")[0] : "";
  const timeValue = value ? value.split("T")[1]?.slice(0, 5) : "";

  return (
    <div className={styles.inputContainerSingle}>
      {showLabel && <label htmlFor={name}>{labelText}</label>}

      {isBox ? (
        <textarea
          auto-complete={autoComplete}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onAddContent(e.target.value)}
          className={styles.inputText}
          style={{ height: heightOfBox }}
        />
      ) : typeInput === "datetime-local" ? (
        <div className="datetime-container">
          <input
            auto-complete={autoComplete}
            type="date"
            className={styles.dateInput}
            value={dateValue}
            onChange={(e) => {
              handleDateTimeChange(e.target.value, timeValue || "00:00");
            }}
          />

          <input
            id={`${name}-time`}
            type="time"
            className={styles.timeInput}
            value={timeValue}
            onChange={(e) => {
              handleDateTimeChange(dateValue || "", e.target.value);
            }}
          />
        </div>
      ) : (
        <input
          auto-complete={autoComplete}
          id={name}
          name={name}
          type={typeInput}
          value={value}
          placeholder={placeholder}
          onChange={(e) =>
            onAddContent(
              typeInput == "tel" ? formatPhone(e.target.value) : e.target.value,
            )
          }
          className={styles.inputText}
        />
      )}
      {errorMessage && <span className={styles.errorSpan}>{errorMessage}</span>}
    </div>
  );
}

function formatPhone(value: string) {
  const numbers = value.replace(/\D/g, "").slice(0, 11);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 6) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  }

  if (numbers.length <= 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
  }

  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
}
