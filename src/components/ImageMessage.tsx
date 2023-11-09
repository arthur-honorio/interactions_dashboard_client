import style from "./ImageMessage.module.css";

export function ImageMessage() {
  return (
    <img
      alt="img"
      className={style["user-image"]}
      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f"
    />
  );
}
