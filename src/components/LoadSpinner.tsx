import style from "./LoadSpinner.module.css";

export function LoadSpinner() {
  return (
    <div className={style["loader"]}>
      <div className={style["lds-roller"]}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
